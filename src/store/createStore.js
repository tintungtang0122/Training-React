// libs
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { persistStore, persistReducer } from 'redux-persist';
import { seamlessImmutableReconciler } from 'redux-persist-seamless-immutable';
import appReducers from './rootReducers';
import rootSagas from './rootSagas';

// creates the store
export default () => {
  const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: seamlessImmutableReconciler,
    whitelist: [
      'product',
      'account'
    ]
  };

  /* ------------- Saga Middleware ------------- */

  const sagaMiddleware = createSagaMiddleware();

  const middleware = [
    ...getDefaultMiddleware({
      thunk: false,
      serializableCheck: false
    }),
    sagaMiddleware
  ];

  // eslint-disable-next-line no-undef
  const devMode = process.env.NODE_ENV === 'development';

  if (devMode) {
    middleware.push(logger);
  }

  /* ------------- AutoRehydrate Enhancer ------------- */
  const persistedReducer = persistReducer(persistConfig, appReducers);

  const store = configureStore({
    reducer: persistedReducer,
    devTools: devMode,
    middleware
  });

  const persistor = persistStore(store);

  // kick off root saga
  sagaMiddleware.run(rootSagas);

  return { store, persistor };
};
