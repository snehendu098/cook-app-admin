import {combineReducers} from 'redux';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  signedIn: authReducer,
});

export default rootReducer;
