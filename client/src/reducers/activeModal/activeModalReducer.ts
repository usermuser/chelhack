import { TReduxActions } from "../../types/actions";
import { TActiveModalState } from "../../types/redux";
import { setActiveModalActionCreator } from "../../actions/modal";

export const DEFAULT_STATE_ACTIVE_MODAL: TActiveModalState = {isActive: false};

export const activeModalReducer = (state = DEFAULT_STATE_ACTIVE_MODAL, action: TReduxActions) => {
  switch(action.type) {
    case (setActiveModalActionCreator.type):
      const { isActive, ...payload } = action.payload;

      return {
        isActive: true,
        ...payload,
      }

    default: return state;
  }
}