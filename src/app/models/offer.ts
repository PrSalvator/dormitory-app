import { NumberValueAccessor } from "@angular/forms";
import { ICategory } from "./category";
import { IUser } from "./user";

export interface IOfferPreview{
    offerID: number;
    status: string; // Посмотреть что за объект
    title: string;
    category: ICategory;
    photoURLList: string[];
    price: number;
    date_posted: Date;
    inFavorite: boolean;
}

export interface IOffer{
    offerDetails: IOfferPreview,
    userDetails: IUser;
}

/*export class Offer implements IOffer{
    off
}*/