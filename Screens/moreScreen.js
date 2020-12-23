import React, { useCallback, Component } from 'react';
import { StyleSheet, Text, View, Button, Alert, Linking } from 'react-native';

class MoreScreen extends Component {
  render() {
    const googleLink = "https://google.com";

    const OpenURLButton = ({ url, children }) => {
      const handlePress = useCallback(async () => {

        // Checking if the link is supported for links with custom URL scheme.
        const supported = await Linking.canOpenURL(url);

        if (supported) {
          // Opening the link with some app, if the URL scheme is "http" the web link should be opened
          // by some browser in the mobile
          await Linking.openURL(url);
        } else {
          Alert.alert(`Don't know how to open this URL: ${url}`);
        }
      }, [url]);

      return <Button title={children} onPress={handlePress} />;
    };

    return (
      <View style={{ padding: 50 }}>
        <Text>Recognized Health Organizations</Text>
        <Text></Text>
        <View>

          <Text>MInistry of Health</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingBottom: 20 }}>
            <Button title="Follow on FB" />
            <OpenURLButton url={googleLink}>
              On Web
            </OpenURLButton>
          </View>
          <Text>CDC</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingBottom: 20 }}>
            <Button title="Follow on FB" />
            <OpenURLButton url={googleLink}>On web URL</OpenURLButton>
          </View>
          <Text>UNICEF</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingBottom: 20 }}>
            <Button title="Follow on FB" />
            <OpenURLButton url={googleLink}>On web URL</OpenURLButton>
          </View>
          <Text>WHO</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingBottom: 20 }}>
            <Button title="Follow on FB" />
            <OpenURLButton url={googleLink}>On web URL</OpenURLButton>
          </View>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: "space-around", paddingTop: 40 }}>
          <Button title="Game and Quiz" />
          <Button title="Donate" />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: "space-around", paddingTop: 40 }}>
          <Button title="note" />
          <Button title="about" />
          <Button title="term" />
          <Button title="privacy" />
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

  input_style: {
    borderColor: 'black', borderBottomWidth: 1, padding: 10

  }
});

export default MoreScreen;
