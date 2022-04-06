import { Module } from 'node_modules/@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoardService } from './shared/board/board.service';
import { DeviceController } from './device/device.controller';


@Module({
  imports: [
 
  ],
  controllers: [AppController, DeviceController],
  providers: [AppService, BoardService],
})
export class AppModule {}
