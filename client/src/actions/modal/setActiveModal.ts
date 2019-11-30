import { createAction } from "../../redux/createAction";
import { EModalActions } from "../../types/actionTypes";
import { TActiveModalState } from "../../types/redux";

export const setActiveModalActionCreator = createAction<TActiveModalState ,EModalActions.SET_ACTIVE_MODAL>(EModalActions.SET_ACTIVE_MODAL);
