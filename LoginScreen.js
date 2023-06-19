import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';


const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

    const handleLoginPress = () => {
      // Navigasi ke halaman HomeScreen
      navigation.navigate('Home');
    };
  
    const handleRegisterPress = () => {
      // Navigasi ke halaman RegisterScreen
      navigation.navigate('Register');
    };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.logo}>MovieVerse</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Email"
            placeholderTextColor="#888"
            onChangeText={text => setEmail(text)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Password"
            placeholderTextColor="#888"
            secureTextEntry
            onChangeText={text => setPassword(text)}
          />
        </View>
        <TouchableOpacity style={styles.loginButton} onPress={handleLoginPress}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.registerTextButton} onPress={handleRegisterPress}>
          <Text style={styles.registerText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  contentContainer: {
    width: '80%',
    backgroundColor: '#f9f9f9',
    padding: 16,
    borderRadius: 8,
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 28,
    color: '#000',
    marginBottom: 50,
    textAlign: 'center',
  },
  inputView: {
    width: '100%',
    borderBottomColor: '#888',
    borderBottomWidth: 1,
    marginBottom: 20,
  },
  inputText: {
    height: 40,
    fontSize: 16,
    color: '#000',
  },
  loginButton: {
    width: '100%',
    backgroundColor: '#f4511e',
    borderRadius: 8,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  registerText: {
    color: '#f4511e',
    fontSize: 16,
    alignSelf: 'center',
  },
});

export default LoginScreen;
