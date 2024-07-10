/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type SDataDocument = S2Data & Document;
@Schema()
export class S2Data {

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
    
  
}

export const SDataSchema = SchemaFactory.createForClass(S2Data)