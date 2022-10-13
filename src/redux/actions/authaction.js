/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
import AsyncStorage from '@react-native-async-storage/async-storage';
import apiRequest from '../../network/api';
import API from '../../network/env';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import toastModule from '../../utils/toastModule/tosatAlert';
// import { useSelector } from 'react-redux';
// import { LOGOUT } from '../../constants/string';


// ---------------- Set loader status -------------------------//
export function isDataLoading(isLoading) {
  return {
    type: 'LOADER_STATUS',
    isLoading,
  };
}



// ========== Handle Login API ===================//
export const handleLogin = loginData => async dispatch => {
  dispatch(isDataLoading(true));

  console.log("loginData",loginData);
  const response = await apiRequest(API.loginDataURL, 'POST', loginData.data);
  dispatch(isDataLoading(false));

  if (response) {
    // console.log('response====>',response);
    // toastModule.toastMessageBox("response.message");
    // if (response.data.isEmailVerified == true) {
    //   AsyncStorage.setItem('isEmailVerified', 'true');
    // }
    // if (response.data.isMobileVerified == true) {
    //   AsyncStorage.setItem('isMobileVerified', 'true');
    // }

    //  console.log('testing==>', response);
    // AsyncStorage.setItem('Token', response.token);


    // if (!response.data.isEmailVerified) {
    //   loginData.navigation.navigate('FirstStepVerification');
    // } else if (!response.data.isMobileVerified) {
    //   loginData.navigation.navigate('SecondStepVerification');
    // } else {
    //   dispatch(loginSuccess(response));
    // }
    dispatch(loginSuccess(response));
  }
};



export function loginSuccess(loginData) {
  // console.log("loginData===>>>", loginData)
  return {
    type: 'LOGIN_SUCCESS',
    loginData,
  };
}


// ========== Handle state Filter API ===================//
export const handleMainCategoryFilter = MainCategoryfilterData => async dispatch => {
  console.log('sstatefilterDataata============>', MainCategoryfilterData);
  dispatch(isDataLoading(true));
  const response = await apiRequest(API.categoryDataURL, 'GET', MainCategoryfilterData);
  dispatch(isDataLoading(false));
  console.log('testing==>', response);
  if (response) {
    dispatch(MainCategoryFilterSuccess(response));

  }
};

export function MainCategoryFilterSuccess(MainCategoryData) {
  return {
    type: 'MAINCATEGORY_LIST',
    MainCategoryData,
  };
}


// ------------------ Logout function  ------------------------------ //
export const handleLogout = loginData => async dispatch => {
  dispatch(isDataLoading(true));
  dispatch(isDataLoading(false));
  dispatch(loginSuccess(loginData));
};
