import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

const Back = () => {
    const navigation=useNavigation();
  return (
    <TouchableOpacity style={{marginHorizontal:20,}} onPress={()=> navigation.navigate('Home')}>
    <Entypo name="back" size={28} color="grey" />
  </TouchableOpacity>
  )
}

export default Back

const styles = StyleSheet.create({})