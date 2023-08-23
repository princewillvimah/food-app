import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import * as Progress from 'react-native-progress';
import * as Animatable from 'react-native-animatable';



const Inprogress = () => {
    const navigation=useNavigation();
    useEffect(()=>{
     setTimeout(()=>{
       navigation.navigate('Search')
     },1000)
    })
    
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#000', width:'100%',height:'100%'}}>
      <Progress.Circle size={70} indeterminate={true} color='#329477'/> 
      <Animatable.Text animation="slideInUp" iterationCount={1} direction="alternate" 
      style={{fontSize:20,fontWeight:'600',color:'#329477',marginVertical:20,}}>In Progress ...Vimah</Animatable.Text>
      <Animatable.Text animation="slideInUp" iterationCount={1} direction="alternate" 
      style={{fontSize:13,fontWeight:'600',color:'#329477',marginVertical:5,}}>Please Kindly Wait</Animatable.Text>
      <Animatable.Text animation="slideInUp" iterationCount={1} direction="alternate" 
      style={{fontSize:13,fontWeight:'600',color:'#329477',marginVertical:5,}}> To The Search Screen</Animatable.Text>
    </View>
  )
}

export default Inprogress;