import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
  Switch,
} from "react-native";
import CheckoutButton from "../components/CheckoutScreen/CheckoutButton";

const imageJUVA = "../assets/app_background.png";
const juvaLogo = "../assets/JUVA_Blueberry_Logo.png";

const onMainLogoClick = (navigation) => {
  navigation.navigate("Feedback");
};

const CheckoutScreen = (props) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require(imageJUVA)}
        resizeMode="cover"
        style={styles.imageJUVA}
      >
        <View style={styles.container}>
          <View style={styles.headerView}>
            <TouchableOpacity
              onPress={onMainLogoClick.bind(this, props.navigation)}
            >
              <Image source={require(juvaLogo)} style={styles.mainLogo} />
            </TouchableOpacity>
          </View>
          <View style={styles.bodyView}>
            <View></View>
          </View>
          <View style={styles.bottomView}>
            <View style={styles.priceContainer}>
              <View style={styles.priceTextView}>
                <Text style={styles.priceText}>Price:</Text>
              </View>
              <View style={styles.priceAmountTextView}>
                <Text style={styles.priceAmountText}>$4.99</Text>
              </View>
            </View>
            <View style={styles.buttonsContainer}>
              <View style={styles.cancelContainer}>
                <CheckoutButton
                  text="Cancel"
                  textColor="white"
                  fillColor="#343088"
                />
              </View>
              <View style={styles.payButtonContainer}>
                <CheckoutButton
                  text="Pay & Start Coldpress"
                  textColor="#343088"
                  fillColor="white"
                />
              </View>
            </View>
          </View>
          <View style={styles.footerView}>
            <View style={styles.languageView}>
              <Text style={styles.languageText}>ENGLISH</Text>
            </View>
            <View>
              <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
            <View style={styles.languageView}>
              <Text style={styles.languageText}>ESPANOL</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  imageJUVA: {
    flex: 1,
    justifyContent: "center",
    paddingTop: 20,
  },
  headerView: {
    flex: 0.1,
    alignItems: "center",
  },
  mainLogo: {
    width: 80,
    height: 80,
  },
  bodyView: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  footerView: {
    flex: 0.05,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
    flexDirection: "row",
  },
  languageView: {
    paddingHorizontal: 20,
  },
  languageText: {
    fontStyle: "bold",
    fontWeight: "bold",
    fontSize: 18,
  },
  bottomView: {
    flex: 0.2,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  priceContainer: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    color: "black",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-end",
    width: 700,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 80,
  },
  priceTextView: {
    alignItems: "center",
    paddingRight: 220,
    paddingVertical: 25,
    justifyContent: "center",
  },
  priceAmountTextView: {
    paddingLeft: 50,
    paddingRight: 45,
    paddingVertical: 25,
  },
  priceText: {
    fontWeight: "bold",
    fontSize: 28,
    color: "black",
  },
  priceAmountText: {
    fontWeight: "bold",
    fontSize: 24,
    color: "black",
  },
  cancelContainer: {
    flex: 0.4,
    alignItems: "center",
    justifyContent: "center",
  },
  payButtonContainer: {
    flex: 0.6,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CheckoutScreen;
