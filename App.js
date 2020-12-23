import React from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MapView, { Marker } from 'react-native-maps';
import MoreScreen from "./Screens/moreScreen";
import HomeScreen from "./Screens/Home";
import InforScreen from "./Screens/InformScreen";
const Tab = createBottomTabNavigator();
function Location() {
  return (
    <View style={styles.container}>
      <MapView 
        initialRegion={{ latitude: 11.659928, longitude: 105.129624, latitudeDelta: 4.95, longitudeDelta: 4.95 }}
        style={styles.mapStyle}>
        <Marker
          coordinate={{
            latitude: 11.659928,
            longitude: 105.129624
          }}
          title={"Cambodia"}
          description={"Hello?"}
        />
      </MapView>


    </View>
  );
}
export default function App() {
  return (

    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Infor" component={InforScreen} />
        <Tab.Screen name="Location" component={Location} />
        <Tab.Screen name="More" component={MoreScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});