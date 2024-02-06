import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, TouchableOpacity, Text, TextInput} from 'react-native';
import React from 'react';

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("./src/assets/images.png")}/>
      <Image style={styles.user} source={require("./src/assets/user.png")}/>
      <TextInput style={styles.inputNome} placeholder="Nome de usuário"/>
      <TextInput style={styles.inputSenha} placeholder="Senha"/>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  logo: {
    width: 400,
    height: 105,
    marginTop: 80
  },
  user: {
    marginTop: 200,
    width: 200,
    height: 200
  },
  inputNome: {
    marginTop: 100,
    width: 400,
    height: 80,
    padding: 5,
    fontSize: 25,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#adb5bd'
  },
  inputSenha: {
    marginTop: 20,
    width: 400,
    height: 80,
    fontSize: 25,
    padding: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#adb5bd'
  },
  button: {
    marginTop: 40,
    width: 200,
    height: 60,
    backgroundColor: '#0496ff',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
});
