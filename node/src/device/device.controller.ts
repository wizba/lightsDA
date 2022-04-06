import { Controller, Get, Post, Put, Body, Req, Res, Param } from 'node_modules/@nestjs/common';
import { Request, Response } from 'node_modules/@types/express';
// data transfer objects
import { Device } from './dto/device.dto';
import { Help } from './dto/help.dto';

// johny-five (hardware/robotics javascript framework)
import * as five from 'node_modules/johnny-five/lib/johnny-five';
// service that handles Arduino Uno Board
import { BoardService } from 'src/shared/board/board.service';
import { identity } from 'node_modules/rxjs';
import { getEnabledCategories } from 'trace_events';

@Controller('device')
export class DeviceController {

  private board: any;

  /** ...board + boardservice service init */
  constructor(private boardService: BoardService) {
    // this.board = new five.Board();
  }
     /** default get request */
  @Get()
  test(@Res() res: Response): void {
    res.json({ data: 'Welcome to light Rest-Sevices, please read the documention. DEVICES' });
  }
    
    /**
 * redirect data sent to the board service
 * @param device typeDTO interface for data transfer
 * @param res type express respond
 * @param req type express request
 */
  @Post()
  device(@Body() device: Device, @Res() res: Response, @Req() req: Request) {
    this.boardService.actionDevice(device);
    res.json(req.body);
  }

  // get distance from a proximity sensor
  @Get('/distance')
  getDistance(): number {
   return this.boardService.getDistance();
  }

  // get light intensity from  an LDR
  @Get('/light')
  getLightLevel() {
    return this.boardService.getLightLevel();
  }

  //update an action

  @Put('/action')
  getActionData(@Body() device: Device) {
    this.boardService.updateStatus(device);
  }

  @Get('/alert')
  alert()
  {
    
   return this.boardService.getObstacleState();
  }
//
  @Get('/controller')
  isArdReady()
  {
    return this.boardService.boardAvailable();
  }
  @Post('/sos')
  help(@Body() help:Help)
  {
    if(help.becon== "on")
    {
      this.boardService.sos();
    }
    else if(help.becon== "off")
    {
      this.boardService.stopSos();
    }
  }
}
