import React from 'react';
import { Button, Text, View, Image, FlatList } from 'react-native';
import { connect } from 'react-redux'
import { colorInfo, colorSuccess, styles} from './public/Styles'
import NavBarNotice from './NavBarNotice'


class InitNotice extends React.Component {
  async initFetch() {
    let url = `https://newsapi.org/v2/top-headlines?country=br&apiKey=06e42da03f0044469b0ea3844b845745`
    let response = await fetch(url)
    let data = await response.json()
    let news = data.articles
    return news
  }
  
  async componentDidMount() {
    const noticiesAPI = await this.initFetch()
    this.props.dispatch({ type: 'initial', notices: noticiesAPI })
  }

  renderItem(obj, props) {
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
            <Button
              onPress={() => {
                let newNotice = [...this.props.fav]
                let notice = {'urlToImage': obj.item['urlToImage'], 'title': obj.item['title'], 'content': obj.item['content']}
                newNotice.push(notice)
                this.props.dispatch({ type: 'add/notice', fav: newNotice})
              }}
              title="Favoritar"
              color={colorSuccess}
            />
          </View>
        </View>
    )
  }

  render() {
    return (
      <>
        <NavBarNotice />
        <FlatList style={styles.flatList} data={this.props.notices} keyExtractor={(item) => item['title']} renderItem={(item) => this.renderItem(item, this.props)}/>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return { notices: state.notices, fav: state.fav }
}

export default connect(mapStateToProps)(InitNotice)
