import produce from 'immer';
import { LOGIN, LOGIN_SUCCESS } from './constantsLogin';
export const initialState = {
  isLoading: false,
  userAccount: {},
};
/* eslint-disable default-case, no-param-reassign */
const loginReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOGIN:
        draft.isLoading = true;
        break;
      case LOGIN_SUCCESS:
        draft.isLoading = false;
        break;
    }
  });

export default loginReducer;
