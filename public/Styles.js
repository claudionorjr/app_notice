import React from 'react'
import { StyleSheet } from 'react-native'

export const colorInfo = "#38FEA3"
export const colorSuccess = "#77E632"
export const colorDanger = "#E63200"
export const colorWarning = "#E68B00"
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#777',
    alignItems: 'center',
  },
  navbar: {
    marginTop: 24,
    borderColor: '#777',
    borderWidth: 1,
    backgroundColor: '#5FC7FA',
    height: "auto",
  },
  flatList: {
    
  },
  card: {
    marginTop: 20,
    marginRight: 5,
    marginLeft: 5,
    borderColor: '#777',
    borderRadius: 5,
    borderWidth: 1,
    marginBottom: 20,
  },
  imageArea: {
    width: "100%",
    height: 150,
  },
  titleArea: {
    fontSize: 38,
    textAlign: 'center',
    margin: 5,
  },
  contentArea: {
    fontSize: 15,
    textAlign: 'center',
    margin: 5,
  },
  btnArea: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "space-evenly",
    margin: 5,
  },
  inputArea: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "space-evenly",
    margin: 5,
  },
  inputSearch: {
    backgroundColor: '#FFF',
    height: 36,
    padding: 5,
    borderRadius: 7,
  },
})
