import React from 'react'
import { Text, View, Image, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { styles, colorSuccess} from '../../public/Styles'
import NavBarNotice from './NavBarNotice'
import BtnRemove from './BtnRemove'
import BtnAdd from './BtnAdd'


/**
 * @class InitNotice
 * 
 * @description: Classe componente responsável por toda a regra da view das noticias.
 * 
 * @author Claudionor Silva <claudionor.junior1994@gmail.com>
 * @version 1.0.0
 */
class InitNotice extends React.Component {
  
  /**
   * @description: 'componentDidMount()' faz 'dispatch()' com type do sagas.
   * 
   * @see /src/sagas.js
   */
  async componentDidMount() {
    this.props.dispatch({ type: 'NOTICE_FETCH_REQUESTED', text: undefined})
  }

  /**
   * @description: 'isFav()' verifica pelo titulo das noticias, se ela já consta como favorita.
   * 
   * @param {Notice.title} notice 
   */
  isFav = (notice) => {
    if(this.props.fav.length > 0) {
        for (let index = 0; index < this.props.fav.length; index++) {
            let retorno = this.props.fav[index]['title'] === notice['title']
            if (retorno) return retorno
        }
    }
    return false
  }

  /**
   * @description: Método recebe um Objeto Notice e renderiza um card para cada noticia.
   * 
   * @param {Notice} obj
   */
  renderItem(obj) {
    return (
        <View style={styles.card}>
          <>
            <Image style={styles.imageArea}
              source={
                obj.item['urlToImage'] === null ?
                { uri: "https://reactjs.org/logo-og.png" }
                :
                { uri: obj.item['urlToImage'] }
              }
            />
          </>
          <><Text style={styles.titleArea}>{obj.item['title']}</Text></>
          <><Text style={styles.contentArea}>{obj.item['content']}</Text></>
          <View style={styles.btnArea}>
            {
              obj.item['favorite'] ?
              (<BtnRemove obj={obj.item['title']} />)
              :
              this.isFav(obj.item) ?
              (<Text style={{color: colorSuccess}}> Favorita </Text>)
              :
              (<BtnAdd obj={obj.item} />)
            }
          </View>
        </View>
        )
  }

  /**
   * @description: Renderiza um FlatList de 'this.props.notices'.
   * 
   * @see this.renderItem()
   */
  render() {
    return (
      <>
        <NavBarNotice />
        <FlatList style={styles.flatList} data={this.props.notices} keyExtractor={(item) => {
          return item['title']
        }}
        renderItem={(item) => {
          return this.renderItem(item)
        }}/>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return { notices: state.notices, fav: state.fav }
}

export default connect(mapStateToProps)(InitNotice)
