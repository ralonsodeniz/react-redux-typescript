import axios from 'axios';
import {
    ActionTypes,
    ISearchRepositoriesAction,
    ISearchRepositoriesSuccessAction,
    ISearchRepositoriesErrorAction,
    TThunkAction,
} from '../action-types/repositories';

const searchRepositoriesStart = (): ISearchRepositoriesAction => ({
  type: ActionTypes.SEARCH_REPOSITORIES,
});
const searchRepositoriesSuccess = (
  packages: string[],
): ISearchRepositoriesSuccessAction => ({
  type: ActionTypes.SEARCH_REPOSITORIES_SUCCESS,
  payload: packages,
});
const searchRepositoriesError = (
  error: string,
): ISearchRepositoriesErrorAction => ({
  type: ActionTypes.SEARCH_REPOSITORIES_ERROR,
  payload: error,
});

export const searchRepositories =
  (term: string): TThunkAction => async (dispatch) => {
    dispatch(searchRepositoriesStart());
    try {
      const { data } = await axios.get(
        'https://registry.npmjs.org/-/v1/search',
        {
          params: {
            text: term,
          },
        },
      );
      const packagesNameArray = data.objects.map(
        (result: any) => result.package.name,
      );
      dispatch(searchRepositoriesSuccess(packagesNameArray));
    } catch (error) {
      dispatch(searchRepositoriesError(error.message));
    }
  };
