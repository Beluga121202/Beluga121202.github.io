import {
  TAKELIST,
  TAKELISTSUCCESS,
  ADDACCOUNT,
  ADDACCOUNTSUCCESS,
  TAKEROLEGROUP,
  TAKEROLEGROUPSUCCESS,
  EDITACCOUNT,
  EDITACCOUNTSUCCESS,
  ERRORREQUEST,
} from './constantsHomePage';

export function takeList(body, callback) {
  return {
    type: TAKELIST,
    body,
    callback,
  };
}
export function takeListSuccess(data) {
  return {
    type: TAKELISTSUCCESS,
    data,
  };
}

export function addAccount(body, callback) {
  return {
    type: ADDACCOUNT,
    body,
    callback,
  };
}
export function addAccountSuccess(data) {
  return {
    type: ADDACCOUNTSUCCESS,
    data,
  };
}
export function takeRoleGroup(body) {
  return {
    type: TAKEROLEGROUP,
    body,
  };
}
export function takeRoleGroupSuccess(data) {
  return {
    type: TAKEROLEGROUPSUCCESS,
    data,
  };
}
export function editAccount(body, callback) {
  return {
    type: EDITACCOUNT,
    body,
    callback,
  };
}
export function editAccountSuccess(data) {
  return {
    type: EDITACCOUNTSUCCESS,
    data,
  };
}
export function errorRequest(error) {
  return {
    type: ERRORREQUEST,
    error,
  };
}
