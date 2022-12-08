
import React, { useState } from 'react';
import { View, Text, Button, TouchableWithoutFeedback, StyleSheet } from 'react-native';

const InfoScreen = props => {
  const [currentView, setCurrentView] = useState(1);

  // Use setInterval to change the currentView every 5 seconds
  setInterval(() => {
    setCurrentView(currentView => (currentView % 3) + 1);
  }, 5000);

  return (
  <TouchableWithoutFeedback onPress={() => {props.navigation.navigate('Home')}}>
    <View style={styles.container}>
      {currentView === 1 && (
        <View style={styles.view1}>
          <Text>View 1</Text>
        </View>
      )}
      {currentView === 2 && (
        <View style={styles.view2}>
          <Text>View 2</Text>
        </View>
      )}
      {currentView === 3 && (
        <View style={styles.view3}>
          <Text>View 3</Text>
        </View>
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
    backgroundColor: '#00f',
    justifyContent: 'center',
    alignItems: 'center',
  },
  view2: {
    flex: 1,
    backgroundColor: '#0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  view3: {
    flex: 1,
    backgroundColor: '#f00',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default InfoScreen;