export interface IGoods {
  id: TGoodID,
  title: string,
  availability: boolean,
  price: number,
  finalPrice: number,
  category: ICategories,
  availableInDays: number,
  brand: string,
  brandId: TBrandID,
  quantity: number,
  imageUrl: string,
  parameters: IGoodParameter[],
}

export interface ICategories {

}

export interface IGoodParameter {
  title: string,
  value: string,
}

export type TBrandID = number;
export type TGoodID = number;