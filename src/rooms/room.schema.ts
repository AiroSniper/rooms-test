import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { TeamDTO } from 'src/dto/team.dto';

export type RoomDocument = HydratedDocument<Room>;

@Schema()
export class Room {
    @Prop()
    teams: TeamDTO[]

    @Prop({ required: true})
    owner: string

    @Prop({ required: true})
    title: string

    @Prop()
    description: string

    @Prop({ default: 5 })
    type: number

}

export const RoomSchema = SchemaFactory.createForClass(Room);