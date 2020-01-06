import React, { Component } from 'react';
import {
  Alert,
  Text,
  TextInput,
  View,
  TouchableOpacity
} from 'react-native';
import firebaseApp from './firebaseConfig.js';
import styles from './styles.js';

class SignUp extends Component {
  static navigationOptions = {
    title: 'SignUp',
    header: null
  };

  constructor(props) {
    super(props)
    this.state = {
      userEmail: '',
      userPassword: ''
    }
  }

  async signUp() {
    if (this.state.userEmail != '' && this.state.userPassword != '') {
      try {
        await firebaseApp.auth().createUserWithEmailAndPassword(this.state.userEmail, this.state.userPassword);
        console.log(this.state.userEmail + ' signed up');
        this.props.navigation.navigate('Rooms');
      } catch(error) {
        console.log(error.toString());
        Alert.alert(error.toString());
      }
    }
    else {
      Alert.alert(
        'Invalid Sign Up',
        'The Email and Password fields cannot be blank.',
        [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        { cancelable: false }
      )
    }
  }

  goToSignIn() {
   this.props.navigation.goBack();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.appName}>{`GroupChat`}</Text>
        <Text style={styles.greeting}>{`Sign up to get started.`}</Text>

        <View style={styles.form}>
            <View>
                <Text style={styles.inputTitle}>Email Address</Text>
                <TextInput
                    style={styles.input}
                    autoCapitalize="none"
                    onChangeText={(text) => this.setState({ userEmail: text })}
                    value={this.state.userEmail}
                ></TextInput>
            </View>

            <View style={{ marginTop: 32 }}>
                <Text style={styles.inputTitle}>Password</Text>
                <TextInput
                    style={styles.input}
                    secureTextEntry
                    autoCapitalize="none"
                    onChangeText={(text) => this.setState({ userPassword: text })}
                    value={this.state.userPassword}
                ></TextInput>
            </View>
        </View>

        <TouchableOpacity style={styles.button} onPress={this.signUp.bind(this)}>
            <Text style={{ color: "#FFF", fontWeight: "500" }}>Sign up</Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={{ alignSelf: "center", marginTop: 32 }}
            onPress={() => this.goToSignIn()}>
            <Text style={{ color: "#414959", fontSize: 13 }}>
                Have an account? <Text style={{ fontWeight: "500", color: "#4468e9" }}>Log in</Text>
            </Text>
        </TouchableOpacity>
    </View>
    )
  }
}

export default SignUp;
