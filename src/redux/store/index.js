/* eslint-disable prettier/prettier */
import { applyMiddleware, createStore } from 'redux';

import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';

export const store = createStore(rootReducer,applyMiddleware(thunkMiddleware));



