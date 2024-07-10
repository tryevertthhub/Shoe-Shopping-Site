/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type SocialDataDocument = SocialData & Document;
@Schema()
export class SocialData {

    @Prop({required:true})
    site: string;

    @Prop({required:true})
    ip: string;

    @Prop({required:true})
    company: string;

    @Prop()
    country: string;

    @Prop()
    pop: string[];

    @Prop()
    social: string[];

    
  
}

export const SocialDataSchema = SchemaFactory.createForClass(SocialData)