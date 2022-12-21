import {
    AppRegistry,
    Button,
    StyleSheet,
    NativeModules,
    Platform,
    Text,
    View,
    Image
  } from 'react-native';

  import RNPrint from 'react-native-print';
  import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import React, { useState } from 'react'



export default function Router() {

    const [imgPath,setImgPath]= useState('https://www.shutterstock.com/image-photo/micro-peacock-feather-hd-imagebest-600w-1127238599.jpg')

    async function printHTML() {
        await RNPrint.print({
          html: `<img src=${imgPath} alt="logo" height="auto" width="100%">`
        })
      }
    //   https://www.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg
    async function chImg(){
       
        const result = await launchImageLibrary({mediaType:'photo'})
        console.warn(result.assets[0].uri)
        setImgPath(result.assets[0].uri)
    }

  return (
    <View style={{flex:1,padding:50}} >
        <Text style={{color:'black',textAlign:'center',fontWeight:'bold',marginBottom:30 ,fontSize:30}} >
            Print

        </Text>
        <Button onPress={printHTML} title="Print photo" />
        {/* <Button onPress={chImg} title="choose img" /> */}
       {/* <Image style={{height:100,width:100}} source={{uri:imgPath}}/> */}
        
         
     
    </View>
  )
}