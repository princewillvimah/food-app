import { View, Text ,Image,StyleSheet, Dimensions} from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 

const Rating = ({rating}) => {
  return (
    <View style={styles.mainCon}>
      <View style={styles.con}>
       <View>
         <Text style={{width:150,}} numberOfLines={1}>{rating.label||0}</Text>
         <View style={styles.star}>
         <AntDesign name="star" size={15} color="#faa716" />
         <AntDesign name="star" size={15} color="#faa716" />
         <AntDesign name="star" size={15} color="#faa716"/>
         <AntDesign name="star" size={15} color="#faa716"/>
         <FontAwesome name="star-half" size={15} color="#faa716" />
         </View>
       </View>
       <Image source={{ uri:rating.image}} style={styles.img}/>
      </View>
      <View style={styles.details}>
      <View style={styles.detailPerson}>
        <Image source={{uri:rating.imageperson}}  style={{width:30, height:30, borderRadius:50,}}/>
        <Text style={{marginLeft:10, color:'grey'}}>{rating.category}</Text>
      </View>
      <View style={styles.time}>
      <Ionicons name="timer-outline" size={24} color="grey" />
      <Text style={{color:'grey'}}> {rating.nutrients.FAT}</Text>
      </View>

    </View>
    </View>
  )
}
const styles= StyleSheet.create({
  mainCon:{
    width: Dimensions.get('window').width * 0.7,
    height:100,
    marginRight:20,
    paddingHorizontal:10,
     backgroundColor:'#f2f0f0',
     borderRadius:10,

      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 8,
      },
      shadowOpacity: 0.46,
      shadowRadius: 11.14,

      elevation: 17,
  },
 con:{
  flexDirection:'row', alignItems:'center',
  justifyContent:'space-between',

 },
 img:{
   width:70,
   height:80,
   borderRadius:50,
   marginTop:-40,
   marginLeft:0,
 },
  star:{
    flexDirection:'row',
    alignItems:'center',
    marginVertical:10,
  },
  details:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
  },
  detailPerson:{
    flexDirection:'row',
    alignItems:'center',
  },
  time:{
    flexDirection:'row',
    alignItems:'center',
  }
})
export default Rating