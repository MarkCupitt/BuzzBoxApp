import * as types from '../constants/action-types'

export function incInit() {
  return {type: types.INC_INIT};
};

export function incLogin() {
  return {type: types.INC_LOGIN};
};

export function incRegisterUser() {
  return {type: types.INC_REGISTER_USER};
};

export function incRegisterHive() {
  return {type: types.INC_REGISTER_HIVE};
};

export function incEvents() {
  return {type: types.INC_EVENTS};
};

export function incHiveData() {
  return {type: types.INC_HIVE_DATA};
};
