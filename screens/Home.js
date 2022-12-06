import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Background from './Background';
import {darkGreen, green} from './Constraints';
export default function Home(props) {
  return (
    <Background>
      <View style={styles.view}>
        <Text style={styles.text}>Let's start</Text>
        <Text style={styles.text1}>Shopping</Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            marginRight: 60,
            marginTop: 280,
          }}>
          <Text
            style={{
              width: 200,
              backgroundColor: 'white',
              color: 'grey',
              textAlign: 'center',
              fontSize: 28,
              paddingTop: 20,
              fontWeight: 'bold',
              borderRadius: 30,
            }}>
            Stop&Shop
          </Text>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Login')}
            style={{
              backgroundColor: '#ff914d',
              borderTopLeftRadius: 30,
              borderBottomRightRadius: 30,
              alignItems: 'center',
              width: 100,
              paddingVertical: 5,
              marginHorizontal: 10,
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 28,
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              Let's Start
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 64,
  },
  text1: {
    color: 'white',
    fontSize: 64,
    marginBottom: 60,
  },
  view: {marginHorizontal: 40, marginVertical: 100},
});
