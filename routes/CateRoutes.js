import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {View, Text} from 'react-native';
import CreateCate from '../screens/cate/CreateCate';
import ListCate from '../screens/cate/ListCate';

const Stack = createNativeStackNavigator();

const CateRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CreateCate" component={CreateCate} />
      <Stack.Screen name="ListCate" component={ListCate} />
    </Stack.Navigator>
  );
};

export default CateRoutes;