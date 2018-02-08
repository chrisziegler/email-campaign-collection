import { combineReducers } from 'redux';
import authReducer from './authReducer';

// whatever keys we define in this object we pass in, are going to represent
// the keys that exist inside our state object
export default combineReducers({
  auth: authReducer
});
