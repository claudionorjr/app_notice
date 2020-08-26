import React from 'react'
import { Button } from 'react-native'
import { connect } from 'react-redux'
import { colorDanger} from '../../public/Styles'


/**
 * @class BtnRemove
 * @description: Exporta por padrão um BtnRemove.
 * 
 * @author Claudionor Silva <claudionor.junior1994@gmail.com>
 * @version 1.0.0
 * 
 * @returns {BtnRemove}
 */
class BtnRemove extends React.Component {

  /**
   * @description: Renderiza um botão para usar quando for deletar uma noticia dos favoritos.
   */
  render() {
    return (
      <Button
        onPress={() => this.props.dispatch({ type: 'remove/notice', favToRemove: this.props.obj})}
        title="Excluir"
        color={colorDanger}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return { notices: state.notices, fav: state.fav }
}

export default connect(mapStateToProps)(BtnRemove)
