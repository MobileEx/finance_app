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

export default function AddEditEnvelopScreen({ navigation, route }) {

  const [showMenu, setShowMenu] = useState(false);
  const [page, setPate] = useState(route.params.page);  

  const [selectedIndex, setSelectedIndex] = useState(0); //income/expense

  const [label, setLabel] = useState(route.params.item ? route.params.item.label : null);
  const [amount, setAmount] = useState(route.params.item ? route.params.item.amount : null);

  const sources = [
    { label: 'Income Envelop 1', value: 'Income Envelop 1' },
    { label: 'Income Envelop 2', value: 'Income Envelop 2' },
    { label: 'Income Envelop 3', value: 'Income Envelop 3' },
  ];
  const [source, setSource] = useState(route.params.item ? route.params.item.source : null);

  const frequencies = [
    { label: 'One Time', value: 'One Time' },
    { label: 'Weekly', value: 'Weekly' },
    { label: 'Every 2 Weeks', value: 'Every 2 Weeks' },
    { label: 'Monthly', value: 'Monthly' },
    { label: 'Quarterly', value: 'Quarterly' },
    { label: 'Bi-Annually', value: 'Bi-Annually' },
    { label: 'Annually', value: 'Annually' },
  ];
  const [frequency, setFrequency] = useState(route.params.item ? route.params.item.period : null);

  const [start, setStart] = useState(route.params.item ? route.params.item.start : null);
  const [end, setEnd] = useState(route.params.item ? route.params.item.end : null)

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

      <Text style={styles.titleTxt}>{page == 'new' ? 'New' : 'Edit'} Envelop</Text>

      {
        page === 'new' &&
        <View style={styles.optionLine}>
          <Text style={styles.labelTxt}>To be used for</Text>
          <View style={styles.optionCtl}>
            <SegmentedControlTab
              values={['Income', 'Expense']}
              selectedIndex={selectedIndex}
              onTabPress={(index) => setSelectedIndex(index)}
            />
          </View>
        </View>
      }

      <TextInput
        style={styles.inputBox}
        autoCapitalize='none'
        placeholder={'Label'}
        placeholderTextColor={Colors.greyColor}
        value={label}
        onChangeText={(text) => setLabel(text)}
      />
      <View style={styles.inputLine}>
        <Text style={styles.labelTxt}>Target Amount</Text>
        <TextInput
          style={styles.smallInputBox}
          autoCapitalize='none'
          placeholder={'$'}
          placeholderTextColor={Colors.greyColor}
          value={amount ? amount.toString() : amount}
          onChangeText={(text) => setAmount(text)}
        />
      </View>
      <View style={styles.inputLine}>
        <Text style={styles.labelTxt}>Source From</Text>
        <View style={styles.pickerPart}>
          <RNPickerSelect
            style={{ inputIOS: { fontSize: RFPercentage(2.2) } }}
            items={sources}
            value={source}            
            onValueChange={(value) => setSource(value)}
          />
        </View>
      </View>
      <View style={styles.inputLine}>
        <Text style={styles.labelTxt}>As Often As</Text>
        <View style={styles.pickerPart}>
          <RNPickerSelect
            style={{ inputIOS: { fontSize: RFPercentage(2.2) } }}
            items={frequencies}
            value={frequency}
            onValueChange={(value) => setFrequency(value)}
          />
        </View>
      </View>
      <View style={styles.inputLine}>
        <TextInput
          style={[styles.smallInputBox, { width: '45%' }]}
          autoCapitalize='none'
          placeholder={'Start'}
          placeholderTextColor={Colors.greyColor}
          value={start}
          onChangeText={(text) => setStart(text)}
        />
        <TextInput
          style={[styles.smallInputBox, { width: '45%' }]}
          autoCapitalize='none'
          placeholder={'end'}
          placeholderTextColor={Colors.greyColor}
          value={end}
          onChangeText={(text) => setEnd(text)}
        />
      </View>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnTxt}>Save</Text>
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
    alignSelf: 'center'
  },
  optionLine: {
    width: '90%',
    height: normalize(30, 'height'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: normalize(30, 'height'),
    // borderWidth: 1
  },
  labelTxt: {
    fontSize: RFPercentage(2.2),
    color: Colors.blackColor
  },
  optionCtl: {
    width: '40%',
    height: '100%',
    justifyContent: 'center',
    // borderWidth: 1
  },
  inputBox: {
    width: '90%',
    height: normalize(40, 'height'),
    marginTop: normalize(20, 'height'),
    borderBottomColor: Colors.greyColor,
    borderBottomWidth: normalize(2),
    fontSize: RFPercentage(2.5),
    alignSelf: 'center',
    //borderWidth: 1
  },
  inputLine: {
    width: '90%',
    height: normalize(30, 'height'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: normalize(20, 'height'),
    // borderWidth: 1
  },
  smallInputBox: {
    width: '60%',
    height: normalize(40, 'height'),
    borderBottomColor: Colors.greyColor,
    borderBottomWidth: normalize(2),
    fontSize: RFPercentage(2.5),
    alignSelf: 'center',
    //borderWidth: 1
  },
  pickerPart: {
    width: '60%',
    height: '100%',
    justifyContent: 'center',
    borderBottomColor: Colors.greyColor,
    borderBottomWidth: normalize(2),
    // borderWidth: 1
  },
  btn: {
    width: '75%',
    height: normalize(40, 'height'),
    backgroundColor: Colors.blueToneColor,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: normalize(30, 'height'),
    borderRadius: normalize(7)
  },
  btnTxt: {
    fontSize: RFPercentage(3),
    color: Colors.whiteColor,
  },
});