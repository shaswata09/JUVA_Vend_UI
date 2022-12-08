
import React, { useState } from 'react';
import { View, Text, ImageBackground, Button, TouchableWithoutFeedback, StyleSheet } from 'react-native';

const berries1 = '../assets/info_screen/berries1.jpg';
const green1 = '../assets/info_screen/green1.jpg';
const green2 = '../assets/info_screen/green2.jpg';
const rejuvanate = '../assets/info_screen/rejuvanate.jpg';

const InfoScreen = props => {
  const [currentView, setCurrentView] = useState(1);

  // Use setInterval to change the currentView every 5 seconds
  setInterval(() => {
    setCurrentView(currentView => (currentView + 1) % 3);
  }, 5000);

  return (
  <TouchableWithoutFeedback onPress={() => {props.navigation.navigate('Home')}}>
    <View style={styles.container}>


        {currentView === 1 && (
          <ImageBackground
          source={require(berries1)}
          resizeMode="cover"
          style={styles.image}>
          <View style={styles.view1}>
            <Text>View 1</Text>
          </View>

      </ImageBackground>)}
      {currentView === 2 && (
          <ImageBackground

          source={require(green1)}
          resizeMode="cover"
          style={styles.image}>
          <View style={styles.view2}>
          <Text>View 2</Text>
        </View>
       </ImageBackground>)}
      {currentView === 3 && (
          <ImageBackground
          source={require(rejuvanate)}
          resizeMode="cover"
          style={styles.image}>
        <View style={styles.view3}>
          <Text>View 3</Text>
        </View>
        </ImageBackground>
      )}
    </View>
  </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  view1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  view2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  view3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    opacity: 0.6
  },
});

export default InfoScreen;