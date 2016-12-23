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
