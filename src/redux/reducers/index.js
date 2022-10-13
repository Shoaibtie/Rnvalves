/* eslint-disable prettier/prettier */
import {combineReducers} from 'redux';
import loader from './loaderReducer';
import auth from './authReducer';
import maincategory from './maincategory';


const rootReducer = combineReducers({
  loader,
  auth,
  maincategory,
});

export default rootReducer;
