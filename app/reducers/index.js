
import {combineReducers} from 'redux'

function init(state, action) {
  if (state == undefined) {
    return 0;
  }
  return (state + 1);
}

function signup(state, action) {
  if (state == undefined) {
    return 0;
  }
  return (state + 1);
}

function login(state, action) {
  if (state == undefined) {
    return 0;
  }
  return (state + 1);
}

function home(state, action) {
  if (state == undefined) {
    return 0;
  }
  return (state + 1);
}

function dashboard(state, action) {
  if (state == undefined) {
    return 0;
  }
  return (state + 1);
}

function bzzboxstategraph(state, action) {
  if (state == undefined) {
    return 0;
  }
  return (state + 1);
}

function activity(state, action) {
  if (state == undefined) {
    return 0;
  }
  return (state + 1);
}

function settings(state, action) {
  if (state == undefined) {
    return 0;
  }
  return (state + 1);
}

function addhive(state, action) {
  if (state == undefined) {
    return 0;
  }
  return (state + 1);
}

function events(state, action) {
  if (state == undefined) {
    return 0;
  }
  return (state + 1);
}

function hive_data(state, action) {
  if (state == undefined) {
    return 0;
  }
  return (state + 1);
}

export default combineReducers({
  init,
  signup,
  login,
  home,
  dashboard,
  bzzboxstategraph,
  activity,
  settings,
  addhive,
  events,
  hive_data,
});
