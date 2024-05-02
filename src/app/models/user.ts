import { NumberValueAccessor } from "@angular/forms";
import { IAdress } from "./adress";

export interface IUser{
    name: string;
    surname: string;
    rating: number;
    feedBackCount: number;
    dateRegistration: Date;
    profilePhoto: string;
    dormitoryAdress: IAdress;
    UserID: number;
}