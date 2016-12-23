
import {combineReducers} from 'redux'

function init(state, action) {
  if (state == undefined) {
    return 0;
  }
  return (state + 1);
}

function login(state, action) {
  if (state == undefined) {
    return 0;
  }
  return (state + 2);
}

function register_user(state, action) {
  if (state == undefined) {
    return 0;
  }
  return (state + 3);
}

export default combineReducers({
  init,
  login,
  register_user,
});
