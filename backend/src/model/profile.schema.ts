/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type ProfileDocument = Profile & Document;

@Schema()
export class Profile {

    @Prop({required:true,  unique:true})
    accountNumber: string;

    
    @Prop()
    url: string;

    @Prop()
    pageNumber: string;

    @Prop()
    stopped: boolean;
}

export const DataSchema = SchemaFactory.createForClass(Profile)