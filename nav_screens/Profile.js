import {View, Button, Text, Image} from 'react-native';
import React from 'react';

const Profile = props => {
  return (
    <View
      style={{
        backgroundColor: 'orange',
        height: 180,
        shadowColor: 'green',
        shadowOffset: {width: 0, height: 30},
      }}>
      <Image
        style={{height: 100, width: 100, margin: 10, borderRadius: 360}}
        source={require('../screens/assets/Moeez.png')}
      />
      <Text
        style={{
          margin: 10,
          fontSize: 20,
          color: 'white',
          fontWeight: '900',
          marginTop: 5,
        }}>
        Muhammad Moeez
      </Text>
      <Text
        style={{
          margin: 10,
          marginLeft: 20,
          fontSize: 16,
          color: 'orange',
          fontWeight: '500',
          marginTop: 90,
        }}>
        🏠 Home
      </Text>
      <Text
        style={{
          margin: 10,
          marginLeft: 20,
          fontSize: 16,
          color: 'orange',
          fontWeight: '500',
          marginTop: 20,
        }}>
        🛒 Cart
      </Text>

      <Text
        style={{
          margin: 10,
          marginLeft: 20,
          fontSize: 16,
          color: 'orange',
          fontWeight: '500',
          marginTop: 20,
        }}>
        ___________________________________________
      </Text>

      <Text
        style={{
          margin: 10,
          marginLeft: 20,
          fontSize: 16,
          color: 'orange',
          fontWeight: '500',
          marginTop: 20,
        }}
        onPress={() => props.navigation.navigate('LetStart')}>
        🚪 Logut
      </Text>
    </View>
  );
};

export default Profile;
