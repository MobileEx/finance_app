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

export default function SigninScreen({ navigation }) {

  const [username, setUserName] = useState();
  const [pwd, setPwd] = useState();

  useEffect(() => {

  });

  return (
    <View style={styles.container}>
      <LinearGradient style={styles.back} colors={['#00BCF2', '#0700D4']} useAngle={true} angle={191.42} />
      <Image style={styles.signinBack} source={Images.signinBack} resizeMode='stretch' />
      <View style={styles.inputBoxBack}>
        <TextInput
          style={styles.inputBox}
          autoCapitalize='none'
          placeholder={'User name'}
          placeholderTextColor={Colors.greyColor}
          value={username}
          onChangeText={(text) => setUserName(text)}
        />
      </View>
      <View style={styles.inputBoxBack}>
        <TextInput
          style={styles.inputBox}
          autoCapitalize='none'
          placeholder={'Password'}
          placeholderTextColor={Colors.greyColor}
          secureTextEntry={true}
          value={pwd}
          onChangeText={(text) => setPwd(text)}
        />
      </View>
      <TouchableOpacity style={styles.btnLogin} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.loginTxt}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.forgotPwd} onPress={() => navigation.navigate('ResetPwd')}>
        <Text style={styles.forgotPwdTxt}>Forgot Password?</Text>
      </TouchableOpacity>
      <View style={styles.signupLine}>
        <Text style={styles.signupLabel}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.signupTxt}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
  },
  back: {
    width: '100%',
    height: '100%',
    position: 'absolute'
  },
  signinBack: {
    width: '100%',
    height: normalize(250, 'height'),
    marginTop: normalize(40, 'height'),
    // borderWidth: 1
  },
  inputBoxBack: {
    width: '75%',
    height: normalize(40, 'height'),
    backgroundColor: Colors.btnBackColor,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: normalize(20, 'height'),
    borderRadius: normalize(25)
  },
  inputBox: {
    width: '80%',
    height: normalize(40, 'height'),
    fontSize: RFPercentage(2.5),
    alignSelf: 'center',
    //borderWidth: 1
  },
  btnLogin: {
    width: '75%',
    height: normalize(40, 'height'),
    backgroundColor: Colors.whiteColor,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: normalize(20, 'height'),
    borderRadius: normalize(25)
  },
  namePwdTxt: {
    fontSize: RFPercentage(3),
    color: Colors.whiteColor,
  },
  loginTxt: {
    fontSize: RFPercentage(3),
    color: Colors.loginTxtColor,
  },
  forgotPwd: {
    alignItems: 'center',
    marginTop: normalize(20, 'height')
  },
  forgotPwdTxt: {
    fontSize: RFPercentage(2.5),
    color: Colors.whiteColor,
  },
  signupLine: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: normalize(100, 'height')
  },
  signupLabel: {
    fontSize: RFPercentage(2.5),
    color: 'rgba(254, 254, 254, 0.37)',
  },
  signupTxt: {
    fontSize: RFPercentage(2.8),
    color: Colors.whiteColor,
  },
});