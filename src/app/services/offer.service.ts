import { Injectable } from '@angular/core';
import { IOfferPreview } from '../models/offer';
import { IUser } from '../models/user';
import { Enum } from '../models/enum';
import { IOffer } from '../models/offer';
import { off } from 'process';
import { ICategory } from '../models/category';
import { IAdress } from '../models/adress';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

interface IGetOffer{
  overallAmount: number;
  offers: IOffer[]
}


@Injectable({
  providedIn: 'root'
})
export class OfferService {

  readonly OFFER_DISPLAYEAD = 20; //Количество отображаемых элементов на странице

  private readonly OVERALL_AMOUNT = 420; //Якобы такое количество объявление пришло от сервера
  private offers: IOffer[] = [];
  private categories:ICategory[] = [];

  constructor() { 
    this.categories = this.generateCategories(); // Удалить после того как решится способ получения всех категорий начальных
  }

  async getOffers(status?:string, sort?:string, categoryId?:number, minPrice?:number, maxPrice?:number, condition?: string, dormitoryIDs?:number[], types?:number[], search?:string): Promise<IGetOffer>{
    return {
        overallAmount: this.OVERALL_AMOUNT,
        offers: this.generateOffers()
      }
  }

  async getMainCategories(): Promise<ICategory[]>{ //Удалить после того как решится способ получения всех категорий начальных
    return this.categories;
  }

  async getCategoryById(categoryId: string|null): Promise<ICategory | undefined>{
    let category = this._getCategoryById(this.categories, categoryId);
    return category;
  }

  private _getCategoryById(categories: ICategory[], categoryId: string | null, levelNumber: number = 0): ICategory | undefined{
    if (categoryId === null) return undefined;
    for(let i=0; i < categories.length; i++){
      let category = categories[i];
      if(categoryId === category.categoryId) return category;
      if(category.categoryId.split('.')[levelNumber] === categoryId.split('.')[levelNumber]) return this._getCategoryById(category.childrenCategory!, categoryId, ++levelNumber);
    }
    return undefined;
  }

  async getDormitories(): Promise<IAdress[]>{
    return this.generateDormitories();
  }

  private generateDormitories(): IAdress[]{
    return [
      {
        dormitoryId: 0,
        dormitoryName: "Общежитие №12",
        dormitoryMapLink: "",
        roomNumber: 0
      },
      {
        dormitoryId: 0,
        dormitoryName: "Общежитие №13",
        dormitoryMapLink: "",
        roomNumber: 0
      },
      {
        dormitoryId: 0,
        dormitoryName: "Общежитие №14",
        dormitoryMapLink: "",
        roomNumber: 0
      },
      {
        dormitoryId: 0,
        dormitoryName: "Общежитие №15",
        dormitoryMapLink: "",
        roomNumber: 0
      },
      {
        dormitoryId: 0,
        dormitoryName: "Общежитие №16",
        dormitoryMapLink: "",
        roomNumber: 0
      },
      {
        dormitoryId: 0,
        dormitoryName: "Общежитие №17",
        dormitoryMapLink: "",
        roomNumber: 0
      },
      {
        dormitoryId: 0,
        dormitoryName: "Общежитие №18",
        dormitoryMapLink: "",
        roomNumber: 0
      }
    ]
  }


  private generateCategories(): ICategory[]{ // Якобы ответ от сервера
    let categories: ICategory[] = [];
    categories = [
      {
        categoryId: "0",
        name: "Штаны",
        childrenCategory: [
          {
            categoryId: "0.0",
            name: "Штаны",
            childrenCategory: [
              {
                categoryId: "0.0.1",
                name: "Штаны",
                childrenCategory: []
              },
              {
                categoryId: "0.0.1",
                name: "Куртки",
                childrenCategory: []
              },
              {
                categoryId: "0.0.2",
                name: "Ботинки",
                childrenCategory: []
              },
              {
                categoryId: "0.0.3",
                name: "Игрушки",
                childrenCategory: []
              }
            ]
          },
          {
            categoryId: "0.1",
            name: "Куртки",
            childrenCategory: [
              {
                categoryId: "0.1.0",
                name: "Штаны",
                childrenCategory: []
              },
              {
                categoryId: "0.1.1",
                name: "Куртки",
                childrenCategory: []
              },
              {
                categoryId: "0.1.2",
                name: "Ботинки",
                childrenCategory: []
              },
              {
                categoryId: "0.1.3",
                name: "Игрушки",
                childrenCategory: []
              }
            ]
          },
          {
            categoryId: "0.2",
            name: "Ботинки",
            childrenCategory: [
              {
                categoryId: "0.2.0",
                name: "Штаны",
                childrenCategory: []
              },
              {
                categoryId: "0.2.1",
                name: "Куртки",
                childrenCategory: []
              },
              {
                categoryId: "0.2.2",
                name: "Ботинки",
                childrenCategory: []
              },
              {
                categoryId: "0.2.3",
                name: "Игрушки",
                childrenCategory: []
              }
            ]
          },
          {
            categoryId: "0.3",
            name: "Игрушки",
            childrenCategory: [
              {
                categoryId: "0.3.0",
                name: "Штаны",
                childrenCategory: []
              },
              {
                categoryId: "0.3.1",
                name: "Куртки",
                childrenCategory: []
              },
              {
                categoryId: "0.3.2",
                name: "Ботинки",
                childrenCategory: []
              },
              {
                categoryId: "0.3.3",
                name: "Игрушки",
                childrenCategory: []
              }
            ]
          }
        ]
      },
      {
        categoryId: "1",
        name: "Куртки",
        childrenCategory: [
          {
            categoryId: "1.0",
            name: "Штаны",
            childrenCategory: [
              {
                categoryId: "1.0.0",
                name: "Штаны",
                childrenCategory: []
              },
              {
                categoryId: "1.0.1",
                name: "Куртки",
                childrenCategory: []
              },
              {
                categoryId: "1.0.2",
                name: "Ботинки",
                childrenCategory: []
              },
              {
                categoryId: "1.0.3",
                name: "Игрушки",
                childrenCategory: []
              }
            ]
          },
          {
            categoryId: "1.1",
            name: "Куртки",
            childrenCategory: [
              {
                categoryId: "1.1.0",
                name: "Штаны",
                childrenCategory: []
              },
              {
                categoryId: "1.1.1",
                name: "Куртки",
                childrenCategory: []
              },
              {
                categoryId: "1.1.2",
                name: "Ботинки",
                childrenCategory: []
              },
              {
                categoryId: "1.1.3",
                name: "Игрушки",
                childrenCategory: []
              }
            ]
          },
          {
            categoryId: "1.2",
            name: "Ботинки",
            childrenCategory: [
              {
                categoryId: "1.2.0",
                name: "Штаны",
                childrenCategory: []
              },
              {
                categoryId: "1.2.1",
                name: "Куртки",
                childrenCategory: []
              },
              {
                categoryId: "1.2.2",
                name: "Ботинки",
                childrenCategory: []
              },
              {
                categoryId: "1.2.3",
                name: "Игрушки",
                childrenCategory: []
              }
            ]
          },
          {
            categoryId: "1.3",
            name: "Игрушки",
            childrenCategory: [
              {
                categoryId: "1.3.0",
                name: "Штаны",
                childrenCategory: []
              },
              {
                categoryId: "1.3.1",
                name: "Куртки",
                childrenCategory: []
              },
              {
                categoryId: "1.3.2",
                name: "Ботинки",
                childrenCategory: []
              },
              {
                categoryId: "1.3.3",
                name: "Игрушки",
                childrenCategory: []
              }
            ]
          }
        ]
      },
      {
        categoryId: "2",
        name: "Ботинки",
        childrenCategory: [
          {
            categoryId: "2.0",
            name: "Штаны",
            childrenCategory: [
              {
                categoryId: "2.0.0",
                name: "Штаны",
                childrenCategory: []
              },
              {
                categoryId: "2.0.1",
                name: "Куртки",
                childrenCategory: []
              },
              {
                categoryId: "2.0.2",
                name: "Ботинки",
                childrenCategory: []
              },
              {
                categoryId: "2.0.3",
                name: "Игрушки",
                childrenCategory: []
              }
            ]
          },
          {
            categoryId: "2.1",
            name: "Куртки",
            childrenCategory: [
              {
                categoryId: "2.1.0",
                name: "Штаны",
                childrenCategory: []
              },
              {
                categoryId: "2.1.1",
                name: "Куртки",
                childrenCategory: []
              },
              {
                categoryId: "2.1.2",
                name: "Ботинки",
                childrenCategory: []
              },
              {
                categoryId: "2.1.3",
                name: "Игрушки",
                childrenCategory: []
              }
            ]
          },
          {
            categoryId: "2.2",
            name: "Ботинки",
            childrenCategory: [
              {
                categoryId: "2.2.0",
                name: "Штаны",
                childrenCategory: []
              },
              {
                categoryId: "2.2.1",
                name: "Куртки",
                childrenCategory: []
              },
              {
                categoryId: "2.2.2",
                name: "Ботинки",
                childrenCategory: []
              },
              {
                categoryId: "2.2.3",
                name: "Игрушки",
                childrenCategory: []
              }
            ]
          },
          {
            categoryId: "2.3",
            name: "Игрушки",
            childrenCategory: [
              {
                categoryId: "2.3.0",
                name: "Штаны",
                childrenCategory: []
              },
              {
                categoryId: "2.3.1",
                name: "Куртки",
                childrenCategory: []
              },
              {
                categoryId: "2.3.2",
                name: "Ботинки",
                childrenCategory: []
              },
              {
                categoryId: "2.3.3",
                name: "Игрушки",
                childrenCategory: []
              }
            ]
          }
        ]
      },
      {
        categoryId: "3",
        name: "Игрушки",
        childrenCategory: [
          {
            categoryId: "3.0",
            name: "Штаны",
            childrenCategory: [
              {
                categoryId: "3.0.0",
                name: "Штаны",
                childrenCategory: []
              },
              {
                categoryId: "3.0.1",
                name: "Куртки",
                childrenCategory: []
              },
              {
                categoryId: "3.0.2",
                name: "Ботинки",
                childrenCategory: []
              },
              {
                categoryId: "3.0.3",
                name: "Игрушки",
                childrenCategory: []
              }
            ]
          },
          {
            categoryId: "3.1",
            name: "Куртки",
            childrenCategory: [
              {
                categoryId: "3.1.0",
                name: "Штаны",
                childrenCategory: []
              },
              {
                categoryId: "3.1.1",
                name: "Куртки",
                childrenCategory: []
              },
              {
                categoryId: "3.1.2",
                name: "Ботинки",
                childrenCategory: []
              },
              {
                categoryId: "3.1.3",
                name: "Игрушки",
                childrenCategory: []
              }
            ]
          },
          {
            categoryId: "3.2",
            name: "Ботинки",
            childrenCategory: [
              {
                categoryId: "3.2.0",
                name: "Штаны",
                childrenCategory: []
              },
              {
                categoryId: "3.2.1",
                name: "Куртки",
                childrenCategory: []
              },
              {
                categoryId: "3.2.2",
                name: "Ботинки",
                childrenCategory: []
              },
              {
                categoryId: "3.2.3",
                name: "Игрушки",
                childrenCategory: []
              }
            ]
          },
          {
            categoryId: "3.3",
            name: "Игрушки",
            childrenCategory: [
              {
                categoryId: "3.3.0",
                name: "Штаны",
                childrenCategory: []
              },
              {
                categoryId: "3.3.1",
                name: "Куртки",
                childrenCategory: []
              },
              {
                categoryId: "3.3.2",
                name: "Ботинки",
                childrenCategory: []
              },
              {
                categoryId: "3.3.3",
                name: "Игрушки",
                childrenCategory: []
              }
            ]
          }
        ]
      },
      {
        categoryId: "4",
        name: "Столы",
        childrenCategory: []
      },
      {
        categoryId: "5",
        name: "Кровати",
        childrenCategory: []
      },
      {
        categoryId: "6",
        name: "Книги",
        childrenCategory: []
      },
      {
        categoryId: "7",
        name: "Картины",
        childrenCategory: []
      }
    ]
    return categories;
  }

  private generateOffers(): IOffer[]{ // Поддельная функция возврата предложений от сервера
    let offers: IOffer[] = [];
    for(let i = 0; i < this.OFFER_DISPLAYEAD; i++){
      offers.push(
        {
          offerDetails: {
            offerID: i,
            status: Enum.status.active,
            title: "Супер нужный крутой товар",
            category: {
              categoryId: "1",
              childrenCategory: null,
              name: "Головные уборы"
            },
            photoURLList: [
              ".././assets/glasses.jpg"
            ],
            price: 1245621,
            date_posted: new Date(2024, 4, 15),
            inFavorite: true
          },
          userDetails: {
            UserID: 1,
            name: "Иван",
            surname: "Иванов",
            rating: 4.5,
            feedBackCount: 135,
            dateRegistration: new Date(2020, 4, 12),
            profilePhoto: "../../assests/daniil.jpg",
            dormitoryAdress: {
              dormitoryId: 1,
              roomNumber: 738,
              dormitoryName: "Общежитие",
              dormitoryMapLink: ""
            }
          }
        }
      )
    }
    return offers;
  }
}
