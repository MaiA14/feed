import { combineReducers } from 'redux';
import SystemReducer from './SystemReducer';

const rootReducer = combineReducers({
  system: SystemReducer,
})

export default rootReducer;