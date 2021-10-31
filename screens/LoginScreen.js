import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import {
  Dimensions,
  ImageBackground,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableNativeFeedback,
  View,
  ScrollView,
} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import axios from '../axios';

const {width, height} = Dimensions.get('window');

const LoginScreen = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  let Touchable = '';

  if (Platform.OS === 'android') {
    Touchable = TouchableNativeFeedback;
  } else {
    Touchable = TouchableOpacity;
  }

  const handleClick = async () => {
    try {
      const fetchData = await axios.post('/auth/login', {email, password});
      const {token} = fetchData.data;

      if (token) {
        await AsyncStorage.clear();
        await AsyncStorage.setItem('@token', token);
        verify();
      } else {
        return null;
      }
    } catch (e) {
      console.log(e);
    }
  };

  const verify = async () => {
    const token = await AsyncStorage.getItem('@token');
    const verified = await axios.get('/auth/verify', {
      headers: {'auth-token': token},
    });

    const {success} = verified.data;
    if (success) {
      dispatch({type: 'LOG_IN'});
    }
  };

  return (
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
        placeholder="Email"
        placeholderTextColor="#737574"
        value={email}
        keyboardType="visible-password"
        onChangeText={e => setEmail(e)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#737574"
        secureTextEntry={true}
        value={password}
        onChangeText={e => setPassword(e)}
      />
      <Touchable onPress={handleClick}>
        <View style={[styles.input, {backgroundColor: 'green'}]}>
          <Text style={{color: '#fff', fontSize: 20, fontWeight: '700'}}>
            Login
          </Text>
        </View>
      </Touchable>
    </ScrollView>
  );
};

export default LoginScreen;
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
