import { FC } from 'react';
import { Provider } from 'react-redux';
import { store } from './redux';
import GlobalStyle from './styles/GlobalStyle';
import RepositoriesList from './components/repositories-list/RepositoriesList';

const App: FC = () => {
  return (
    <>
      <Provider store={store}>
        <GlobalStyle />
        <h1>Search for a package</h1>
        <RepositoriesList />
      </Provider>
    </>
  );
};

export default App;
