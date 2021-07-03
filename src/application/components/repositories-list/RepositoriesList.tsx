import { ChangeEventHandler, FC, FormEventHandler, useState } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { useBoundActions } from '../../hooks/useBoundActions';
import {
  selectRepositoriesData,
  selectRepositoriesLoading,
} from '../../redux/reducers/repositories';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const RepositoriesList: FC = () => {
  const [packageName, setPackageName] = useState('');
  const { searchRepositories } = useBoundActions();
  const repositories = useSelector(selectRepositoriesData, shallowEqual);
  const loading = useSelector(selectRepositoriesLoading, shallowEqual);
  // we can use our useTypedSelector to get data without using the selectors defined in the reducer file
  const { error } = useTypedSelector(
    ({ repositories }) => repositories,
    shallowEqual,
  );
  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    searchRepositories(packageName);
  };
  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const {
      target: { value },
    } = event;
    setPackageName(value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input value={packageName} onChange={handleChange} />
        <button type={'submit'}>Search</button>
      </form>
      {error ? <h3>{error}</h3> : null}
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <ul>
          {repositories.map((repository, index) => (
            <li key={repository + index}>{repository}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default RepositoriesList;
