import { View, Text, ImageBackground ,StyleSheet,Image, TouchableOpacity} from 'react-native'
import React from 'react'
import rectangle from '../../assets/Rectangle6.png';
import chef from '../../assets/Frame2.png';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons'; 

const Homescreen = () => {
    const navigation= useNavigation();
  return (
    
    <ImageBackground
     source={rectangle} style={styles.container}>
    <View style={styles.img}>
     <Image
     source={chef}
     
     />
    </View>
     <View style={styles.text}>
     <Text  style={{color:'#fff',fontSize:50, textAlign:'center',}}>Get</Text>
     <Text  style={{color:'#fff',fontSize:50, textAlign:'center',}}> Cooking</Text>
     <Text style={{color:'#fff', fontSize:15,marginTop:13}}>Simple way to find tasty food by vimah</Text>
     </View>
     <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Load')}>
     <Text style={{color:'#fff',fontSize:15,
    }}>Start Cooking </Text>
     <AntDesign name="arrowright" size={24} color="#fff" />
     </TouchableOpacity>

    </ImageBackground>
     
  )
}
const styles= StyleSheet.create({
container:{
    flex:1,
    width:'100%',
    height:'100%',
    alignItems:'center',
    justifyContent:'center',
    position:'relative',
    
},
img:{
  position:'absolute',
  width:200,
  bottom:600,

},
text:{
    position:'absolute',
    bottom:350,
},
button:{
    position:'absolute',
    bottom:90,
    backgroundColor:'#329477',
    width:300,
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    flexDirection:'row',
    
}
})

export default Homescreen;