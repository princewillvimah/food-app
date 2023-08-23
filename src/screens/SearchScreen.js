import { View, Text,TouchableOpacity,StyleSheet, TextInput,FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { AntDesign } from '@expo/vector-icons'; 
import Input from '../component/Input';
import { useNavigation } from '@react-navigation/native';3
import foodItem from '../component/foodItem.json';
import CategoryCards from '../component/CategoryCards';


const SearchScreen = () => {
  const [container,setContainer]=useState([]);
  const [masterdata,setMaterData]=useState([]);
  const [loading,setLoading]=useState(false)
  const [search , setSearch]=useState('')
    const numofColomun=2;
    const navigation=useNavigation();
    useEffect(()=>{
      const fetchData= async()=>{
        const url = 'https://tasty.p.rapidapi.com/recipes/list?from=0&size=200&tags=under_30_minutes';
        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': 'eed24ef393mshfed25bcafb6adabp1b7ba2jsn5a01549280d6',
            'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
          }
        };
  
        try {
          setLoading(true)
          const response = await fetch(url, options);
          const result = await response.json();
            setContainer(result.results);
            setMaterData(result.results);
            
        } catch (error) {
          console.error(error);
        }finally{
          setLoading(false)
        }
      }
      fetchData();
    },[])

   const searchFiltter=(text)=>{
  
      if (text){
        const newData= masterdata.filter((item)=> {
          const itemData= item.name ? item.name.toUpperCase(): ''.toUpperCase();
          const textData= text.toUpperCase();
          return itemData.indexOf(textData)>-1;
        });
        setContainer(newData);
        setSearch(text)
      }else{
        setContainer(masterdata);
        setSearch(text)
      }
   }
  return (
    
    <View style={styles.maincon}>
    {loading? (
      <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
      <ActivityIndicator  color={'red'} size={50}/>
      </View>
    ):
    <View style={{marginHorizontal:20}}>
    <View style={styles.searchCon} onPress={()=> navigation.navigate('search') }>
    <AntDesign name="search1" size={24} color="#d9d9d9" style={{marginHorizontal:10,}} />
    <TextInput placeholder='Search Recipe By Vimah' value={search} onChangeText={(text)=> searchFiltter(text)}/>
    </View>
    <FlatList
    data={container}
    renderItem={({item})=> <CategoryCards card={item}/>}
    contentContainerStyle={{paddingTop:20, marginVertical:20,paddingBottom:65}}
    numColumns={numofColomun}
    
    />
</View>
  }
    
    </View>
  )
}
const styles=StyleSheet.create({
    maincon:{
        backgroundColor:'#fff',
        height:'100%',
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
})

export default SearchScreen;