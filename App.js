import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Provider } from 'react-redux'
import InitNotice from './src/components/InitNotice'
import { styles } from './public/Styles'
import { PersistGate } from 'redux-persist/integration/react'
import configureStore from './src/configureStore'


const {store, persistor} = configureStore()

export default function App() {
  return (
    <Provider store={store} style={styles.container}>
      <PersistGate loading={null} persistor={persistor}>
        <InitNotice />
        <StatusBar backgroundColor="#5FC7FA" style="auto" />
      </PersistGate>
    </Provider>
  )
}
