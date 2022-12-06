import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Background from './Background';
import {darkGreen, green} from './Constraints';
import Field from './Field';
import Btn from './Btn';

export default function Login(props) {
  return (
    <Background>
      <View style={{alignItems: 'center', width: 460}}>
        <Text
          style={{
            color: 'white',
            fontSize: 64,
            fontWeight: 'bold',
            marginVertical: 10,
          }}>
          Login
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
              fontSize: 40,
              color: darkGreen,
              fontWeight: 'bold',
              marginRight: 70,
            }}>
            Welcome Back
          </Text>
          <Text
            style={{
              color: 'grey',
              fontSize: 20,
              fontWeight: 'bold',
              marginBottom: 20,
            }}>
            Login to your account
          </Text>
          <Field
            placeholder="Email / Username"
            keyboardType={'email-address'}
          />
          <Field placeholder="Password" secureTextEntry={true} />
          <View
            style={{
              alignItems: 'flex-end',
              width: '60%',
              paddingRight: 16,
              marginBottom: 40,
            }}>
            <Text style={{color: darkGreen, fontWeight: 'bold', fontSize: 16}}>
              Forget Password?
            </Text>
          </View>
          <Btn
            textColor="white"
            bgColor={darkGreen}
            btnLabel="Login"
            btnRight={70}
            Press={() => alert('Login')}></Btn>
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
              Don't have an account ?
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Signup')}>
              <Text
                style={{
                  color: darkGreen,
                  fontWeight: 'bold',
                  fontSize: 16,
                }}>
                SignUp
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
}
