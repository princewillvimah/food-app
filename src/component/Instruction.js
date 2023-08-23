import { View, Text } from 'react-native'
import React from 'react'

const Instruction = ({Boy}) => {
  return (
    <View style={{marginVertical:20,}}>
    <View style={{flexDirection:'row',alignItems:'center'}}>
    <Text style={{marginHorizontal:10,marginLeft:'auto',color:'grey',fontSize:24}}>{Boy.num}</Text>
    <Text style={{width:300,color:'grey'}}>{Boy.text}</Text>
   </View>
    </View>
  )
}

export default Instruction;