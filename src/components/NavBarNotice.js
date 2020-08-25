import React from 'react';
import { View, Button } from 'react-native';
import { connect } from 'react-redux'
import { styles, colorWarning, colorSuccess } from '../../public/Styles'
import Api from "../data/Api"


/**
 * @class NavBarNotice
 * 
 * @description: Classe componente de Barra de Navegação.
 */
class NavBarNotice extends React.Component {
  
  render() {
    return (
      <View style={styles.navbar}>
        <View style={styles.btnArea}>
          <Button
                onPress={async () => {
                  this.props.dispatch({ type: 'USER_FETCH_REQUESTED'})
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
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return { notices: state.notices, fav: state.fav }
}

export default connect(mapStateToProps)(NavBarNotice)
