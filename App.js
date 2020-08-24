import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import InitNotice from './InitNotice'
import reducer from './reducer'
import { styles } from './public/Styles'


const store = createStore(reducer)

export default function App() {
  return (
    <Provider store={store} style={styles.container}>
      <InitNotice />
      <StatusBar backgroundColor="#5FC7FA" style="auto" />
    </Provider>
  );
}
