import {View, Button} from 'react-native';
import React from 'react';

const Profile = ({navigation}) => {
  return (
    <View>
      <Button title="Click Here" onPress={() => alert('Button CLicked')} />
    </View>
  );
};

export default Profile;
