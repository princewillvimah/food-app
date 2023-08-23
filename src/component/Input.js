import { View, TextInput,Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Input = () => {
  const navigation= useNavigation();
  return (
    <View>
      <Text>Search Recipes By Vimah</Text>
    </View>
  )
}

export default Input;