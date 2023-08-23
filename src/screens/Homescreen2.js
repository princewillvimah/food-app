import { View, StyleSheet,Text,Image, FlatList,TouchableOpacity, ActivityIndicator} from 'react-native'
import React, { useEffect, useState } from 'react'
import { AntDesign } from '@expo/vector-icons'; 
import Input from '../component/Input';
import Rating from '../component/Rating';
import foods from '../component/Food11.json';
import CategoryCard from '../component/CategoryCard';
import foodItem from '../component/foodItem.json';
import { useNavigation } from '@react-navigation/native';


const Homescreens = () => {
  const [container,setContainer]=useState([]);
  const [loading , setLoading]=useState(false)
  const navigation =useNavigation();
  const [selected, setSelected]= useState('Trending');
  const arr=['Trending','Seasonal','Data','Chocolatic','Vimah','Gift']
  

  useEffect(()=>{
    const fetchData= async()=>{
      const url = `https://edamam-food-and-grocery-database.p.rapidapi.com/api/food-database/v2/parser?nutrition-type=cooking&category%5B0%5D=generic-foods&health%5B0%5D=2`;
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'eed24ef393mshfed25bcafb6adabp1b7ba2jsn5a01549280d6',
          'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
        }
      };

      try {
        setLoading(true)
        const response = await fetch(url, options);
        const result = await response.json();
          setContainer(result.hints);
        
      } catch (error) {
        console.error(error);
      }finally{
        setLoading(false)
      }
    }
    fetchData();
  },[])
  return (
    <View style={styles.mainCon}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.searchCon} onPress={()=> navigation.navigate('Search') }>
        <AntDesign name="search1" size={24} color="#d9d9d9" style={{marginHorizontal:10,}} />
        <Input/>
        </TouchableOpacity>
        <Text style={styles.text}>Featured Recipes</Text>
        {loading? (
          <View style={{justifyContent:'center',alignItems:'center'}}><ActivityIndicator/></View>
        ): 
        <View>
           <FlatList
        data={container}
        renderItem={({item})=> <Rating rating={item.food} />}
        horizontal
        contentContainerStyle={{
          paddingTop:40,
          paddingBottom:40,
        }}
        showsHorizontalScrollIndicator= {false}
        />
        </View>
      }
       

        <FlatList

        data={arr}
        renderItem={({item})=> (
        <TouchableOpacity onPress={()=>{
          setSelected(item)
        }} >
          <Text style={
            [
              {backgroundColor: selected === item ? '#329477': null},styles.textInput,
              {color: selected==item? '#fff':null}
            ]
          }>{item}</Text>
        </TouchableOpacity>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        />

        
      </View>
      {loading? (<View style={{flex:1, justifyContent:'center',alignItems:'center',backgroundColor:'#fff'}}><Text style={{color:'#329477',fontSize:20,fontFamily:''}}>Loading... pls wait for vimah's food....</Text></View>): 
      <View style={{marginTop:10, marginHorizontal:20}}>
      
      <FlatList
      data={container}
      renderItem={({item})=> <CategoryCard card={item.food}/>}
      horizontal
      contentContainerStyle={{paddingTop:20,}}
      showsHorizontalScrollIndicator={false}
      />
      </View>
    }
      
      
    </View>
  )
}

const styles =StyleSheet.create({
  mainCon:{
    height:'100%',
    backgroundColor:'#fff'
  },
  container:{
      marginHorizontal:20,
    
  },
   searchCon:{
    flexDirection:'row',
    padding:9,
    alignItems: 'center',
    borderWidth:1,
    borderColor:'#d9d9d9',
    borderRadius: 10,
    marginTop:10,
   
 },
 text:{
  marginVertical:20,
  fontSize:18,
  fontWeight:'600',
 },

 textInput:{
 fontSize:16,
 fontWeight:'700',
 marginLeft:'auto',
 marginHorizontal:5,
 paddingVertical:10,
 paddingHorizontal:18,
 color:'#329477',
 borderRadius:10,
 
 },
 texts:{
  backgroundColor:'black',
  width:100
 }
 
 
})
export default Homescreens;