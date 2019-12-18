import { createStore, combineReducers, applyMiddleware } from 'redux';
import rootReducer from 'components/src/reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage'
import { Platform } from "react-native";

const persistConfig = {
    key: 'root',
    storage: AsyncStorage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

let store = createStore(persistedReducer, {}, applyMiddleware(thunk, logger))
let persistor = persistStore(store)

export { store, persistor }