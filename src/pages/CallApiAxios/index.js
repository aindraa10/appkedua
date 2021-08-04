import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Button, Image } from 'react-native'

const CallAPIAxios = () => {
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

  const getData = () => {
    axios.get( 'https://reqres.in/api/users/5' )
      .then( result => {
        setDataUser( result.data.data )
      } )
      .catch( err => console.log( 'err: ', err ) )
  }

  const postData = () => {
    const dataForApi = {
      name: "morpheus",
      job: "leader"
    }

    axios.post( 'https://reqres.in/api/users', dataForApi )
      .then( result => {
        setDataJob( result.data )
      } )
      .catch( err => console.log( 'err: ', err ) )

  }
  return (
    <View style={ styles.container }>
      <Text style={ styles.textTitle }>Call Api dengan Axios</Text>
      <Button title="GET DATA" onPress={ getData } />
      <Text>Response GET DAT</Text>
      { dataUser.avatar.length > 0 && (
        <Image source={ { uri: dataUser.avatar } } style={ styles.avatar } />
      ) }
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

export default CallAPIAxios
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
