import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import CreateMeals from '../screens/meals/CreateMeals';
import ListMeals from '../screens/meals/ListMeals';

const Stack = createNativeStackNavigator();

const MealsRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ListMeals"
        component={ListMeals}
        options={{title: 'Meals'}}
      />
      <Stack.Screen
        name="CreateMeals"
        component={CreateMeals}
        options={{title: 'Create Meals'}}
      />
    </Stack.Navigator>
  );
};

export default MealsRoutes;
