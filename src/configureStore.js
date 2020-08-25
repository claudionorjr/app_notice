import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import createSagaMiddleware from 'redux-saga'
import AsyncStorage from '@react-native-community/async-storage'
import rootReducer from './reducer'
import mySaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

const persistConfig = {
  key: 'root',
  storage: AsyncStorage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default () => {
  let store = createStore(persistedReducer, applyMiddleware(sagaMiddleware))
  sagaMiddleware.run(mySaga)
  let persistor = persistStore(store)
  return { store, persistor }
}