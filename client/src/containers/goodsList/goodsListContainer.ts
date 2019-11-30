import { IApplicationState } from "../../types/redux";
import { GoodsItemList, IGoodsItemListProps } from "../../components/GoodsItemList";
import { connect } from "react-redux";

export type TGoodsListStoreToProps = Pick<IGoodsItemListProps, 'goods'>;

export const mapStateToProps = (state: IApplicationState): TGoodsListStoreToProps => {
  return {
    goods: state.goods,
  };
};

export const GoodsListContainer = connect(mapStateToProps)(GoodsItemList);
