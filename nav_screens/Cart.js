import {View, Button, Text} from 'react-native';
import React from 'react';

const Cart = ({navigation}) => {
  return (
    <View>
      <Text>Cart</Text>
      <Button title="Click Here" onPress={() => alert('Button CLicked')} />
    </View>
  );
};

export default Cart;
