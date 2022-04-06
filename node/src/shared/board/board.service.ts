import { Injectable,HttpService } from "node_modules/@nestjs/common";
// johny-five (hardware/robotics javascript framework)
import * as five from "node_modules/johnny-five/lib/johnny-five";
import { Device } from "../../device/dto/device.dto";
import { Help } from "../../device/dto/help.dto";
import { response } from "node_modules/@types/express";
const request = require('request');

@Injectable()
export class BoardService
{
  public board;
  private led;
  private proximity;
  private photoresistor;
  private distance;
  private lightLevel;

 
  private lightState:boolean;
  private obstacle:boolean;
 
  trigger:boolean;//trigger light senslr
  toggle:boolean=true;//toggling leds states

  interval:number=600;//
  counter:number=1;//keeps track of the sos
  mySetinterval;//this is the interval function holder used to stop interval
  sosLight;//hods light ports
  toggleInterval:number;

  constructor() 
  {
    this.lightState=false;
    this.obstacle=false;
    this.board = new five.Board();
    
  }

  actionDevice(data: Device): void 
  {
  //  console.log("Board is....: ", this.board.isReady);

    if (this.board.isReady) {
      console.log("Data send....: ", data);

      const { action } = data;
      let { pin } = data;

      // Devices init...
      this.board.led = new five.Led(pin);

  // start reading from sensors after starting the port
      this.sensorDevice();
      this.lightSensor();
          switch (action) {
        case "on":
          this.board.led.on();
          this.lightState=true;
          break;

        case "off":
          this.board.led.off();
          this.lightState=false;
          break;

        case "blink":
          //party mode
          this.board.led.blink();
          break;
        case "stop":
        //stop party mode
          this.board.led.stop();
          break;
          //togle multiple leds
        case "toggle":
          this.allLights();
        break;
        case "sos":
        this.sos();
        break;
        case "sosStop":
        this.stopSos();
        break;
        default:
          this.board.led.off();
          
          break;
      }
    }
  }
  //switch on all the lights
ledArray;  
allLights()
{
  let array = new five.Leds([2,3,4, 5, 6,7]);
  this.ledArray=array;
              //toggling multiple lights
            if(this.toggle==true)
            {
              array.on();
              this.toggle=false;
            }else
            if(this.toggle==false)
            {
              array.off();
              this.toggle=true;
            }
}

///////////////////////determines the level the proximity of a distance ////////////////////////////

sensorDevice(): void { 

  let myobj=this;
  
  this.board.proximity = new five.Proximity({ controller: "GP2Y0A21YK", pin: "A1" });
 
  this.board.proximity.on("data", function() {
    
    myobj.distance=this.cm;

    //setting up the minimum distance
    
      if(myobj.distance<=16)
      {
       
        myobj.obstacle=true;
        myobj.distance=15;
      }
      else
      {
        myobj.obstacle=false;
      }
      
      console.log( myobj.obstacle);

       //console.log(this.cm+" cm");
       //sending data to firebase
      
  });
}

  ////////////////////////SOS//////////////////////////////////
// changes interval for the sos led 
  sos()
  {
    if(this.board.isReady)
    {
      this.mySetinterval=setInterval(()=>{
        this.allLights();
        this.morseCode();
        this.counter++; 
      },this.interval);
    }else{
      this.stopSos();
    }
    
       
  }

  stopSos()
  {
    if(this.board.isReady)
    {
      if(this.ledArray)
      this.ledArray.off();
      clearInterval(this.mySetinterval);
    }
       
  }

  morseCode()
  {
   
    if(this.counter == 6)
    {
          
          if(this.toggleInterval== 1)
          {
            this.interval=500;
            this.toggleInterval = 2;
          }
          else
          {
            this.interval=1000;
            this.toggleInterval= 1;
          }
          //clear interval 
          this.stopSos();
          this.sos();
          this.counter=0;
    }
    //console.log(this.counter);
  }
  /////////////////////////LIGHT SENSOR/////////////////////////
  //determine the level of light
  private timer;
  lightSensor():void
  {
  
    let myobj=this;
    
      this.board.photoresistor= new five.Sensor({

        pin: "A1",
        freq: 250
      });
      this.board.photoresistor.on("data", function() 
      {
        myobj.lightLevel=this.value;

        if(myobj.lightLevel>500) 
        {
          myobj.trigger=true;
        }
        else
        {
          myobj.trigger=false;
        }
          // console.log(this.value);
      });
  }

//alarm stuff  


//update lights
  updateStatus(data: Device)
  {
    //creating a url put request
    let url={ url:'http://localhost:8080/action/'+
                data.id+'/component/'+
                data.pin+'/description/'+
                this.lightState, 
                method: 'PUT', 
                json: {"actionDescription":data.action}
  };

    request(url,(response,error, body)=> {
      console.log('error:', error); // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      console.log('body:', body);
    });
  }
//check if board is available or not 
  /*available:Boolean;
 boardCheck()
 {

  let myobj=this;
  setInterval(()=>{
    myobj.available=myobj.board.isReady;

    console.log(myobj.available);
  },1000);
 }*/

  boardAvailable()
  {
    
    return this.board.isReady;
  }

// monitors light level around the house
  getLightLevel()
  { 
    return this.lightLevel;
  }
  //monitors gate movement
  getDistance()
  {
    return this.distance;
  }
  //get the alert
  getAlert()
   {
    this.lightSensor();
    return this.trigger;
  }
  //get distance alert
  getObstacleState()
  {
    return this.obstacle;
  }
} 
 