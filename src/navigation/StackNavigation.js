import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Productsubcategory from '../screens/HomeScreens/productsubcategory';
import MyDrawer from './Drawer';

const Stack = createNativeStackNavigator();

const DashboardNavigation = () => {
  return (
   
      <Stack.Navigator>
        <Stack.Screen
          name="MyDrawer"
          component={MyDrawer}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Productsubcategory"
          component={Productsubcategory}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
   
  );
};

export default DashboardNavigation;
