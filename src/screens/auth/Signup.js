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

import { Colors, Images } from '@constants';

export default function SignupScreen({ navigation }) {
  const [fullname, setFullname] = useState();
  const [email, setEmail] = useState();
  const [pwd, setPwd] = useState();
  const [cPwd, setCPwd] = useState();

  useEffect(() => {

  });

  return (
    <View style={styles.container}>
      <View style={styles.arrowIconRow}>
        <TouchableOpacity onPress={() => navigation.goBack(null)}>
          <EntypoIcon name="chevron-thin-left" style={styles.arrowIcon}></EntypoIcon>
        </TouchableOpacity>
      </View>
      <Text style={styles.titleTxt}>Create Account</Text>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.inputBox}
          autoFocus={true}
          autoCapitalize='none'
          placeholder={'First and Last Name'}
          placeholderTextColor={Colors.greyColor}
          value={fullname}
          onChangeText={(text) => setFullname(text)}
        />
        <TextInput
          style={styles.inputBox}
          autoCapitalize='none'
          placeholder={'Email'}
          placeholderTextColor={Colors.greyColor}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.inputBox}
          autoCapitalize='none'
          placeholder={'Password'}
          placeholderTextColor={Colors.greyColor}
          secureTextEntry={true}
          value={pwd}
          onChangeText={(text) => setPwd(text)}
        />
        <TextInput
          style={styles.inputBox}
          autoCapitalize='none'
          placeholder={'Confirm Password'}
          placeholderTextColor={Colors.greyColor}
          secureTextEntry={true}
          value={cPwd}
          onChangeText={(text) => setCPwd(text)}
        />
      </View>
      <TouchableOpacity style={styles.sendBtn}>
        <Text style={styles.sendBtnTxt}>Sign up</Text>
      </TouchableOpacity>
      <View style={styles.signinLine}>
        <Text style={styles.signinLabel}>Already have an account? </Text>
        <TouchableOpacity onPress={()=>navigation.navigate('Signin')}>
          <Text style={styles.signinTxt}>Log in</Text>
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
  arrowIconRow: {
    width: '90%',
    height: '5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    alignSelf: 'center',
    marginTop: normalize(50, 'height'),
    // borderWidth: 1
  },
  arrowIcon: {
    fontSize: RFPercentage(2.5),
    color: Colors.blueToneColor,
  },
  titleTxt: {
    fontSize: RFPercentage(4),
    color: Colors.blackColor,
    marginTop: normalize(20, 'height'),
    alignSelf: 'center'
  },
  formContainer: {
    width: '90%',
    // height: '50%',
    alignItems: 'center',
    alignSelf: 'center',
    // borderWidth: 1
  },
  inputBox: {
    width: '90%',
    height: normalize(40, 'height'),
    marginTop: normalize(40, 'height'),
    borderBottomColor: Colors.greyColor,
    borderBottomWidth: normalize(2),
    fontSize: RFPercentage(2.5),
    //borderWidth: 1
  },  
  sendBtn:{
    width: '60%',
    height: normalize(40, 'height'),
    backgroundColor: Colors.blueToneColor,
    justifyContent: 'center',    
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: normalize(10),
    marginTop: normalize(60, 'height')
  },
  sendBtnTxt:{
    fontSize: RFPercentage(3),
    color: Colors.whiteColor,        
  },
  signinLine:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: normalize(80, 'height')
  },
  signinLabel:{
    fontSize: RFPercentage(2),
    color: Colors.blackColor,
  },  
  signinTxt:{
    fontSize: RFPercentage(2.5),
    color: Colors.blueToneColor,
  },
});