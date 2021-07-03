// import { AnyAction } from 'redux' // redux has a type, AnyAction, to type actions if we do not want to create all the possible action types. We could have used it as the type of the action in the TThunkAction type in the last parameter
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../store';

export enum ActionTypes {
  SEARCH_REPOSITORIES = 'search_repositories',
  SEARCH_REPOSITORIES_SUCCESS = 'search_repositories_success',
  SEARCH_REPOSITORIES_ERROR = 'search_repositories_error',
}

export interface ISearchRepositoriesAction {
  type: ActionTypes.SEARCH_REPOSITORIES;
}

export interface ISearchRepositoriesSuccessAction {
  type: ActionTypes.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
}

export interface ISearchRepositoriesErrorAction {
  type: ActionTypes.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}

export type TRepositoriesActions =
  | ISearchRepositoriesAction
  | ISearchRepositoriesSuccessAction
  | ISearchRepositoriesErrorAction;

export type TThunkAction<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  TRepositoriesActions
>;
