import produce from 'immer';
import {
  ADDPRODUCTS,
  ADDPRODUCTSSUCCESS, EDITPRODUCTS, EDITPRODUCTSSUCCESS,
  TAKELIST,
  TAKELISTSUCCESS,
  DELETE,
  DELETESUCCESS
} from './constantsProducts';

export const initialState = {
  isLoading: false,
  infoUser: {},
  roleGroup: {},
};
/* eslint-disable default-case, no-param-reassign */
export const takeListReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case TAKELIST:
        draft.isLoading = true;
        break;
      case TAKELISTSUCCESS:
        draft.isLoading = false;
        draft.infoUser = action.data.data;
        break;
      case ADDPRODUCTS:
        draft.isLoading = true;
        break;
      case ADDPRODUCTSSUCCESS:
        draft.isLoading = false;
        break;
      case EDITPRODUCTS:
        draft.isLoading = true;
        break;
      case EDITPRODUCTSSUCCESS:
        draft.isLoading = false;
        break;
      case DELETE:
        draft.isLoading = true;
        break;
      case DELETESUCCESS:
        draft.isLoading = false;
        break;
    }
  });
export default takeListReducer;
