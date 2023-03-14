import produce from 'immer';
import {
  ADDACCOUNT,
  ADDACCOUNTSUCCESS, EDITACCOUNT, EDITACCOUNTSUCCESS,
  TAKELIST,
  TAKELISTSUCCESS,
  TAKEROLEGROUP,
  TAKEROLEGROUPSUCCESS,
} from './constantsHomePage';

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
      case ADDACCOUNT:
        draft.isLoading = true;
        break;
      case ADDACCOUNTSUCCESS:
        draft.isLoading = false;
        break;
      case TAKEROLEGROUP:
        draft.isLoading = true;
        break;
      case TAKEROLEGROUPSUCCESS:
        draft.isLoading = false;
        draft.roleGroup = action.data;
        break;
      case EDITACCOUNT:
        draft.isLoading = true;
        break;
      case EDITACCOUNTSUCCESS:
        draft.isLoading = false;
        break;
    }
  });
export default takeListReducer;
