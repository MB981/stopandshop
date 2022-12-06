import {View, Text, TextInput} from 'react-native';
import React from 'react';
import {darkGreen} from './Constraints';

export default function Field(props) {
  return (
    <TextInput
      {...props}
      style={{
        borderRadius: 100,
        color: darkGreen,
        marginRight: 70,
        width: '70%',
        paddingHorizontal: 10,
        backgroundColor: 'rgb(220,220,220)',
        marginVertical: 20,
      }}
      placeholderTextColor={darkGreen}></TextInput>
  );
}
