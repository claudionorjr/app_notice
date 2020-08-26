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

/**
* @description: Configura o 'redux-saga' depois o 'redux-persist', cria um 'persistedReducer'
* com as configurações do 'persistConfig' e o 'reducer' e depois,
* exporta um store e um persistor que será usado no App.js.
*
* @see App.js
*/
export default () => {
  let store = createStore(persistedReducer, applyMiddleware(sagaMiddleware))
  sagaMiddleware.run(mySaga)
  let persistor = persistStore(store)
  return { store, persistor }
}
