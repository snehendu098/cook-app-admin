import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import CreateMeals from '../screens/meals/CreateMeals';
import ListMeals from '../screens/meals/ListMeals';

const Stack = createNativeStackNavigator();

const MealsRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CreateMeals" component={CreateMeals} />
      <Stack.Screen name="ListMeals" component={ListMeals} />
    </Stack.Navigator>
  );
};

export default MealsRoutes;
