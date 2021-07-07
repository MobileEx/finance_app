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
import { SideMenu } from '@components';

export default function HomeScreen({ navigation }) {

  const [showMenu, setShowMenu] = useState(false);
  const [listData, setListData] = useState([
    {
      date: 'November 1, 2018',
      amount: 74.81
    },
    {
      date: 'November 6, 2018',
      amount: 80.81
    },
    {
      date: 'November 9, 2018',
      amount: 74.22
    },
    {
      date: 'November 15, 2018',
      amount: 54.41
    },
    {
      date: 'November 20, 2018',
      amount: 79.21
    },
    {
      date: 'November 26, 2018',
      amount: 55.67
    },
    {
      date: 'December 12, 2018',
      amount: 45.98
    },
    {
      date: 'December 14, 2018',
      amount: 67.91
    },
    {
      date: 'December 20, 2018',
      amount: 45.66
    },
  ])

  useEffect(() => {

  });

  function toggleMenu(showMenu) {
    setShowMenu(!showMenu);
  }

  function goPage(page) {
    toggleMenu(showMenu);
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

      <Text style={styles.titleTxt}>Welcome back, Test</Text>
      <Text style={styles.tipTxt}>Your financial situation is looking good!</Text>
      <Text style={styles.dateScopeTxt}>11/1/2018 - 10/31/2020</Text>
      <ScrollView style={styles.body}>
        {
          listData.map((item, index) => (
            <TouchableOpacity style={styles.item} key={index}>
              <View style={styles.itemLeft}>
                <View style={styles.iconBack}>
                  <Image style={styles.iconReportImg} source={Images.iconReport} resizeMode='contain' />
                </View>
              </View>
              <View style={styles.itemRight}>
                <Text style={styles.dateTxt}>{item.date}</Text>
                <Text style={styles.amountTxt}>$ {item.amount}</Text>
              </View>
            </TouchableOpacity>
          ))
        }
      </ScrollView>      
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
    fontSize: RFPercentage(3),
    color: Colors.blackColor,
    alignSelf: 'center'
  },
  tipTxt: {
    fontSize: RFPercentage(2),
    color: Colors.greyColor,
    alignSelf: 'center',
    marginTop: normalize(5, 'height')
  },
  dateScopeTxt: {
    fontSize: RFPercentage(2.1),
    color: Colors.blackColor,
    alignSelf: 'center',
    marginTop: normalize(15, 'height')
  },
  body: {
    width: '100%',
    height: '76%',
    backgroundColor: Colors.greyWeakColor,
    marginTop: normalize(5, 'height'),
    marginBottom: normalize(10, 'height'),
    // borderWidth: 3
  },
  item: {
    width: '95%',
    height: normalize(75, 'height'),
    backgroundColor: Colors.homeItemBackColor,
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: normalize(5, 'height'),
    borderRadius: normalize(10)
  },
  itemLeft: {
    width: '30%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 1
  },
  iconBack: {
    width: '60%',
    height: '60%',
    backgroundColor: Colors.greyWeakColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: normalize(10)
  },
  iconReportImg: {
    width: normalize(20),
    height: normalize(20)
  },
  itemRight: {
    width: '70%',
    height: '100%',
    justifyContent: 'center',
    // borderWidth: 1
  },
  dateTxt: {
    fontSize: RFPercentage(2.2),
    color: Colors.whiteColor
  },
  amountTxt: {
    fontSize: RFPercentage(2),
    color: Colors.greyWeakColor,
    marginTop: normalize(10, 'height')
  },  
});