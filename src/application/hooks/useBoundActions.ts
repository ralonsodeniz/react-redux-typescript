import { bindActionCreators } from 'redux';
import { useTypedDispatch } from './useTypedDispatch';
import { repositoryActions } from '../redux';

export const useBoundActions = () => {
  const dispatch = useTypedDispatch();
  return bindActionCreators(repositoryActions, dispatch);
};
