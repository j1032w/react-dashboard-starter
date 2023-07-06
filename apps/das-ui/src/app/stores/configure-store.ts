import { configureStore, StoreEnhancer } from '@reduxjs/toolkit';
import { createInjectorsEnhancer } from 'redux-injectors';
import {combineEpics, createEpicMiddleware} from 'redux-observable';
import createSagaMiddleware from 'redux-saga';


import { createReducer } from './reducers';

export function configureAppStore() {
  const reduxSagaMonitorOptions = {};
  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
  const { run: runSaga } = sagaMiddleware;



  const epicMiddleware = createEpicMiddleware();
  const rootEpic = combineEpics(

  );

  epicMiddleware.run(rootEpic);

  // Create the store with saga middleware
  const middlewares = [sagaMiddleware, epicMiddleware];

  const enhancers = [
    createInjectorsEnhancer({
      createReducer,
      runSaga
    }),
  ] as StoreEnhancer[];

  return configureStore({
    reducer: createReducer(),
    middleware: defaultMiddleware => [...defaultMiddleware(), ...middlewares],
    devTools:
      /* istanbul ignore next line */
      (process.env.NODE_ENV !== 'production') ||
      ((process.env.PUBLIC_URL?.length??0) > 0),
    enhancers,
  });
}


