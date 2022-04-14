import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import appReducers from '../reducers';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const rootReducer = combineReducers(appReducers);
const persistedReducer = persistReducer(persistConfig, rootReducer);

const defaultStore = () => {
  let store = createStore(persistedReducer, applyMiddleware(logger));
  let persistor = persistStore(store);
  return {store, persistor};
};

export default defaultStore;
