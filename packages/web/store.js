

import { createStore, combineReducers, applyMiddleware } from 'redux';
import rootReducer from '../components/src/reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import { persistStore, persistReducer } from 'redux-persist'
import webStorage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { Platform } from "react-native";

const persistConfig = {
    key: 'root',
    storage: webStorage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export function initializeStore(initialState = {}) {
    return createStore(
      persistedReducer,
      initialState,
      applyMiddleware(thunk, logger)
    )
  }