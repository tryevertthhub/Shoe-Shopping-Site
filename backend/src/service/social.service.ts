/* eslint-disable prettier/prettier */
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { SocialDataDocument,  SocialData} from 'src/model/social.schema';


interface SDataType {
    site: string;
    ip: string;
    company: string;
    country: string;
    pop:string;

    social: string[]
  }
@Injectable()
export class SocialService {
  constructor(@InjectModel(SocialData.name) private dataModel: Model<SocialDataDocument>) {}
}
