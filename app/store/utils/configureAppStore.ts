import {
  AnyAction,
  Dispatch,
  Middleware,
  applyMiddleware,
  compose,
  configureStore,
} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import {logger} from '../reduxLogger';
import {rootReducer} from '../rootReducer';
import rootSagas from '../rootSaga';
import {connection} from './devTools';

export default function configureAppStore(/*preloadedState = {}*/) {
  // Logger
  const middlewares: Middleware<{}, any, Dispatch<AnyAction>>[] = [];
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(logger);
  }

  // Saga middleware
  const sagaMiddleware = createSagaMiddleware();
  middlewares.push(sagaMiddleware);

  const enhancers = compose(applyMiddleware(...middlewares), connection);

  const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => [
      ...getDefaultMiddleware({thunk: false}),
      ...middlewares,
    ],
    devTools: process.env.NODE_ENV !== 'production',
    enhancers: [enhancers],
  });

  sagaMiddleware.run(rootSagas);

  if (process.env.NODE_ENV !== 'production' && (module as any).hot) {
    (module as any).hot.accept('../rootReducer', () =>
      store.replaceReducer(rootReducer),
    );
  }
  return store;
}
