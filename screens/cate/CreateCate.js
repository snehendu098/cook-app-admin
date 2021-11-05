import axios from '../../axios';
import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  StyleSheet,
  Dimensions,
  TextInput,
} from 'react-native';
import {TouchableNativeFeedback, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CreateCate = ({navigation}) => {
  const [cateName, setCateName] = useState('');

  let Touchable = '';

  const createCate = async () => {
    const token = await AsyncStorage.getItem('@token');
    if (!cateName) {
      alert('No category detected, going back to home screen');
      return navigation.goBack();
    }
    await axios.post(
      '/category/create',
      {name: cateName},
      {
        headers: {
          'auth-token': token,
        },
      },
    );
    navigation.navigate('ListCate');
  };

  if (Platform.OS === 'android') {
    Touchable = TouchableNativeFeedback;
  } else {
    Touchable = TouchableOpacity;
  }
  return (
    <View style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="always">
        <ImageBackground
          source={{
            uri: 'http://192.168.0.106:5000/uploads/logo2.jpg',
          }}
          resizeMode="center"
          style={styles.logo}></ImageBackground>
        <TextInput
          style={styles.input}
          placeholder="Title of Category"
          placeholderTextColor="#737574"
          value={cateName}
          onChangeText={e => setCateName(e)}
        />

        <Touchable onPress={createCate}>
          <View style={[styles.input, {backgroundColor: 'green'}]}>
            <Text style={{color: '#fff', fontSize: 20, fontWeight: '700'}}>
              Create
            </Text>
          </View>
        </Touchable>
      </ScrollView>
    </View>
  );
};

const {width, height} = Dimensions.get('window');

export default CreateCate;
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e6e6e6',
  },
  input: {
    width: 0.95 * width,
    height: 0.07 * height,
    backgroundColor: '#fff',
    borderRadius: 30,
    elevation: 5,
    marginBottom: 0.03 * height,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: '#000',
    marginTop: 0,
  },
  logo: {
    height: 0.4 * width,
    width: 0.4 * width,
    marginVertical: 20,
    backgroundColor: 'blue',
    borderRadius: (0.4 * width) / 2,
    overflow: 'hidden',
  },
});
