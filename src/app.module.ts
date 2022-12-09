import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Room, RoomSchema } from './rooms/room.schema';
import { RoomsModule } from './rooms/rooms.module';
import { RoomsService } from './rooms/rooms.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name:'PLAYERS_TEAMS_MS',
        transport:Transport.TCP,
        options: {
          host: 'localhost',
          port: 6370,
        }
      },
    ]),
    MongooseModule.forFeature([{ name: Room.name, schema: RoomSchema }]),
    MongooseModule.forRoot(
      'mongodb+srv://root:root@playersteams.86d1ajg.mongodb.net/?retryWrites=true&w=majority'
    ),RoomsModule],
  controllers: [AppController],
  providers: [AppService,RoomsService],
})
export class AppModule {}
