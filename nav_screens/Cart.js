import React, {Component} from 'react';
import {View, Text, Image, FlatList, StyleSheet, Alert} from 'react-native';

const shopping = [
  {
    Name: 'T-Shirt',
    ImageURl:
      'https://static-01.daraz.pk/p/7aea8e1934ecb25e7ad53044f903e5c0.jpg',
  },
  {
    Name: '  Full Seleves',
    ImageURl:
      'https://static-01.daraz.pk/p/918464678574966cf30e7bd244a23cc3.jpg',
  },
];

const Cart = () => {
  return (
    <View style={{backgroundColor: '#f5f5f5'}}>
      <FlatList
        data={shopping}
        renderItem={({item}) => (
          <View style={stylesx.GridViewBlockStyle}>
            <Image style={stylesx.imageStyle} source={{uri: item.ImageURl}} />
            <Text
              style={stylesx.GridViewInsideTextItemStyle}
              onPress={this.didClickOnCartItems.bind(this, item)}>
              {item.Name}{' '}
            </Text>
          </View>
        )}
      />
    </View>
  );
};
//Card Clicked Handler
didClickOnCartItems = item => {
  Alert.alert(
    'Stop & Shop',
    'Thank You 😉 ',
    [
      {
        text: '',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'Done 👍 ', onPress: () => console.log('OK Pressed')},
    ],
    item.Name,
  );
};

const stylesx = StyleSheet.create({
  GridViewBlockStyle: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    height: 200,
    width: 200,
    margin: 6,
    backgroundColor: '#c9e165',
    borderRadius: 30,
    borderBottomStartRadius: 50,
    borderTopStartRadius: 20,
    shadowOffset: 'red',
  },
  GridViewInsideTextItemStyle: {
    color: 'green',
    padding: 10,
    fontWeight: '500',
    fontSize: 18,
    justifyContent: 'center',
  },
  imageStyle: {
    marginTop: 15,
    padding: 5,
    height: 150,
    width: 150,
    borderRadius: 60 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Cart;
