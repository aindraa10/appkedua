import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'


const Story = ( props ) => {
  return (
    <View style={ { alignItems: 'center', marginRight: 20 } }>
      <Image source={ { uri: props.gambar } }
        style={ { width: 70, height: 70, borderRadius: 70 / 2 } }
      />
      <Text style={ { maxWidth: 50, textAlign: 'center' } }>{ props.judul }</Text>
    </View>

  )
}

const PropsDinamis = () => {
  return (
    <View>
      <Text>Materi Komponen Dinamis dengan Props</Text>
      <ScrollView horizontal>
        <View style={ { flexDirection: 'row' } }>
          <Story judul='Youtube Chanell' gambar='https://cdn.akurat.co/images/uploads/images/akurat_20201022020920_735154.jpg' />
          <Story judul='Kelas Online' gambar='https://cdn.akurat.co/images/uploads/images/akurat_20201022020920_735154.jpg' />
          <Story judul='Cooding' gambar='https://cdn.akurat.co/images/uploads/images/akurat_20201022020920_735154.jpg' />
          <Story judul='Shoot' gambar='https://cdn.akurat.co/images/uploads/images/akurat_20201022020920_735154.jpg' />
          <Story judul='Food' gambar='https://cdn.akurat.co/images/uploads/images/akurat_20201022020920_735154.jpg' />
          <Story judul='Tamiya' gambar='https://cdn.akurat.co/images/uploads/images/akurat_20201022020920_735154.jpg' />
        </View>
      </ScrollView>
    </View>
  )
}

export default PropsDinamis
