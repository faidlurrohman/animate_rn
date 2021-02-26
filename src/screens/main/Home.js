import React, {useContext, useState} from 'react';
import {View, Text, Button} from 'react-native';
import {AuthContext} from '../../config/firebase/AuthProvider';
import {color} from '../../css/Colors';

const Home = () => {
  const {logout} = useContext(AuthContext);
  return (
    <View>
      <Button onPress={() => logout()} title="Logout" color="#841584" />
    </View>
  );
};

export default Home;
