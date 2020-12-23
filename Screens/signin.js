import React, { useState, Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default class sigin extends Component {
  render() {
    const [UserText, setUserText] = useState('')
    const [PhoneText, setPhoneText] = useState('0')

    const phone_input = (PhoneText) => {
      setPhoneText(PhoneText);
    }
    const user_input = (UserText) => {
      setUserText(UserText);
    };

    const sign_up = () => {
      console.log(UserText, PhoneText);
    }
    return (
      <View style={styles.container, { padding: 30 }}>
        <Text>Sign in</Text>
        <View style={{ padding: 20 }}>
          <Text>User name </Text>
          <TextInput placeholder="User name"
            style={styles.input_style}
            onChangeText={user_input}
            value={UserText} />
        </View>
        <View style={{ padding: 20 }}>
          <Text>Phone number</Text>
          <TextInput placeholder="Ex:012345678"
            style={styles.input_style}
            onChangeText={phone_input}
            value={PhoneText} />
        </View>
        <View>
          <Button title="Sign up" onPress={sign_up} />
          <Text>Create new account? </Text>
          <Button title='Sign in for your account' />
          <Text></Text>
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
