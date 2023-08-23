import { View, Text,Image,StyleSheet, Dimensions, FlatList} from 'react-native'
import React, { useEffect, useState } from 'react'
import SearchDetail from '../component/SearchDetail'
import { useRoute } from '@react-navigation/native';



const SearchDetailScreen = () => {
  const [container,setContainer]=useState([]);
  const route= useRoute();
  const id= route.params.id;
  const con= container.find(rest=>rest.id===id)
  useEffect(()=>{
    const fetchData= async()=>{
      const url = 'https://edamam-food-and-grocery-database.p.rapidapi.com/api/food-database/v2/parser?nutrition-type=cooking&category%5B0%5D=generic-foods&health%5B0%5D=2';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'eed24ef393mshfed25bcafb6adabp1b7ba2jsn5a01549280d6',
          'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
        }
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
          setContainer(result.hints);
        
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  },[])
  return (
    <View>
   <FlatList
   data={container}
   renderItem={({item})=> <SearchDetail eat={item.food}/>}
   />
    </View>
  )
}
const styles= StyleSheet.create({
 
  
})

export default SearchDetailScreen;