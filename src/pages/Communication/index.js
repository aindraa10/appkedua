import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Cart from '../../components/Cart'
import Product from '../../components/Product'

const Communication = () => {
  const [ totalProduct, setTotalProduct ] = useState( 0 )
  return (
    <View style={ styles.container }>
      <Text style={ styles.textStyle }>Materi Communication antar Component</Text>
      <Cart quantity={ totalProduct } />
      <Product onButtonPress={ () => setTotalProduct( totalProduct + 1 ) } />
    </View>
  )
}

export default Communication

const styles = StyleSheet.create( {
  container: {
    padding: 20
  },
  textStyle: {
    textAlign: 'center'
  }
} )