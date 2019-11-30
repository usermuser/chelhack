export interface IGoodsBase {
  id: TGoodID,
  title: string,
  availability: boolean,
  price: number,
  finalPrice: number,
  category: ICategory,
  availableInDays: number,
  brand: string,
  brandId: TBrandID,
  quantity: number,
  imageUrl: string,
}

export interface IGoodsDetail extends IGoodsBase {
  parameters: IGoodParameter[],
}

export interface ICategory {
  name: string;
}

export interface IGoodParameter {
  title: string,
  value: string,
}

export type TBrandID = number;
export type TGoodID = number;