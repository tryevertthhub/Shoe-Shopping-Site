/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type DataDocument = Data & Document;

@Schema()
export class Data {

    @Prop({required:true,  unique:true})
    productNumber: string;

    @Prop({required:true})
    image: string;

    @Prop({required:true})
    date: string;

    @Prop()
    ProductDescription: string;

    @Prop()
    PriceData: string[];
    
    @Prop()
    Lowest: string;

    @Prop()
    MsaleMoney: string;
    
    @Prop()
    MSalePercent: string;

    @Prop()
    MHopeMoney: string;

    @Prop()
    MHopePercent: string;
}

export const DataSchema = SchemaFactory.createForClass(Data)