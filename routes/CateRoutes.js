import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {View, Text} from 'react-native';
import CreateCate from '../screens/cate/CreateCate';
import ListCate from '../screens/cate/ListCate';
import UpdateCate from '../screens/cate/UpdateCate';

const Stack = createNativeStackNavigator();

const CateRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName="ListCate"
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="ListCate"
        component={ListCate}
        options={{title: 'Categories'}}
      />
      <Stack.Screen
        name="CreateCate"
        component={CreateCate}
        options={{title: 'Create Category'}}
      />
      <Stack.Screen name="UpdateCate" component={UpdateCate} />
    </Stack.Navigator>
  );
};

export default CateRoutes;
