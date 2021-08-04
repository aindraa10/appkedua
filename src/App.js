import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import Basicavascript from './pages/BasicJavaScript';
import CallApiVanilla from './pages/CallApiVanilla';
import CallAPIAxios from './pages/CallApiAxios';
import Communication from './pages/Communication';
import FlexBox from './pages/FlexBox'
import PositionReactNative from './pages/Position'
import PropsDinamis from './pages/PropDinamis';
import SampleComponent from './pages/SampleComponent'
import StateDinamis from './pages/StateDinamis';
import StylingComponent from './pages/StylingComponent'
import LocalAPI from './LocalAPI';

const App = () => {
  // const [ isShow, SetIsShow ] = useState( true )
  // useEffect( () => {
  //   setTimeout( () => {
  //     SetIsShow( false )
  //   }, 6000 )
  // }, [] )
  return (
    <ScrollView  >
      {/* <SampleComponent /> */ }
      {/* <StylingComponent /> */ }
      {/* <FlexBox /> */ }
      {/* <PositionReactNative /> */ }
      {/* <PropsDinamis /> */ }
      {/* <StateDinamis /> */ }
      {/* <Communication /> */ }
      {/* <ReactNativeSvg /> */ }
      {/* <Basicavascript /> */ }
      {/* <CallApiVanilla /> */ }
      {/* <CallAPIAxios /> */ }
      <LocalAPI />
    </ScrollView>

  )
}

export default App;