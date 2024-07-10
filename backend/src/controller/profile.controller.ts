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
  import { ProfileService } from '../service/profile.service';
  
  @Controller('/api/v1/profile')
  export class ProfileController {
    constructor(
      private readonly dataServerice: ProfileService, // private jwtService: JwtService
    ) {}
  }