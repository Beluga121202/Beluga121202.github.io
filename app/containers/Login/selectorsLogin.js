import { createSelector } from 'reselect';
import { REDUX_KEY } from './constantsLogin';
import { initialState } from './reducerLogin';
export const selectLogin = state => state[REDUX_KEY] || initialState;

export const selectLoading = () =>
  createSelector(
    selectLogin,
    state => state.isLoading,
  );
