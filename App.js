import { StyleSheet, View,TouchableOpacity } from 'react-native';
import Homescreen from './src/screens/Homescreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Homescreens from './src/screens/Homescreen2';
import Load from './src/screens/Load';
import Inprogress from './src/screens/Inprogress';
import SearchScreen from './src/screens/SearchScreen';
import SearchDetailScreen from './src/screens/SearchDetailScreen';

import Back from './src/component/Back';



const Stack = createStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Stack" component={Homescreen} options={{
        headerShown:false,
      }}/>
    
      <Stack.Screen name="Home" component={Homescreens}
      options={{
        headerTitleAlign:'center',
        headerBackTitleVisible:false,
        headerLeft: ()=> null,
        headerShadowVisible:false,
        headerStyle:{backgroundColor:'#fff'}
      }}
      
      />
      <Stack.Screen name="Load" component={Load} options={{
        headerShown:false,
      }}/>
      <Stack.Screen name="Search" component={SearchScreen} 
      options={{
        headerTitleAlign: 'center',
        title:'Search Recipes',
        headerLeft: ()=> {
          return(
           <Back/>
          )
        }
        

      }}/>
      <Stack.Screen name="details" component={SearchDetailScreen} 
      options={{
        headerTitleAlign: 'center',
        headerTitle:'',
        
      }}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
