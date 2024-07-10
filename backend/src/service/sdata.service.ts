/* eslint-disable prettier/prettier */
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { S2Data,  SDataDocument} from 'src/model/sdata.schema';
@Injectable()
export class SDataService {
  constructor(@InjectModel(S2Data.name) private dataModel: Model<SDataDocument>) {}

}
