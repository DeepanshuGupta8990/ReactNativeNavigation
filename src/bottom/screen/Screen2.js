import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Screen2 = ({navigation}) => {
    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
          <TouchableOpacity style={{backgroundColor:'blue',borderRadius:10}} onPress={()=>{navigation.openDrawer()}}>
              <View style={{padding:10}}>
        <Text style={{fontSize:30,color:'white'}}>Open side drawer 2</Text>
              </View>
          </TouchableOpacity>
      </View>
    )
  }

export default Screen2