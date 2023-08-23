import { StyleSheet, Text, View,Image, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const CategoryCards = ({card}) => {
  const navigation= useNavigation();
  return (
    <TouchableOpacity style={styles.card} onPress={()=> navigation.navigate('details')}>
      <Image style={styles.img} source={{uri:card.thumbnail_url}}/>
      <Text style={styles.text}> {card.name}</Text>
      <View style={styles.timer}>
       <Text style={{fontSize:12, color:'purple'}}> Fat:20.13</Text>
       <Text style={{fontSize:12, color:'purple'}}> Protein:344.34</Text>
       <Text style={{fontSize:12, color:'purple'}}> FiBt:456.34</Text>
       <Text style={{fontSize:12, color:'purple'}}> Choleteral:2</Text>
       <Text style={{fontSize:12, color:'purple'}}>{card.aspect_ratio}</Text>
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
        height:250,
    },
    text:{
        fontSize:10,
        fontWeight:'bold',
        textAlign:'center',
        marginBottom:10,

    },
    timer:{
        alignSelf: 'flex-start',
        marginVertical:10
    }
})

export default CategoryCards;

