import React, { Component, useState } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

const Counter = () => {
  const [ number, setNumber ] = useState( 0 )
  return (
    <View>
      <Text>{ number }</Text>
      <Button title='Tambah'
        onPress={ () => setNumber( number + 1 ) } />

    </View>
  )
}


class CounterClass extends Component {
  state = {
    number: 0

  }
  render() {
    return (
      <View>
        <Text>{ this.state.number }</Text>
        <Button title='Tambah'
          onPress={ () => this.setState( { number: this.state.number + 1 } ) } />
      </View>

    )
  }
}

const StateDinamis = () => {
  return (
    <View style={ styles.wrapper }>
      <Text style={ styles.textTitle }>
        Materi Componen Dinamis dengan State
        </Text>
      <Text style={ styles.textSection }>
        Functional Component (Hooks)
        </Text>
      <Counter />
      <Counter />
      <Text style={ styles.textSection }>
        Class Component
      </Text>
      <CounterClass />
      <CounterClass />
    </View>


  )
}
const styles = StyleSheet.create( {
  wrapper: {
    padding: 20
  },
  textTitle: {
    textAlign: 'center'
  },
  textSection: {
    marginTop: 20
  }
} )

export default StateDinamis
