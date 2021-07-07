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
import PropTypes from 'prop-types';

import normalize from 'react-native-normalize';
import { RFPercentage } from 'react-native-responsive-fontsize';

import BlurOverlay, { closeOverlay, openOverlay } from 'react-native-blur-overlay';
import LinearGradient from 'react-native-linear-gradient';

import { Colors, Images } from '@constants';

export default function SideMenu({ showMenu, goPage, toggleMenu }) {
  
  useEffect(() => {
    if (showMenu) openOverlay();
    else closeOverlay();
  }); 

  renderSideMenu = () => {
    return (
      <View style={styles.sideMenu}>
        <LinearGradient style={styles.back} colors={['#0078D4', '#00BCF2']} useAngle={true} angle={360} />
        {
          [
            { name: 'Home', img: Images.iconHome },
            { name: 'Envelop', img: Images.iconCash },
            { name: 'Report', img: Images.iconReport },
            { name: 'Setting', img: Images.iconSetting },
            { name: 'Logout', img: Images.iconLogout },
          ].map((item, index) => (
            <View key={index}>
              <TouchableOpacity style={[styles.item, item.name == 'Home' ? { marginTop: normalize(60, 'height') } : null]} onPress={() => goPage(item.name)}>
                <View style={styles.itemLeft}>
                  <View style={styles.iconBack}>
                    <Image style={styles.iconImg} source={item.img} resizeMode='contain' />
                  </View>
                </View>
                <View style={styles.itemRight}>
                  <Text style={styles.itemTxt}>{item.name}</Text>
                </View>
              </TouchableOpacity>
              {
                (item.name == 'Home' || item.name == 'Envelop' || item.name == 'Report') &&
                <View style={{ width: '80%', alignSelf: 'center', borderBottomColor: Colors.whiteColor, borderBottomWidth: normalize(1) }} />
              }
            </View>
          ))
        }
      </View>
    );
  }

  return (
    <BlurOverlay
      radius={50}
      downsampling={1}
      brightness={-200}
      onPress={() => {        
        closeOverlay();
        toggleMenu(showMenu);
      }}
      customStyles={{ alignItems: 'center', justifyContent: 'center' }}
      blurStyle="dark"
      children={renderSideMenu()}
    />
  )
}

const styles = StyleSheet.create({
  sideMenu: {
    width: '75%',
    height: '100%',
    alignSelf: 'flex-end',
  },
  back: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    borderTopLeftRadius: normalize(30),
    borderBottomLeftRadius: normalize(30),
  },
  item: {
    width: '95%',
    height: normalize(60, 'height'),
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: normalize(30, 'height'),
    borderRadius: normalize(10),
    // borderWidth: 1
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
  iconImg: {
    width: normalize(20),
    height: normalize(20)
  },
  itemRight: {
    width: '70%',
    height: '100%',
    justifyContent: 'center',
    // borderWidth: 1
  },
  itemTxt: {
    fontSize: RFPercentage(2.2),
    color: Colors.whiteColor
  },  
});

SideMenu.propTypes = {  
  showMenu: PropTypes.bool.isRequired,
  goPage: PropTypes.func.isRequired,
  toggleMenu: PropTypes.func.isRequired
};
