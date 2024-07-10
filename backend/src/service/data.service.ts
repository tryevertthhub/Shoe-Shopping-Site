/* eslint-disable prettier/prettier */
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Data, DataDocument } from '../model/data.schema';

interface DataType {
  ProductNumber: string;
  ProductDescription: string;
  date: string;
  image: string;
  PriceData: string[];
  Lowest: string;
  MsaleMoney: string;
  MSalePercent: string;
  MHopeMoney: string;
  MHopePercent: string;
}
@Injectable()
export class DataService {
  constructor(@InjectModel(Data.name) private dataModel: Model<DataDocument>) {}

}
