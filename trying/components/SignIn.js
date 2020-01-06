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

class SignIn extends Component {
  static navigationOptions = {
    title: 'SignIn',
    header: null
  };

  constructor(props) {
    super(props)
    this.state = {
      userEmail: '',
      userPassword: ''
    }
  }

  async signIn() {
    if (this.state.userEmail != '' && this.state.userPassword != '') {
      try {
        await firebaseApp.auth().signInWithEmailAndPassword(this.state.userEmail, this.state.userPassword);
        console.log(this.state.userEmail + ' signed in');
        this.props.navigation.navigate('Rooms');
      } catch(error) {
        console.log(error.toString());
        Alert.alert(error.toString());
      }
    }
    else {
      Alert.alert(
        'Invalid Sign In',
        'The Email and Password fields cannot be blank.',
        [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        { cancelable: false }
      )
    }
  }

  goToSignUp() {
    this.props.navigation.navigate('SignUp');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.appName}>{`GroupChat`}</Text>
        <Text style={styles.greeting}>{`Welcome!`}</Text>

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

        <TouchableOpacity style={styles.button} onPress={this.signIn.bind(this)}>
            <Text style={{ color: "#FFF", fontWeight: "500" }}>Log in</Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={{ alignSelf: "center", marginTop: 32 }}
            onPress={() => this.goToSignUp()}>
            <Text style={{ color: "#414959", fontSize: 13 }}>
                New to GroupChat? <Text style={{ fontWeight: "500", color: "#4468e9" }}>Sign Up</Text>
            </Text>
        </TouchableOpacity>
    </View>
    )
  }
}

export default SignIn;
