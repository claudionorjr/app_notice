import React from 'react'
import { Button, Text, View, Image, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { colorSuccess, styles, colorDanger} from '../../public/Styles'
import NavBarNotice from './NavBarNotice'


/**
 * @class InitNotice
 * 
 * @description: Classe componente responsável por toda a regra da view das noticias.
 */
class InitNotice extends React.Component {
  
  async componentDidMount() {
    this.props.dispatch({ type: 'USER_FETCH_REQUESTED'})
  }

  /**
   * @description: Método recebe um Objeto Notice e renderiza um card para cada noticia.
   * 
   * @param {Notice} obj 
   * @param {this.props} props 
   */
  renderItem(obj) {
    return (
        <View style={styles.card}>
          <View>
            <Image style={styles.imageArea} source={
              obj.item['urlToImage'] === null ? { uri: "https://reactjs.org/logo-og.png" } : { uri: obj.item['urlToImage'] }
            }/>
          </View>
          <View>
            <Text style={styles.titleArea}>{obj.item['title']}</Text>
          </View>
          <View>
            <Text style={styles.contentArea}>{obj.item['content']}</Text>
          </View>
          <View style={styles.btnArea}>
            {
              obj.item['favorite'] 
              ?
              (<Button
              onPress={() => this.props.dispatch({ type: 'remove/notice', favToRemove: obj.item['title']})}
              title="Excluir"
              color={colorDanger}
              />)
              :
              (<Button
                onPress={() => {
                  let newNotice = [...this.props.fav]
                  let notice = {'urlToImage': obj.item['urlToImage'], 'title': obj.item['title'], 'content': obj.item['content'], 'favorite': true}
                  newNotice.push(notice)
                  this.props.dispatch({ type: 'add/notice', fav: newNotice})
                }}
                title="Favoritar"
                color={colorSuccess}
              />)
            }
          </View>
        </View>
        )
  }

  render() {
    return (
      <>
        <NavBarNotice />
        <FlatList style={styles.flatList} data={this.props.notices} keyExtractor={(item) => item['title']} renderItem={(item) => this.renderItem(item)}/>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return { notices: state.notices, fav: state.fav }
}

export default connect(mapStateToProps)(InitNotice)
