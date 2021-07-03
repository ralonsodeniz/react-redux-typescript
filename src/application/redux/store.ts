import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from './reducers';

export const store = createStore(
  reducers,
  {},
  composeWithDevTools(applyMiddleware(thunk)),
);

// this creates a type from the type of the return of a function, in this case it gets the state from the function that gets it from the store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
