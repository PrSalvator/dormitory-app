export interface ICategory{
    categoryId: string,
    name: string,
    childrenCategory: ICategory[]|null
}