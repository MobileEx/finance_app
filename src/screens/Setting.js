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
import SegmentedControlTab from 'react-native-segmented-control-tab';
import RNPickerSelect from 'react-native-picker-select';

import { Colors, Images } from '@constants';
import { SideMenu } from '@components';

export default function SettingScreen({ navigation, route }) {

  const [showMenu, setShowMenu] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0); //on/off
  const [start, setStart] = useState();
  const periods = [
    { label: '6 months', value: '6 months' },
    { label: '1 year', value: '1 year' },
    { label: '18 months', value: '18 months' },
    { label: '2 years', value: '2 years' },
    { label: '5 years', value: '5 years' },
    { label: 'Custom period', value: 'Custom period' },
  ]
  const [period, setPeriod] = useState(periods[3].value);
  const ranges = [
    { label: '1 week', value: '1 week' },
    { label: '2 weeks', value: '2 weeks' },
    { label: '3 weeks', value: '3 weeks' },
    { label: '1 month', value: '1 month' },
    { label: 'Custom period', value: 'Custom period' },
  ]
  const [range, setRange] = useState(ranges[0].value);

  useEffect(() => {

  });

  function toggleMenu(showMenu) {
    setShowMenu(!showMenu);
  }

  function goPage(page) {
    setShowMenu(false);
    if (page == 'Logout') {

    }
    else {
      navigation.navigate(page);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.menuIconRow}>
        <TouchableOpacity onPress={() => navigation.goBack(null)}>
          <EntypoIcon name="chevron-thin-left" style={styles.arrowIcon}></EntypoIcon>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleMenu(showMenu)}>
          <Image style={styles.iconMenuImg} source={Images.iconMenu} resizeMode='contain' />
        </TouchableOpacity>
      </View>
      {
        showMenu &&
        <SideMenu showMenu={showMenu} goPage={goPage} toggleMenu={toggleMenu} />
      }

      <Text style={styles.titleTxt}>Setting</Text>

      <Text style={styles.labelTxt}>Enter Displaying Start Date</Text>
      <TextInput
        style={styles.inputBox}
        autoCapitalize='none'
        placeholder={'2018-11-01'}
        placeholderTextColor={Colors.greyColor}
        value={start}
        onChangeText={(text) => setStart(text)}
      />

      <Text style={styles.labelTxt}>Enter Displaying Period</Text>
      <View style={styles.pickerPart}>
        <RNPickerSelect
          style={{ inputIOS: { fontSize: RFPercentage(2.2) } }}
          items={periods}
          value={period}
          onValueChange={(value) => setPeriod(value)}
        />
      </View>

      <Text style={styles.labelTxt}>Enter Data Range</Text>
      <View style={styles.pickerPart}>
        <RNPickerSelect
          style={{ inputIOS: { fontSize: RFPercentage(2.2) } }}
          items={ranges}
          value={range}
          onValueChange={(value) => setRange(value)}
        />
      </View>
      
      <View style={styles.alertLine}>
        <Text style={styles.alertTxt}>Alerts and Notification</Text>
        <View style={styles.optionCtl}>
          <SegmentedControlTab
            values={['On', 'Off']}
            selectedIndex={selectedIndex}
            onTabPress={(index) => setSelectedIndex(index)}
          />
        </View>
      </View>

      <TouchableOpacity style={styles.saveBtn}>
        <Text style={styles.saveBtnTxt}>Save</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.closeBtn}>
        <Text style={styles.closeBtnTxt}>Close Account</Text>
      </TouchableOpacity>
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
  menuIconRow: {
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
  iconMenuImg: {
    width: normalize(20),
    height: normalize(20)
  },
  titleTxt: {
    fontSize: RFPercentage(2.7),
    color: Colors.blackColor,
    alignSelf: 'center',
    marginTop: normalize(20, 'height')
  },
  labelTxt: {
    width: '80%',
    fontSize: RFPercentage(2.5),
    color: Colors.greyColor,
    alignSelf: 'center',
    marginTop: normalize(30, 'height'),
  },
  inputBox: {
    width: '80%',
    height: normalize(40, 'height'),
    marginTop: normalize(10, 'height'),
    borderBottomColor: Colors.greyColor,
    borderBottomWidth: normalize(2),
    fontSize: RFPercentage(2.5),
    alignSelf: 'center',
    //borderWidth: 1
  },
  pickerPart: {
    width: '80%',
    height: normalize(30, 'height'),
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: normalize(10, 'height'),
    borderBottomColor: Colors.greyColor,
    borderBottomWidth: normalize(2),
    // borderWidth: 1
  },
  alertLine: {
    width: '80%',
    height: normalize(30, 'height'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: normalize(30, 'height'),
    // borderWidth: 1
  },
  alertTxt: {
    fontSize: RFPercentage(2.2),
    color: Colors.blackColor
  },
  optionCtl: {
    width: '30%',
    height: '100%',
    justifyContent: 'center',
    // borderWidth: 1
  },
  saveBtn: {
    width: '75%',
    height: normalize(40, 'height'),
    backgroundColor: Colors.blueToneColor,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: normalize(30, 'height'),
    borderRadius: normalize(7)
  },
  saveBtnTxt: {
    fontSize: RFPercentage(3),
    color: Colors.whiteColor,
  },
  closeBtn: {
    width: '75%',
    height: normalize(40, 'height'),    
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: normalize(30, 'height'),
    borderRadius: normalize(7),
    borderWidth: 1
  },
  closeBtnTxt: {
    fontSize: RFPercentage(3),
    color: Colors.blackColor,
  },
});