import React from 'react'
import { Button } from 'react-native'
import { connect } from 'react-redux'
import { colorSuccess } from '../../public/Styles'


/**
 * @class BtnAdd
 * @description: Exporta por padrão um BtnAdd.
 * 
 * @author Claudionor Silva <claudionor.junior1994@gmail.com>
 * @version 1.0.0
 * 
 * @returns {BtnAdd}
 */
class BtnAdd extends React.Component {

  /**
   * @description: Renderiza um botão para usar quando for salvar uma noticia nos favoritos.
   */
  render() {
    return (
      <Button
        onPress={() => {
          let newNotice = [...this.props.fav]
          let notice = {'urlToImage': this.props.obj['urlToImage'], 'title': this.props.obj['title'], 'content': this.props.obj['content'], 'favorite': true}
          newNotice.push(notice)
          this.props.dispatch({ type: 'add/notice', fav: newNotice})
        }}
        title="Favoritar"
        color={colorSuccess}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return { notices: state.notices, fav: state.fav }
}

export default connect(mapStateToProps)(BtnAdd)