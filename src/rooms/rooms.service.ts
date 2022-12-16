import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RoomDTO } from './room.dto';
import { Room, RoomDocument } from './room.schema';

@Injectable()
export class RoomsService {
    constructor(@InjectModel(Room.name) private roomModel: Model<RoomDocument>) { }

    async create(room: RoomDTO): Promise<Room> {
        const createdRoom = new this.roomModel(room);
        return createdRoom.save();
    }

    async update(room: RoomDTO): Promise<Room> {
        return this.roomModel.findByIdAndUpdate(room._id,room);
    }

    async findAll(): Promise<Room[]> {
        return this.roomModel.find().exec();
    }
    async findOne(id:string): Promise<Room> {
        return this.roomModel.findById(id).exec();
    }
}
