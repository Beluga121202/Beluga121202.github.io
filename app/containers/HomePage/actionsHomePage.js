import {
  TAKELIST,
  TAKELISTSUCCESS,
  ADDACCOUNT,
  ADDACCOUNTSUCCESS,
  TAKEROLEGROUP,
  TAKEROLEGROUPSUCCESS,
  EDITACCOUNT,
  EDITACCOUNTSUCCESS,
  ERRORREQUEST, DELETE, DELETESUCCESS
} from "./constantsHomePage";

export function takeList(callback) {
  return {
    type: TAKELIST,
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
export function deleteAccount(body, callback) {
  return {
    type: DELETE,
    body,
    callback,
  };
}
export function deleteAccountSuccess(data) {
  return {
    type: DELETESUCCESS,
    data,
  };
}
