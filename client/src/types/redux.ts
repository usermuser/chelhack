import { Store } from "redux";
import { TReduxActions } from "./actions";
import { IGoodsDetail } from "./Goods";

export interface IApplicationState {
  goods: IGoodsDetail[],
  categories: string[];
  activeModal: TActiveModalState;
}

export type TActiveModalState = Partial<Pick<IGoodsDetail, 'title' | 'parameters' | 'imageUrl'>> & {isActive: boolean};

export type TApplicationStore = Store<IApplicationState, TReduxActions>;