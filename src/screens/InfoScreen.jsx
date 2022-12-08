import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ImageBackground,
  Button,
  TouchableWithoutFeedback,
  StyleSheet,
  Image,
} from "react-native";

const berries1 = "../assets/info_screen/berries1.jpg";
const green1 = "../assets/info_screen/green1.jpg";
const green2 = "../assets/info_screen/green2.png";

const rejuvanate = "../assets/info_screen/rejuvanate.jpg";
const juvaLogo = "../assets/Juva_Stacked_Logo_Small-01.png";

const InfoScreen = (props) => {
  const [currentView, setCurrentView] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentView((currentView) => (currentView + 1) % 3);
      // setCurrentView((currentView) => 0);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Use setInterval to change the currentView every 5 seconds
  // setInterval(() => {
  //   setCurrentView((currentView) => (currentView + 1) % 3);
  // }, 10000);

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        props.navigation.navigate("Home");
      }}
    >
      <View style={styles.container}>
        {currentView === 0 && (
          <ImageBackground
            source={require(berries1)}
            resizeMode="cover"
            style={styles.image}
          >
            <View style={styles.imageContainer}>
              <View style={styles.juvaLogoContainer}>
                <Image source={require(juvaLogo)} />
              </View>
              <View style={styles.textboxContainer}>
                <Text style={styles.textboxText}>
                  What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make
                  a type specimen book.
                </Text>
              </View>
              <View style={styles.pressTextContainer}>
                <Text style={styles.pressText}>Press anywhere to Start.</Text>
              </View>
            </View>
          </ImageBackground>
        )}
        {currentView === 1 && (
          <ImageBackground
            source={require(green1)}
            resizeMode="cover"
            style={styles.image}
          >
            <View style={styles.imageContainer}>
              <View style={styles.juvaLogoContainer}>
                <Image source={require(juvaLogo)} />
              </View>
              <View style={styles.textboxContainer}>
                <Text style={styles.textboxText}>
                  What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make
                  a type specimen book.
                </Text>
              </View>
              <View style={styles.pressTextContainer}>
                <Text style={styles.pressText}>Press anywhere to Start.</Text>
              </View>
            </View>
          </ImageBackground>
        )}
        {currentView === 2 && (
          <ImageBackground
            source={require(green2)}
            resizeMode="cover"
            style={styles.image}
          >
            <View style={styles.imageContainer}>
              <View style={styles.juvaLogoContainer}>
                <Image source={require(juvaLogo)} />
              </View>
              <View style={styles.textboxContainer}>
                <Text style={styles.textboxText}>
                  What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an
                  unknown printer took a galley of type and scrambled it to make
                  a type specimen book.
                </Text>
              </View>
              <View style={styles.pressTextContainer}>
                <Text style={styles.pressText}>Press anywhere to Start.</Text>
              </View>
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
  imageContainer: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 40,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  textboxText: {
    textAlign: "center",
    fontSize: 38,
    fontWeight: "bold",
    color: "white",
    opacity: 1,
  },
  textboxContainer: {
    paddingHorizontal: 150,
    flex: 0.6,
    backgroundColor: "#00000070",
    borderRadius: 40,
    paddingVertical: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  juvaLogoContainer: {
    flex: 0.15,
    backgroundColor: "white",
    borderRadius: 40,
    padding: 20,
  },
  pressTextContainer: {
    flex: 0.15,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 60,
    backgroundColor: "white",
    borderRadius: 40,
  },
  pressText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#343088",
  },
});

export default InfoScreen;
