import React, { Component } from 'react'
import { View, TextInput, Text, Image } from 'react-native'
import macbook from '../../assets/image/apple.jpg'
const StylingComponent = () => {
  return (
    <View>
      <Text>Styling React Native Component</Text>
      {/* <View style={ { height: 100, width: 100, backgroundColor: 'cyan', borderWidth: 2, } } /> */ }
      <View style={ {
        padding: 12,
        backgroundColor: '#F2f2f2',
        width: 212,
        borderRadius: 8,
      } }>
        <Image source={ macbook }
          style={ {
            width: 188,
            height: 107,
            borderRadius: 8
          } } />
        <Text style={ {
          fontSize: 14,
          fontWeight: 'bold',
          marginTop: 16,
        } }>Macbook Pro 2019</Text>
        <Text style={ {
          fontSize: 12,
          fontWeight: 'bold',
          color: '#f2994a',
          marginTop: 12,
        } }>Rp. 25.000.000</Text>
        <Text style={ {
          fontSize: 12,
          fontWeight: '300',
          marginTop: 12,
        } }>Jakarta Barat</Text>
        <View style={ {
          backgroundColor: '#6fcf97',
          paddingVertical: 6,
          borderRadius: 25,
          marginTop: 20,
        } }>
          <Text style={ {
            fontSize: 14,
            fontWeight: '600',
            color: 'white',
            textAlign: 'center'
          } }
          >Beli</Text>
        </View>
      </View>
    </View>
  )
}
export default StylingComponent