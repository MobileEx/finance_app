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

import { LineChart } from "react-native-chart-kit";

import { Colors, Images } from '@constants';
import { SideMenu } from '@components';

export default function ReportScreen({ navigation, route }) {

  const [showMenu, setShowMenu] = useState(false);

  const [totalAmount, setTotalAmount] = useState(8012.06);

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

  const chartData = {
    labels: ["11/01/2018", "12/01/2018","01/01/2019","02/01/2019","03/01/2019","04/01/2019","05/01/2019","06/01/2019","07/01/2019","08/01/2019"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 86, 76, 65, 34, 30, 26],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2 // optional
      }
    ],
  };

  const chartConfig = {
    // backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    // backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0,
    color: (opacity = 1) => `rgba(200, 66, 56, ${opacity})`,
    strokeWidth: 3, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };

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

      <Text style={styles.titleTxt}>Report</Text>
      <Text style={styles.titleTxt}>Total Amount - ${totalAmount}</Text>

      <View style={styles.chartPart}>
        <LineChart
          data={chartData}
          width={width * 0.9}
          height={normalize(250, 'height')}
          verticalLabelRotation={0}
          chartConfig={chartConfig}
          style={{marginVertical: normalize(20, 'height')}}
          verticalLabelRotation={45}
          yAxisLabel='$'
        />
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

  chartPart:{
    width: '100%',
    height: '50%',
    alignSelf: 'center',
    // borderWidth: 1
  },

});