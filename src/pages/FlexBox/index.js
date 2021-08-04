import React, { Component, useEffect, useState } from 'react';
import { Image, Text, View, } from 'react-native';
import img from '../../assets/image/apple.jpg'

// class FlexBox extends Component {
//   constructor ( props ) {
//     super( props )
//     console.log( '===>> constructor' );
//     this.state = {
//       subsriber: 400,
//     }
//   }
//   componentDidMount() {
//     console.log( '===>> componentDidMounth' );
//     setTimeout( () => {
//       this.setState( {
//         subsriber: 700,
//       } )
//     }, 2000 )
//   }
//   componentDidUpdate() {
//     console.log( '===>> componentDidUpdate' );
//   }
//   render() {
//     console.log( '===>> render' );
//     return (
//       <View>
//         <View style={ { flexDirection: 'row', backgroundColor: 'grey', alignItems: 'center', justifyContent: 'space-between' } }>
//           {/* <Text>Materi Flex Box</Text> */ }
//           <View style={ { backgroundColor: '#ee5253', width: 50, height: 50 } } />
//           <View style={ { backgroundColor: '#feca57', width: 50, height: 50 } } />
//           <View style={ { backgroundColor: '#1dd1a1', width: 50, height: 50 } } />
//           <View style={ { backgroundColor: '#5f27cd', width: 50, height: 50 } } />
//         </View>
//         <View style={ { flexDirection: 'row', justifyContent: 'space-around' } }>
//           <Text>Beranda</Text>
//           <Text>Video</Text>
//           <Text>Playlist</Text>
//           <Text>Komunitas</Text>
//           <Text>Chanel</Text>
//           <Text>Tentang</Text>
//         </View>
//         <View style={ { flexDirection: 'row', alignItems: 'center', marginTop: 20 } }>
//           <Image source={ img }
//             style={ { width: 100, height: 100, borderRadius: 50, marginRight: 15 } } />
//           <View>
//             <Text style={ { fontSize: 20, fontWeight: 'bold' } }>Asep Indrawan</Text>
//             <Text>{ this.state.subsriber } rb Subs</Text>
//           </View>
//         </View>
//       </View>
//     )
//   }
// }

const FlexBox = () => {
  const [ subscriber, setSubscriber ] = useState( 200 )
  useEffect( () => {
    console.log( 'did mount' );
    setTimeout( () => {
      setSubscriber( 400 )
    }, 2000 )
    return () => {
      console.log( 'did update' );
    }
  }, [ subscriber ] );

  // useEffect( () => {
  //   console.log( 'did update' );
  //   setTimeout( () => {
  //     setSubscriber( 400 )
  //   }, 2000 )
  // }, [ subscriber ] );

  return (
    <View>
      <View style={ { flexDirection: 'row', backgroundColor: 'grey', alignItems: 'center', justifyContent: 'space-between' } }>
        {/* <Text>Materi Flex Box</Text> */ }
        <View style={ { backgroundColor: '#ee5253', width: 50, height: 50 } } />
        <View style={ { backgroundColor: '#feca57', width: 50, height: 50 } } />
        <View style={ { backgroundColor: '#1dd1a1', width: 50, height: 50 } } />
        <View style={ { backgroundColor: '#5f27cd', width: 50, height: 50 } } />
      </View>
      <View style={ { flexDirection: 'row', justifyContent: 'space-around' } }>
        <Text>Beranda</Text>
        <Text>Video</Text>
        <Text>Playlist</Text>
        <Text>Komunitas</Text>
        <Text>Chanel</Text>
        <Text>Tentang</Text>
      </View>
      <View style={ { flexDirection: 'row', alignItems: 'center', marginTop: 20 } }>
        <Image source={ img }
          style={ { width: 100, height: 100, borderRadius: 50, marginRight: 15 } } />
        <View>
          <Text style={ { fontSize: 20, fontWeight: 'bold' } }>Asep Indrawan</Text>
          <Text>{ subscriber } rb Subs</Text>
        </View>
      </View>
    </View>
  )
}
export default FlexBox