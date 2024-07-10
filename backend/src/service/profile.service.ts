import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Data, DataDocument } from '../model/data.schema';
import { Profile, ProfileDocument } from '../model/profile.schema';;

@Injectable()
export class ProfileService {
  constructor(@InjectModel(Profile.name) private dataModel: Model<ProfileDocument>) {}

}
