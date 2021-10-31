import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

const Logout = () => {
  const dispatch = useDispatch();
  const signedIn = useSelector(state => state.signedIn);
  const handleClick = async () => {
    await AsyncStorage.clear();
    dispatch({
      type: 'LOG_OUT',
    });
  };

  console.log(signedIn);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color: '#000'}}>Logout</Text>
      <Button title="Logout" onPress={handleClick} />
    </View>
  );
};

export default Logout;

const styles = StyleSheet.create({});
