/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Muhammad Moeez</Text>

      <Text style={styles.des}>Description</Text>
      <Text style={styles.desContainer}>
        Hi👋. My name is Moeez. I am 21 years old. I am studying for a BSCS at
        the Superior University. Currently enrolled in 7th semester. This is my
        first react-native app. My Mentor is Sir Abid Jamil.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    display: 'flex',
    justifyContent: 'center',
  },
  name: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
  },
  image: {
    marginTop: 30,
    borderRadius: 360,
    width: 270,
    height: 270,
    alignSelf: 'center',
  },
  des: {
    marginTop: 30,
    color: 'black',
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 30,
    marginLeft: 10,
  },
  desContainer: {
    marginTop: 20,
    backgroundColor: 'beige',
    borderWidth: 2,
    marginLeft: 20,
    marginRight: 20,
    fontSize: 16,
    borderColor: 'blue',
    padding: 15,
    display: 'flex',
    fontSize: 18,
  },
});

export default App;
