import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput,TouchableOpacity } from 'react-native';

class TopBar extends React.Component {
    render(){
  return (
  <View style ={{flexDirection: "row", justifyContent: "space-around"}}> 
    <View>
      <Text>CovidCam</Text>
    </View>
    <View style ={{flexDirection: "row", justifyContent: "space-between"}} >
      <Button title= "Note"/>
      <Button title = "Noti" />
      <Button title = "Emer"/>
      </View>
  </View>
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
});

export default TopBar;