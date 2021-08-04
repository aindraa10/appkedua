import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ReactNativeSvg = () => {
  return (
    <View style={ styles.container }>
      <Text style={ styles.textTitle }>Materi Menggunakan File SVG didalam React Native</Text>
      {/* <ilustrationMyApp /> */ }
    </View>
  )
}

export default ReactNativeSvg

const styles = StyleSheet.create( {
  container: {
    padding: 20
  },
  textTitle: {
    alignItems: 'center'
  }
} )
