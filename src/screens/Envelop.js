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
import Modal from 'react-native-modal';

import { Colors, Images } from '@constants';
import { SideMenu } from '@components';

export default function EnvelopScreen({ navigation }) {

  const [showMenu, setShowMenu] = useState(false);
  const [listData, setListData] = useState([
    {
      label: 'ATT Wireless',
      amount: 74.81,
      period: 'Monthly',
      toBeUsed: 'Income',
      source: 'Income Envelop 1',
      start: '11/01/2018',
      end: '12/10/2018'
    },
    {
      label: 'Acme 05-31-2019',
      amount: 80.81,
      period: 'Every 2 Weeks',
      toBeUsed: 'Expense',
      source: 'Income Envelop 2',
      start: '11/01/2018',
      end: '12/10/2018'
    },
    {
      label: 'Acme Corp',
      amount: 74.22,
      period: 'Every 2 Weeks',
      toBeUsed: 'Income',
      source: 'Income Envelop 3',
      start: '11/05/2018',
      end: '12/11/2018'
    },
    {
      label: 'Ballet',
      amount: 54.41,
      period: 'Monthly',
      toBeUsed: 'Income',
      source: 'Income Envelop 2',
      start: '11/15/2018',
      end: '12/15/2018'
    },
    {
      label: 'Ballet-Old Date',
      amount: 79.21,
      period: 'Monthly',
      toBeUsed: 'Income',
      source: 'Income Envelop 3',
      start: '11/01/2018',
      end: '12/10/2018'
    },
    {
      label: 'Bank of America Visa',
      amount: 55.67,
      period: 'Quarterly',
      toBeUsed: 'Expense',
      source: 'Income Envelop 2',
      start: '11/07/2018',
      end: '12/10/2018'
    },
    {
      label: 'Bass Rental',
      amount: 45.98,
      period: 'Monthly',
      toBeUsed: 'Income',
      source: 'Income Envelop 1',
      start: '11/01/2018',
      end: '12/10/2018'
    },
    {
      label: 'Acme Company',
      amount: 67.91,
      period: 'Every 3 Weeks',
      toBeUsed: 'Income',
      source: 'Income Envelop 2',
      start: '11/01/2018',
      end: '12/10/2018'
    },
    {
      label: 'Real Estate',
      amount: 45.66,
      period: 'Bi-Annually',
      toBeUsed: 'Expense',
      source: 'Income Envelop 3',
      start: '11/01/2018',
      end: '12/20/2018'
    },
  ])

  const [showModal, setShowModal] = useState(false);
  const [modalItem, setModalItem] = useState();

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

      <Text style={styles.titleTxt}>Envelop</Text>
      <Text style={styles.dateScopeTxt}>11/1/2018 - 11/07/2018</Text>
      <ScrollView style={styles.body}>
        {
          listData.map((item, index) => (
            <TouchableOpacity style={styles.item} key={index} onPress={() => { setModalItem(item); setShowModal(true) }}>
              <View style={styles.itemLeft}>
                <View style={styles.iconBack}>
                  <Image style={styles.iconReportImg} source={Images.iconCash} resizeMode='contain' />
                </View>
              </View>
              <View style={styles.itemRight}>
                <Text style={styles.dateTxt}>{item.label}</Text>
                <View style={styles.bottomLine}>
                  <Text style={styles.bottomTxt}>$ {item.amount}</Text>
                  <Text style={styles.bottomTxt}>{item.period}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))
        }
      </ScrollView>
      <TouchableOpacity style={styles.plusBtn} onPress={() => navigation.navigate('AddEditEnvelop', { page: 'new' })}>
        <EntypoIcon name="plus" style={styles.plusIcon}></EntypoIcon>
      </TouchableOpacity>

      <Modal isVisible={showModal} style={{justifyContent: 'flex-end', }}>
        <View style={styles.modal}>
          {
            modalItem &&
            <>
              <View style={styles.line}>
                <Text style={styles.modalItemTxt}>To be used</Text>
                <Text style={styles.modalItemTxt}>{modalItem.toBeUsed}</Text>
              </View>
              <View style={styles.line}>
                <Text style={styles.modalItemTxt}>Target Amount</Text>
                <Text style={styles.modalItemTxt}>{modalItem.amount}</Text>
              </View>
              <View style={styles.line}>
                <Text style={styles.modalItemTxt}>Source From</Text>
                <Text style={styles.modalItemTxt}>{modalItem.source}</Text>
              </View>
              <View style={styles.line}>
                <Text style={styles.modalItemTxt}>As often as</Text>
                <Text style={styles.modalItemTxt}>{modalItem.period}</Text>
              </View>
              <View style={styles.line}>
                <Text style={styles.modalItemTxt}>Start on</Text>
                <Text style={styles.modalItemTxt}>{modalItem.start}</Text>
              </View>
              <View style={styles.line}>
                <Text style={styles.modalItemTxt}>End on</Text>
                <Text style={styles.modalItemTxt}>{modalItem.end}</Text>
              </View>

              <View style={styles.btnLine}>
                <TouchableOpacity style={styles.btnEdit} onPress={() => { navigation.navigate('AddEditEnvelop', { page: 'edit', item: modalItem }); setShowModal(false) }}>
                  <Text style={styles.btnEditTxt}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnDelete} onPress={()=>{setShowModal(false)}}>
                  <Text style={styles.btnDeleteTxt}>Delete</Text>
                </TouchableOpacity>
              </View>
            </>
          }
        </View>
      </Modal>
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
  bottomLine: {
    flexDirection: 'row',
    marginTop: normalize(10, 'height'),
  },
  bottomTxt: {
    fontSize: RFPercentage(2),
    color: Colors.greyWeakColor,
    marginRight: normalize(30)
  },

  plusBtn: {
    width: normalize(50),
    height: normalize(50),
    backgroundColor: Colors.blueToneColor,
    borderRadius: normalize(25),
    position: 'absolute',
    right: normalize(20),
    bottom: normalize(20, 'height'),
    justifyContent: 'center',
    alignItems: 'center'
  },
  plusIcon: {
    fontSize: RFPercentage(4),
    color: Colors.whiteColor,
  },

  modal: {
    width: width,
    flex: 0.57,
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: Colors.whiteColor
  },
  line: {
    width: '90%',
    height: normalize(30, 'height'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginTop: normalize(20, 'height'),
  },
  modalItemTxt: {
    fontSize: RFPercentage(2.2),
    color: Colors.blackColor
  },
  btnLine: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center'
  },
  btnEdit: {
    width: '47%',
    height: normalize(40, 'height'),
    backgroundColor: Colors.blueToneColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: normalize(7),
    // borderWidth: 1
  },
  btnEditTxt: {
    fontSize: RFPercentage(3),
    color: Colors.whiteColor
  },
  btnDelete: {
    width: '47%',
    height: normalize(40, 'height'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: normalize(7),
    borderWidth: 1
  },
  btnDeleteTxt: {
    fontSize: RFPercentage(3),
    color: Colors.blackColor
  }
});