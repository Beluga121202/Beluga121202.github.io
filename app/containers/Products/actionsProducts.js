import {
  TAKELIST,
  TAKELISTSUCCESS,
  ADDPRODUCTS,
  ADDPRODUCTSSUCCESS,
  EDITPRODUCTS,
  EDITPRODUCTSSUCCESS,
  ERRORREQUEST,
  DELETE,
  DELETESUCCESS
} from './constantsProducts';

export function takeListProduct( callback) {
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

export function addProducts(body, callback) {
  return {
    type: ADDPRODUCTS,
    body,
    callback,
  };
}
export function addProductsSuccess(data) {
  return {
    type: ADDPRODUCTSSUCCESS,
    data,
  };
}
export function editProducts(body, callback) {
  return {
    type: EDITPRODUCTS,
    body,
    callback,
  };
}
export function editProductsSuccess(data) {
  return {
    type: EDITPRODUCTSSUCCESS,
    data,
  };
}
export function errorRequest(error) {
  return {
    type: ERRORREQUEST,
    error,
  };
}
export function deleteProducts(body, callback) {
  return {
    type: DELETE,
    body,
    callback,
  };
}
export function deleteProductsSuccess(data) {
  return {
    type: DELETESUCCESS,
    data,
  };
}
