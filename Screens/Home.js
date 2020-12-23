import React, {Component} from 'react';
import { StyleSheet, Text, View  } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


class HomeScreen extends Component {
    render(){
      const Tab1 = createMaterialTopTabNavigator();
      function Worldscreen() {
        return (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>World information</Text>
          </View>
        );
      }
      function HomeCambodia() {
        return (
          <View style = {{padding : 30}}>
          <Text>Covid-19 Cambodia Cases</Text>
          <Text></Text>
         <View style ={{flexDirection: 'row', justifyContent: 'space-between',
          position: 'absolute',
          width: 356,
          height: 132,
          left: 29,
          top: 240,
          background: '#FFFFFF' }}>
            <View>
              <Text>Infected</Text>
              <Text>189</Text>
              <Text>98</Text>
            </View>
            <View>
              <Text>Recovery</Text>
              <Text>189</Text>
              <Text>98</Text>
            </View>
            <View>
              <Text>Death</Text>
              <Text>189</Text>
              <Text>98</Text>
            </View>
         </View>
        </View>
        );
      }
      
            return (
              <Tab1.Navigator>
              <Tab1.Screen name = "Cambo" component ={HomeCambodia}/>
              <Tab1.Screen name = "World" component = {Worldscreen}/>
            </Tab1.Navigator>
            );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input_style:{borderColor: 'black', borderBottomWidth: 1,padding: 10

  }
});

export default HomeScreen;
