import {reducer as formReducer} from 'redux-form';

module.exports = (state, action) => {
  switch(action.type) {
    default:
      return state;
  }
}

import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

import authReducer from './authReducer';
import alertsReducer from './alertsReducer';
import todosReducer from './todosReducer';

module.exports = combineReducers({
  form: formReducer,
  auth: authReducer,
  alerts: alertsReducer,
  todos: todosReducer
});
