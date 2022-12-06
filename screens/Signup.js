import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Background from './Background';
import {darkGreen, green} from './Constraints';
import Field from './Field';
import Btn from './Btn';

export default function Signup(props) {
  return (
    <Background>
      <View style={{alignItems: 'center', width: 460}}>
        <Text
          style={{
            color: 'white',
            fontSize: 60,
            fontWeight: 'bold',
            marginVertical: 10,
            marginLeft: 60,
          }}>
          Register
        </Text>
        <View
          style={{
            backgroundColor: 'white',
            height: 700,
            width: 460,
            borderTopLeftRadius: 130,
            paddingTop: 100,
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 30,
              color: darkGreen,
              fontWeight: 'bold',
              marginRight: 70,
            }}>
            Register Your Account
          </Text>
          <Text
            style={{
              color: 'grey',
              fontSize: 20,
              fontWeight: 'bold',
              marginBottom: 20,
            }}>
            Welcome to Stop & Shop
          </Text>
          <Field
            placeholder="Email / Username"
            keyboardType={'email-address'}
          />
          <Field placeholder="Confirm-Password" secureTextEntry={true} />
          <Field placeholder="Password" secureTextEntry={true} />

          <Btn
            textColor="white"
            bgColor={darkGreen}
            btnLabel="Signup"
            btnRight={70}
            Press={() => {
              alert('Account Created');
              props.navigation.navigate('Login');
            }}
          />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              marginRight: 60,
              marginTop: 20,
            }}>
            <Text
              style={{
                color: green,
                fontWeight: 'bold',
                fontSize: 16,
              }}>
              Already have an account ?
            </Text>
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('Login');
              }}>
              <Text
                style={{
                  color: darkGreen,
                  fontWeight: 'bold',
                  fontSize: 16,
                  marginLeft: 2,
                }}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
}
