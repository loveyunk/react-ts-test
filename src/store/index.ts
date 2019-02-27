import { createStore, combineReducers } from 'redux';
import { userReducer } from '../reducers/user';

const rootReducer = combineReducers({
  user: userReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  const store = createStore(rootReducer);

  return store;
}
