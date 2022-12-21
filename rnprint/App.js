import { View, Text,StatusBar,SafeAreaView  } from 'react-native'
import React from 'react'
import Router from './components/Router'

export default function App() {
  return (
    <SafeAreaView style={{flex:1,backgroundColor:'skyblue'}} >
      <StatusBar backgroundColor={'white'} barStyle='dark-content'/> 
     <Router/>
    </SafeAreaView>
  )
}