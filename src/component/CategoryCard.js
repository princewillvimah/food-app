import { StyleSheet, Text, View,Image, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'

const CategoryCard = ({card}) => {
  return (
    <TouchableOpacity style={styles.card}>
      <Image style={styles.img} source={{uri:card.image}}/>
      <Text style={styles.text}> {card.label}</Text>
      <View style={styles.timer}>
       <Text>{card.category}</Text>
       <Text>{card.nutrients.FAT}</Text>
      </View>
    </TouchableOpacity>
    
  )
}
const styles = StyleSheet.create({
    img:{
        width:100,
        height:100,
        borderRadius:50,
        marginTop:-30,
        marginBottom:20,
    },
    card:{
        backgroundColor:'#dcdcdc',
        width:Dimensions.get('window').width* 0.4,
        paddingVertical:10,
        paddingHorizontal:20,
        alignItems:'center',
        borderRadius: 8,
        marginHorizontal:7,
        marginVertical:20,
        height:230,
    },
    text:{
        fontSize:10,
        fontWeight:'bold',
        textAlign:'center',
        marginBottom:10,

    },
    timer:{
        alignSelf: 'flex-start',
    }
})

export default CategoryCard

