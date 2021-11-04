import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import Logout from '../screens/Logout';
import CateRoutes from './CateRoutes';
import MealsRoutes from './MealsRoutes';

const Drawer = createDrawerNavigator();

export default function AllDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Cate">
      <Drawer.Screen
        name="Cate"
        component={CateRoutes}
        options={{
          title: 'Category',
          headerTitleAlign: 'center',
        }}
      />
      <Drawer.Screen name="Meals" component={MealsRoutes} />
      <Drawer.Screen name="Authentication" component={Logout} />
    </Drawer.Navigator>
  );
}
