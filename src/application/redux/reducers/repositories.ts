// import { AnyAction } from 'redux' // redux has a type, AnyAction, to type actions if we do not want to create all the possible action types. We could have used it as the type of the action in the reducer
import {
  ActionTypes,
  TRepositoriesActions,
} from '../action-types/repositories';
import { RootState } from '../store';

interface IRepositoryState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const INITIAL_STATE: IRepositoryState = {
  loading: false,
  error: null,
  data: [],
};

const reducer = (
  state: IRepositoryState = INITIAL_STATE,
  action: TRepositoriesActions,
): IRepositoryState => {
  switch (action.type) {
    case ActionTypes.SEARCH_REPOSITORIES:
      return {
        loading: true,
        error: null,
        data: [],
      };
    case ActionTypes.SEARCH_REPOSITORIES_SUCCESS:
      return {
        loading: false,
        error: null,
        data: action.payload,
      };
    case ActionTypes.SEARCH_REPOSITORIES_ERROR:
      return {
        loading: false,
        error: action.payload,
        data: [],
      };
    default:
      return state;
  }
};

export const selectRepositoriesLoading = ({ repositories }: RootState) =>
  repositories.loading;
export const selectRepositoriesError = ({ repositories }: RootState) =>
  repositories.error;
export const selectRepositoriesData = ({ repositories }: RootState) =>
  repositories.data;

export default reducer;
