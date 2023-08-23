import { View, Text,Image,StyleSheet, Dimensions,ScrollView, FlatList} from 'react-native'
import texto from '../component/Text.json';
import React from 'react'
import Instruction from './Instruction';

const SearchDetail = ({eat}) => {
  return (
    <ScrollView style={{backgroundColor:'#fff',height:'100%'}}>
      <View style={{marginHorizontal:20,}}>
      <Image style={styles.img} source={{uri:eat.image}}/>
      <Text style={styles.text}>{eat.label}</Text>

      <View style={styles.ingr}>
       <Text>Calories</Text>
       <Text>{eat.nutrients.PROCNT}</Text>
      </View>
      <View style={styles.ingr}>
       <Text>Sugar</Text>
       <Text>{eat.nutrients.PROCNT}</Text>
      </View>
      <View style={styles.ingr}>
       <Text>Protein</Text>
       <Text>34%</Text>
      </View>

      <Text style={{fontSize:24,fontWeight:'bold',marginVertical:7,}}>Instructions</Text>

    <FlatList
    data={texto}
    renderItem={({item})=> <Instruction Boy={item}/>}
    contentContainerStyle={{paddingVertical:10,}}
    />
      
      </View>
    </ScrollView>
  )
}
const styles= StyleSheet.create({
  img:{
    width: Dimensions.get('window').width*0.88,
    aspectRatio: 4/3,
    borderRadius:14,
  },
  text:{
    fontSize:18,
    fontWeight:'bold',
    marginVertical:10,  
  },
  ingr:{
    backgroundColor:'#dcdcdc',
    flexDirection:'row',
    justifyContent:'space-between',
    borderRadius:7,
    paddingHorizontal:10,
    paddingVertical:10,
    marginVertical:1,
  }
  
})

export default SearchDetail;