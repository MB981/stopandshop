import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
export default function Btn({
  bgColor,
  btnLabel,
  textColor,
  Press,
  btnRight,
  width,
}) {
  return (
    <TouchableOpacity
      onPress={Press}
      style={{
        backgroundColor: bgColor,
        borderRadius: 100,
        alignItems: 'center',
        width: 300,
        paddingVertical: 5,
        marginBottom: 10,
        marginRight: btnRight,
      }}>
      <Text
        style={{
          color: textColor,
          fontSize: 28,
          fontWeight: 'bold',
        }}>
        {btnLabel}
      </Text>
    </TouchableOpacity>
  );
}
