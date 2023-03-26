import { createSelector } from 'reselect';
import { REDUX_KEY } from './constantsProducts';
import { initialState } from './reducerProducts';

export const selectTakeList = state => state[REDUX_KEY] || initialState;

export const selectLoading = () =>
  createSelector(
    selectTakeList,
    state => state.isLoading,
  );

export const selectInfoUser = () =>
  createSelector(
    selectTakeList,
    state => state.infoUser,
  );
export const selectRoleGroup = () =>
  createSelector(
    selectTakeList,
    state => state.roleGroup,
  );
