import React from 'react';
import { View, Button, TextInput } from 'react-native';
import { colorInfo, styles } from './public/Styles'


export default class NavBarNotice extends React.Component {
  
  render() {
    return (
      <View style={styles.navbar}>
        <View style={styles.btnArea}>
          <Button
                onPress={() => {}}
                title="Ver Favoritas"
                color={colorInfo}
          />
        </View>
        <View style={styles.inputArea}>
          <TextInput style={styles.input} placeholder="Pesquisar..." onChangeText={() => {}} />
          <Button title="Pesquisar" style={styles.buttonHover} onPress={() => {}} />
        </View>
      </View>
    )
  }
}
