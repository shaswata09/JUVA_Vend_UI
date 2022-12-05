import * as React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';

import AppNavigation from './src/navigations/AppNavigation';

const image = './src/assets/app_background.png'

function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require(image)} resizeMode="cover" style={styles.image}>
        <AppNavigation />
      </ImageBackground>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  }
});

export default App;