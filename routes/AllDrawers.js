import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import CateRoutes from './CateRoutes';
import MealsRoutes from './MealsRoutes';

const Drawer = createDrawerNavigator();

export default function AllDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Cate">
      <Drawer.Screen name="Cate" component={CateRoutes} />
      <Drawer.Screen name="Meals" component={MealsRoutes} />
    </Drawer.Navigator>
  );
}
