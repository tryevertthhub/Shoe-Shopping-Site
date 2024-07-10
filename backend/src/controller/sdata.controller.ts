/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
    Body,
    Controller,
    Delete,
    Get,
    HttpStatus,
    Param,
    Post,
    UploadedFiles,
    Put,
    Req,
    Res,
  } from '@nestjs/common';
  import { Data } from '../model/data.schema';
  import { SDataService } from '../service/sdata.service';
  import { JwtService } from '@nestjs/jwt';
  
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
  interface SDataType {
    site: string;
    ip: string;
    company: string;
    country: string;
    pop:string;
  }
  @Controller('/api/v1/sdata')
  export class SDataController {
    constructor(
      private readonly dataServerice: SDataService, // private jwtService: JwtService
    ) {}
  }
  
