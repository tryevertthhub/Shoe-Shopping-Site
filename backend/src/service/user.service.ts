/* eslint-disable prettier/prettier */
import { Injectable, HttpException, HttpStatus, ConsoleLogger } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User, UserDocument } from "../model/user.schema";
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

interface PasswordType {
  prev: string,
  current: string,
  email: string
}
@Injectable()
export class UserService {

    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>,

    ) { }

    async signup(user: User): Promise<User> {
        const salt = await bcrypt.genSalt();
        const hash = await bcrypt.hash(user.password, salt);
        const reqBody = {
            fullname: user.fullname,
            email: user.email,
            password: hash
        }
        const newUser = new this.userModel(reqBody);
        return newUser.save();
    }

    async signin(user: User, jwt: JwtService): Promise<any> {
        const foundUser = await this.userModel.findOne({ email: user.email }).exec();
        if (foundUser) {
            const { password } = foundUser;
            console.log(password,user.password )
            const res =await bcrypt.compare( user.password, password);
            console.log(res)
            if (res) {
                console.log('success')
                const payload = { email: user.email };
                return {
                    token: jwt.sign(payload),
                    email:payload.email
                };
            }
            return new HttpException('Incorrect username or password', HttpStatus.UNAUTHORIZED)
        }
        return new HttpException('Incorrect username or password', HttpStatus.UNAUTHORIZED)
    }

    async getOne(email): Promise<User> {
        return await this.userModel.findOne({ email }).exec();
    }
    async changepassword(Password: PasswordType):Promise<any> {
    
        const foundUser = await this.userModel.findOne({ email: Password.email }).exec();
        if (foundUser) {
            console.log("found user")
            const { password } = foundUser;
            console.log(password)
            console.log(Password.prev)
            const res =await bcrypt.compare(Password.prev, password);
            console.log(res)
            if (res) {
                const salt = await bcrypt.genSalt();
                const hash = await bcrypt.hash(Password.current, salt);
                const res =   await this.userModel.findOneAndUpdate({email: foundUser.email},{
                    $set:{
                        password: hash
                    }
                })
                console.log(res)
                return res;
            }
            else {
                return new HttpException('Please Enter Correct Password', HttpStatus.BAD_REQUEST)
            }
           
        }
       
    }

}