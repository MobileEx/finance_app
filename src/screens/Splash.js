import React, { useState, useEffect } from 'react';

import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
  Platform,
  Text,
  TextInput,
  FlatList
} from 'react-native';
import normalize from 'react-native-normalize';
import { RFPercentage } from 'react-native-responsive-fontsize';

import EntypoIcon from 'react-native-vector-icons/Entypo';
EntypoIcon.loadFont();

import LinearGradient from 'react-native-linear-gradient';

import { Colors, Images } from '@constants';

export default function EventScreen({ navigation }) {

  useEffect(() => {

  });

  setTimeout(()=>{
    navigation.navigate('Auth');
  }, 3000)

  return (
    <View style={styles.container}>
      <LinearGradient style={styles.back} colors={['#00BCF2', '#0078D4']} useAngle={true} angle={191.42}/>
      <Image style={styles.logoImg} source={Images.logo} resizeMode='stretch' />
      <Text style={styles.logoTxt}>Happy Saving</Text>
    </View>
  );
}

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    justifyContent: 'center',
    alignItems: 'center'
  },
  back:{
    width: '100%',
    height: '100%',
    position: 'absolute'
  },
  logoImg:{
    width: normalize(220),
    height: normalize(200),
    // borderWidth: 1
  },
  logoTxt:{
    fontSize: RFPercentage(4),
    fontWeight: '600',
    color: Colors.whiteColor,
    textAlign: 'center',
    marginTop: normalize(20, 'height')
  },
});