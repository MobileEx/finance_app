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

export default function ResetPwdScreen({ navigation }) {

  const [subPage, setSubPage] = useState('send');
  const [email, setEmail] = useState();
  const [code, setCode] = useState();
  const [pwd, setPwd] = useState();
  const [cPwd, setCPwd] = useState();

  useEffect(() => {

  });

  return (
    <View style={styles.container}>
      <LinearGradient style={styles.back} colors={['#00BCF2', '#0700D4']} useAngle={true} angle={191.42} />
      <Image style={styles.signinBack} source={Images.signinBack} resizeMode='stretch' />
      <View style={styles.arrowIconRow}>
        <TouchableOpacity onPress={() => navigation.goBack(null)}>
          <EntypoIcon name="chevron-thin-left" style={styles.arrowIcon}></EntypoIcon>
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        {
          subPage == 'send' &&
          <>
            <TouchableOpacity style={styles.sendPwd} onPress={() => { }}>
              <Text style={styles.sendPwdTxt}>Send a password reset code</Text>
            </TouchableOpacity>
            <TextInput
              style={styles.inputBox}
              autoCapitalize='none'
              placeholder={'Enter email'}
              placeholderTextColor={Colors.greyColor}
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
            <TouchableOpacity style={styles.btn} onPress={()=>setSubPage('wait')}>
              <Text style={styles.btnTxt}>Send Code</Text>
            </TouchableOpacity>
          </>
        }
        {
          subPage == 'wait' &&
          <>
            <TouchableOpacity style={styles.sendPwd} onPress={() => { }}>
              <Text style={styles.sendPwdTxt}>Send a password reset code</Text>
            </TouchableOpacity>
            <TextInput
              style={styles.inputBox}
              autoCapitalize='none'
              placeholder={'Enter email'}
              placeholderTextColor={Colors.greyColor}
              value={email}
              editable={false}              
            />
            <TextInput
              style={styles.inputBox}
              autoCapitalize='none'
              placeholder={'Enter passcode'}
              placeholderTextColor={Colors.greyColor}
              value={code}
              onChangeText={(text) => setCode(text)}
            />
            <View style={styles.passcodeLine}>
              <Text style={styles.passcodeLabel}>Passcode not received? </Text>
              <TouchableOpacity onPress={() => { }}>
                <Text style={styles.passcodeTxt}>Resend Code</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.btn} onPress={()=>setSubPage('reset')}>
              <Text style={styles.btnTxt}>Reset</Text>
            </TouchableOpacity>
          </>
        }
        {
          subPage == 'reset' &&
          <>
            <TouchableOpacity style={styles.sendPwd} onPress={() => { }}>
              <Text style={styles.sendPwdTxt}>Enter new password</Text>
            </TouchableOpacity>
            <TextInput
              style={styles.inputBox}
              autoCapitalize='none'
              placeholder={'New password'}
              placeholderTextColor={Colors.greyColor}
              secureTextEntry={true}
              value={pwd}
              onChangeText={(text) => setPwd(text)}
            />
            <TextInput
              style={styles.inputBox}
              autoCapitalize='none'
              placeholder={'Confirm new password'}
              placeholderTextColor={Colors.greyColor}
              secureTextEntry={true}
              value={cPwd}
              onChangeText={(text) => setCPwd(text)}
            />            
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btnTxt}>Confirm</Text>
            </TouchableOpacity>
          </>
        }
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
    position: 'absolute',
    marginTop: normalize(40, 'height'),
    // borderWidth: 1
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
    color: Colors.whiteColor,
  },
  body: {
    width: '100%',
    height: height - normalize(250, 'height') - normalize(40, 'height'),
    position: 'absolute',
    backgroundColor: Colors.whiteColor,
    marginTop: normalize(250, 'height') + normalize(40, 'height'),
    // borderWidth: 2
  },
  sendPwd: {
    alignSelf: 'center',
    marginTop: normalize(20, 'height'),
  },
  sendPwdTxt: {
    fontSize: RFPercentage(2.5),
    color: Colors.blackColor
  },
  inputBox: {
    width: '80%',
    height: normalize(40, 'height'),
    alignSelf: 'center',
    marginTop: normalize(40, 'height'),
    borderBottomColor: Colors.blueToneColor,
    borderBottomWidth: normalize(2),
    fontSize: RFPercentage(2.5),
    //borderWidth: 1
  },
  passcodeLine: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: normalize(10, 'height')
  },
  passcodeLabel: {
    fontSize: RFPercentage(2),
    color: Colors.blackColor,
  },
  passcodeTxt: {
    fontSize: RFPercentage(2.5),
    color: Colors.blueToneColor,
  },

  btn: {
    width: '60%',
    height: normalize(40, 'height'),
    backgroundColor: Colors.blueToneColor,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: normalize(10),
    marginTop: normalize(60, 'height')
  },
  btnTxt: {
    fontSize: RFPercentage(3),
    color: Colors.whiteColor,
  },
});