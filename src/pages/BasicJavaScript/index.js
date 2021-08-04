import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Basicavascript = () => {
  //tipe primitive
  const nama = 'A Indra'
  let usia = 24
  const apakahLakilaki = true
  //complex
  const hewanPeliharaan = {
    nama: 'Miaw',
    jenis: 'Kucing',
    usia: 2,
    apakahHewanLokal: true,
    warna: 'Kuning',
    orangTua: {
      jantan: 'Kaisar',
      betina: 'Kuin'
    }
  }//objek

  //function
  const sapaOrang = ( name, age ) => {
    return console.log( `Hello ${ name } umur adna ${ age }` );
  }
  sapaOrang( 'A Indra', 24 )

  const namaOrang = [ 'indra', 'yudi', 'kancil', 'riswan' ]

  // if ( hewanPeliharaan.nama === 'Miaw' ) {
  //   console.log( 'Hello Miaw' );
  // } else {
  //   console.log( 'Hewan peliharaan siapa ini?' );
  // }

  const sapaHewan = ( objectHewan ) => {
    // let hasilSapa = ''
    // if ( objectHewan.nama === 'Miaw' ) {
    //   hasilSapa = 'Hallo Miaw'
    // } else {
    //   hasilSapa = 'Hewan peliharaan siapa ini?'
    // }
    // return hasilSapa
    return objectHewan.nama === 'Miaw'
      ? 'Hello Miaw'
      : 'Ini peliharaan siapa?'
  }
  return (
    <View style={ styles.container }>
      <Text style={ styles.textTitle }>Materi Basic Javascript di React Native</Text>
      <Text>Nama : { nama }</Text>
      <Text>Usia : { usia }</Text>
      <Text>{ sapaHewan( hewanPeliharaan ) }</Text>
      <Text>{ namaOrang[ 0 ] }</Text>
      <Text>{ namaOrang[ 1 ] }</Text>
      <Text>{ namaOrang[ 2 ] }</Text>

      {namaOrang.map( orang => ( <Text>{ orang }</Text> ) ) }
    </View>
  )
}

export default Basicavascript

const styles = StyleSheet.create( {
  container: {
    padding: 20
  },
  textTitle: {
    textAlign: 'center'
  }
} )
