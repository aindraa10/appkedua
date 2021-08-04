import React, { Component } from 'react'
import { View, TextInput, Text, Image } from 'react-native'
const SampleComponent = () => {
  return (
    <View>
      <View style={ { width: 80, height: 80, backgroundColor: 'blue' } } />
      <Text>Hello</Text>
      <Indra />
      <Text>In The</Text>
      <Text>Word</Text>
      <Poto />
      <TextInput style={ { borderWidth: 1 } } />
      <BoxGreen />
      <Profile />
    </View>

  )
}

const Indra = () => {
  return (

    <Text>Indra</Text>
  )
}

const Poto = () => {
  return (
    <Image source={ { uri: 'http://placeimg.com/100/100/tech' } }
      style={ { width: 100, height: 100 } } />

  )
}

class BoxGreen extends Component {
  render() {
    return (
      <Text>Ini Komponen Dari Class</Text>
    )
  }
}

class Profile extends Component {
  render() {
    return (
      <View>
        <Image source={ { uri: 'http://placeimg.com/100/100/animals' } } style={ {
          width: 100, height: 100
        } } />
        <Text>Ini Hewan</Text>
      </View>
    )
  }
}

export default SampleComponent