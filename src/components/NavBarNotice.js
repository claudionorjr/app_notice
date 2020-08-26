import React from 'react';
import { View, Button, TextInput } from 'react-native';
import { connect } from 'react-redux'
import { styles, colorWarning, colorSuccess } from '../../public/Styles'


/**
 * @class NavBarNotice
 * 
 * @description: Classe componente responsável por toda a regra da view da NavBar.
 * 
 * @author Claudionor Silva <claudionor.junior1994@gmail.com>
 * @version 1.0.0
 */
class NavBarNotice extends React.Component {
   constructor(props) {
     super(props)
     this.state = {inputSearch: ''}
   }
  /**
   * @description: Em NavBarNotice, o 'render()' é usado para renderizar uma 'NavBar' com dois botões,
   * um para renderizar usando 'dispatch()' e outra que passa um Array de noticias favoritas para o
   * 'action.notices' substituindo o estado e alterando a View de 'InitNotice.js'.
   * 
   * @see /src/sagas.js
   * @see InitNotice.js
   */
  render() {
    return (
      <View style={styles.navbar}>
        <View style={styles.btnArea}>
          <Button
                onPress={async () => {
                  this.props.dispatch({ type: 'NOTICE_FETCH_REQUESTED' })
                }}
                title="Ver Principais"
                color={colorWarning}
          />
          <Button
                onPress={() => {
                  let favList = [...this.props.fav]
                  this.props.dispatch({ type: 'initial', notices: favList })
                }}
                title="Ver Favoritas"
                color={colorSuccess}
          />
        </View>
        <View style={styles.inputArea}>
            <TextInput
              style={styles.inputSearch}
              onChangeText={(text) => {
                this.setState({inputSearch: text})
              }}
              placeholder={"Busque por Assunto..."}
              value={this.state.inputSearch}
            />
            <Button
              onPress={() => {
                this.props.dispatch({type: 'NOTICE_FETCH_REQUESTED', text: this.state.inputSearch})
                this.setState({inputSearch: ""})
              }}
              color={colorSuccess}
              title="Pesquisar"
            />
            <Button
              onPress={() => {
                let country = 'br'
                this.props.dispatch({type: 'NOTICE_FETCH_REQUESTED', country: country})
              }}
              color={colorSuccess}
              title="BR"
            />
            <Button
              onPress={() => {
                let country = 'us'
                this.props.dispatch({type: 'NOTICE_FETCH_REQUESTED', country: country})
              }}
              color={colorSuccess}
              title="US"
            />
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return { notices: state.notices, fav: state.fav }
}

export default connect(mapStateToProps)(NavBarNotice)
