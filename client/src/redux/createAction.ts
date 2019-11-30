import { Action } from 'redux';
import { IPayloadAction, IPayloadActionCreator, ISimpleActionCreator } from '../types/actions';

export function createAction<P = undefined, T extends string = string>(
  type: T,
): IPayloadActionCreator<P, T> {
  function actionCreator(): Action<T>;
  function actionCreator(payload: P): IPayloadAction<P, T>;
  function actionCreator(payload?: P): Action<T> | IPayloadAction<P, T> {
    return { type, payload };
  }

  actionCreator.toString = (): T => `${type}` as T;

  actionCreator.type = type;

  return actionCreator;
}

export function getActionType<T extends string>(
  actionCreator: IPayloadActionCreator<void, T> | ISimpleActionCreator<T>,
): T {
  return `${actionCreator}` as T;
}