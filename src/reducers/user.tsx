import { userAction } from '../actions/user';
import { userState } from '../types/index';
import { DECREMENT, INCREMENT } from '../constants/user';

const initialState: userState = {
  count: 0
};

export function userReducer(
  state: userState = initialState,
  action: userAction
): userState {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}
