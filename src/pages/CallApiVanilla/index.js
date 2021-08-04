import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Button, Image } from 'react-native'

const CallApiVanilla = () => {
  const [ dataUser, setDataUser ] = useState( {
    avatar: '',
    email: '',
    first_name: '',
    last_name: '',
  } )

  const [ dataJob, setDataJob ] = useState( {
    name: '',
    job: '',
  } )
  useEffect( () => {

    //Call Api Method GET
    // fetch( 'https://jsonplaceholder.typicode.com/todos/1' )
    //   .then( response => response.json() )
    //   .then( json => console.log( json ) )

    //Call Api Method Push
    // const dataForApi = {
    //   name: "morpheus",
    //   job: "leader"
    // }
    // fetch( 'https://reqres.in/api/users', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify( dataForApi )
    // } )
    //   .then( response => response.json() )a
    //   .then( json => {
    //     console.log( 'post response: '.json );
    //   } )

  }, [] )

  const getData = () => {
    fetch( 'https://reqres.in/api/users/2' )
      .then( response => response.json() )
      .then( json => {
        console.log( json )
        setDataUser( json.data )
      } )
  }

  const postData = () => {
    const dataForApi = {
      name: "morpheus",
      job: "leader"
    }

    fetch( 'https://reqres.in/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify( dataForApi )
    } )
      .then( response => response.json() )
      .then( json => {
        console.log( 'post response: '.json );
        setDataJob( json )
      } )
  }
  return (
    <View style={ styles.container }>
      <Text style={ styles.textTitle }>Call Api dengan VanillaJs</Text>
      <Button title="GET DATA" onPress={ getData } />
      <Text>Response GET DAT</Text>
      <Image source={ { uri: dataUser.avatar } } style={ styles.avatar } />
      <Text>{ `${ dataUser.first_name } ${ dataUser.last_name }` }</Text>
      <Text>{ dataUser.email }</Text>
      <View style={ styles.line } />
      <Button title="POST DATA" onPress={ postData } />
      <Text>Response POST DAT</Text>
      <Text>{ dataJob.name }</Text>
      <Text>{ dataJob.job }</Text>
    </View>
  )
}

export default CallApiVanilla
const styles = StyleSheet.create( {
  container: {
    padding: 20
  },
  textTitle: {
    textAlign: 'center',
    color: 'white'
  },
  line: {
    height: 2,
    backgroundColor: 'white',
    marginVertical: 20
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 100
  }
} )
