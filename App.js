import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AllDrawer from './routes/AllDrawers';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from './axios';
import LoginScreen from './screens/LoginScreen';
import {Provider, useDispatch, useSelector} from 'react-redux';
import rootReducer from './store';
import {createStore} from 'redux';

const Stack = createNativeStackNavigator();
const store = createStore(rootReducer);

function App() {
  const signedIn = useSelector(state => state.signedIn);
  const [token, setToken] = useState(null);
  const dispatch = useDispatch();

  const verify = async () => {
    const token = await AsyncStorage.getItem('@token');
    setToken(token);
    if (token) {
      const verified = await axios.get('/auth/verify', {
        headers: {'auth-token': token},
      });

      const {success} = verified.data;
      if (success) {
        dispatch({type: 'LOG_IN'});
      }
    }
  };

  useEffect(() => {
    verify();
  }, [token]);

  return (
    <NavigationContainer>
      {!signedIn ? <LoginScreen /> : <AllDrawer />}
    </NavigationContainer>
  );
}

function AppWrapper() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default AppWrapper;
