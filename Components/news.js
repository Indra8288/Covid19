import React, {useState} from 'react';
import { StyleSheet, Text, View, Button,TouchableOpacity } from 'react-native';

class News extends React.Component {
    render(){
  return (
  <View > 
    
        <Text>Cambodia confirms nearly 100 new cases of covid 19 in New york</Text>
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

export default News;