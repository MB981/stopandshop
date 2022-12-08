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

  {
    Name: 'Track-Suit',
    ImageURl:
      'https://static-01.daraz.pk/p/71267b7ff2f53c8bf1a2e56006d21040.jpg',
  },
  {
    Name: 'Marvel',
    ImageURl:
      'https://static-01.daraz.pk/p/1d3dd6d89f1e37a3fd9371eac3874315.jpg',
  },
  {
    Name: 'Floret',
    ImageURl:
      'https://static-01.daraz.pk/p/1b0d800e85e49942d74e4ae314dbd5ca.jpg',
  },

  {
    Name: 'Stand-Holder',
    ImageURl:
      'https://static-01.daraz.pk/p/3e997ebe2bd6d8efaf499214d6be8956.png',
  },
  {
    Name: 'Tapal',
    ImageURl:
      'https://static-01.daraz.pk/p/833bfeea054515da5da104884b7b0823.jpg',
  },
  {
    Name: 'TWS-Bluetooth',
    ImageURl:
      'https://static-01.daraz.pk/p/40872c1ee985962ebfe0feaa0e276dc0.jpg',
  },
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

  {
    Name: 'Track-Suit',
    ImageURl:
      'https://static-01.daraz.pk/p/71267b7ff2f53c8bf1a2e56006d21040.jpg',
  },
  {
    Name: 'Marvel',
    ImageURl:
      'https://static-01.daraz.pk/p/1d3dd6d89f1e37a3fd9371eac3874315.jpg',
  },
  {
    Name: 'Floret',
    ImageURl:
      'https://static-01.daraz.pk/p/1b0d800e85e49942d74e4ae314dbd5ca.jpg',
  },

  {
    Name: 'Stand-Holder',
    ImageURl:
      'https://static-01.daraz.pk/p/3e997ebe2bd6d8efaf499214d6be8956.png',
  },
  {
    Name: 'Tapal',
    ImageURl:
      'https://static-01.daraz.pk/p/833bfeea054515da5da104884b7b0823.jpg',
  },
  {
    Name: 'TWS-Bluetooth',
    ImageURl:
      'https://static-01.daraz.pk/p/40872c1ee985962ebfe0feaa0e276dc0.jpg',
  },
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

  {
    Name: 'Track-Suit',
    ImageURl:
      'https://static-01.daraz.pk/p/71267b7ff2f53c8bf1a2e56006d21040.jpg',
  },
  {
    Name: 'Marvel',
    ImageURl:
      'https://static-01.daraz.pk/p/1d3dd6d89f1e37a3fd9371eac3874315.jpg',
  },
  {
    Name: 'Floret',
    ImageURl:
      'https://static-01.daraz.pk/p/1b0d800e85e49942d74e4ae314dbd5ca.jpg',
  },

  {
    Name: 'Stand-Holder',
    ImageURl:
      'https://static-01.daraz.pk/p/3e997ebe2bd6d8efaf499214d6be8956.png',
  },
  {
    Name: 'Tapal',
    ImageURl:
      'https://static-01.daraz.pk/p/833bfeea054515da5da104884b7b0823.jpg',
  },
  {
    Name: 'TWS-Bluetooth',
    ImageURl:
      'https://static-01.daraz.pk/p/40872c1ee985962ebfe0feaa0e276dc0.jpg',
  },
];

const Home = ({navigation}) => {
  return (
    <View style={{backgroundColor: '#f5f5f5'}}>
      <FlatList
        data={shopping}
        renderItem={({item}) => (
          <View style={stylesx.GridViewBlockStyle}>
            <Image style={stylesx.imageStyle} source={{uri: item.ImageURl}} />
            <Text
              style={stylesx.GridViewInsideTextItemStyle}
              onPress={this.didClickOnRowItems.bind(this, item)}>
              {item.Name}{' '}
            </Text>
          </View>
        )}
        numColumns={2}
      />
    </View>
  );
};

//Handdle rowItemClick Event
didClickOnRowItems = item => {
  Alert.alert('Add to cart ', item.Name);
};

const stylesx = StyleSheet.create({
  GridViewBlockStyle: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    height: 200,
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
export default Home;
