import * as constants from '../constants/user';

export interface IncrementAction {
  type: constants.INCREMENT;
}

export interface DecrementAction {
  type: constants.DECREMENT;
}

export type userAction = IncrementAction | DecrementAction;

export const increment = (): IncrementAction => ({ type: constants.INCREMENT });

export const decrement = (): DecrementAction => ({ type: constants.DECREMENT });
