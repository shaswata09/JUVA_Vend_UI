import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Switch,
} from "react-native";

import SocialIcon from "../components/HomeScreen/SocialIcon";
import HomeBlendIcon from "../components/HomeScreen/HomeBlendIcon";

const imageJUVA = "../assets/app_background.png";
const juvaLogo = "../assets/JUVA_Blueberry_Logo.png";
const qrImage = "../assets/sample_QR.png";
const fbIcon = "../assets/facebook.png";
const twitterIcon = "../assets/twitter.png";
const instagramIcon = "../assets/instagram.png";
const pinterestIcon = "../assets/pinterest.png";

const BONE_JOINT = "../assets/blends/BONE_JOINT_v2.png";
const CITRUS_PSYCH = "../assets/blends/CITRUS-PSYCH_v2.png";
const IMMUNE_SUPPORT = "../assets/blends/IMMUNE_SUPPORT_v2.png";
const JOHN_LEMON = "../assets/blends/JOHN_LEMON_v2.png";
const MUSCLE_MILK = "../assets/blends/MUSCLE_MILK_v2.png";
const PRESCRIPTION = "../assets/blends/PRESCRIPTION_v2.png";
const REBOOT = "../assets/blends/REBOOT_v2.png";
const RED_ZEPPELIN = "../assets/blends/RED_ZEPPELIN_v2.png";
const UNDERGROUND = "../assets/blends/UNDERGROUND_v2.png";

const onMainLogoClick = (navigation) => {
  navigation.popToTop();
};

const onQRClick = (navigation) => {
  navigation.navigate("Checkout");
};

const HomeScreen = (props) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={styles.mainView}>
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
            <View style={styles.predesignedContainerView}>
              <View style={styles.bendsTextView}>
                <Text style={styles.bodyText}>Predesigned Blends</Text>
              </View>
              <View style={styles.homeBlendListdView}>
                <HomeBlendIcon
                  img={require(JOHN_LEMON)}
                  imgText={"JOHN LEMON"}
                />
                <HomeBlendIcon
                  img={require(CITRUS_PSYCH)}
                  imgText={"CITRUS PSYCH"}
                />
                <HomeBlendIcon img={require(REBOOT)} imgText={"REBOOT"} />
                <HomeBlendIcon
                  img={require(PRESCRIPTION)}
                  imgText={"PRESCRIPTION"}
                />
                <HomeBlendIcon
                  img={require(RED_ZEPPELIN)}
                  imgText={"RED ZEPPELIN"}
                />
                <HomeBlendIcon
                  img={require(UNDERGROUND)}
                  imgText={"UNDERGROUND"}
                />
              </View>
            </View>
            <View style={styles.predesignedContainerView}>
              <View style={styles.bendsTextView}>
                <Text style={styles.bodyText}>Blends for a Purpose</Text>
              </View>
              <View style={styles.homeBlendListdView}>
                <HomeBlendIcon
                  img={require(BONE_JOINT)}
                  imgText={"BONE JOINT"}
                />
                <HomeBlendIcon
                  img={require(IMMUNE_SUPPORT)}
                  imgText={"IMMUNE SUPPORT"}
                />
                <HomeBlendIcon
                  img={require(MUSCLE_MILK)}
                  imgText={"MUSCLE MILK"}
                />
              </View>
            </View>
            <View style={styles.taglineTextView}>
              <Text style={styles.bottomBodyText}>COLD. PRESSED. RAW.</Text>
            </View>
          </View>
          <View style={styles.bottomView}>
            <View style={styles.qrView}>
              <TouchableOpacity
                onPress={onQRClick.bind(this, props.navigation)}
              >
                <Image source={require(qrImage)} style={styles.qrImage} />
              </TouchableOpacity>
              <View style={styles.qrTextView}>
                <Text style={styles.qrlineText}>
                  Scan The QR Code in your Mobile App to get your Custom Blend.
                </Text>
              </View>
            </View>
            <View style={styles.socialMediaView}>
              <View style={styles.socialTextView}>
                <Text style={styles.socialText}>More from JUVA!</Text>
              </View>
              <View style={styles.socialIconsView}>
                <SocialIcon img={require(fbIcon)} imgText={"@Facebook"} />
                <SocialIcon
                  img={require(instagramIcon)}
                  imgText={"@Instagram"}
                />
                <SocialIcon img={require(twitterIcon)} imgText={"@Twitter"} />
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
  mainView: {
    flex: 1,
    justifyContent: "space-between",
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  imageJUVA: {
    flex: 1,
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
  bendsTextView: {
    borderBottomWidth: 2,
    borderColor: "gray",
    width: 450,
    alignItems: "center",
    padding: 10,
  },
  taglineTextView: {
    borderBottomWidth: 2,
    borderColor: "gray",
    width: 650,
    alignItems: "center",
    padding: 10,
    borderStyle: "dashed",
  },
  predesignedContainerView: {
    alignItems: "center",
    justifyContent: "center",
  },
  homeBlendListdView: {
    flexDirection: "row",
    paddingTop: 20,
  },
  bodyText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 32,
  },
  bottomBodyText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 26,
  },
  bottomView: {
    flex: 0.2,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: "row",
  },
  qrView: {
    flex: 0.4,
    alignItems: "center",
    justifyContent: "center",
    borderRightWidth: 2,
    borderRightColor: "gray",
    borderStyle: "dashed",
  },
  qrImage: {
    width: 150,
    height: 150,
    backgroundColor: "white",
  },
  qrTextView: {
    // alignItems: 'center',
  },
  qrlineText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 10,
    width: 200,
    color: "black",
  },
  socialMediaView: {
    flex: 0.5,
  },
  socialTextView: {
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 20,
  },
  socialText: {
    marginTop: 10,
    fontSize: 20,
    width: 200,
    textAlign: "center",
    fontWeight: "bold",
  },
  socialIconsView: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  footerView: {
    flex: 0.05,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
    flexDirection: "row",
  },
  languageText: {
    fontStyle: "bold",
    fontWeight: "bold",
    fontSize: 18,
  },
  languageView: {
    paddingHorizontal: 20,
  },
});

export default HomeScreen;
