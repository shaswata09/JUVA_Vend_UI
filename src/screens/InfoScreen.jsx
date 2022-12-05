import React from 'react';
import {View, Text, Button, StyleSheet, ImageBackground} from 'react-native';

const image = '../assets/app_background.png';

const InfoScreen = props => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require(image)}
        resizeMode="cover"
        style={styles.image}>
        <View>
          <Text style={{alignSelf: 'center'}}>
            Welcome to InfoScreen!{/* {getUsername()} */}
          </Text>
          <Button
            title="Go to HomeScreen"
            onPress={() => {
              props.navigation.navigate('Home');
            }}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default InfoScreen;
