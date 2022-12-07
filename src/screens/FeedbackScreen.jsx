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
  ActivityIndicator,
} from "react-native";

import StarFilled from "../assets/svg/star-solid.svg";
import StarRegular from "../assets/svg/star-regular.svg";

const imageJUVA = "../assets/app_background.png";
const juvaLogo = "../assets/JUVA_Blueberry_Logo.png";

import SubmitButton from "../components/FeedbackScreen/SubmitButton";

const onMainLogoClick = (navigation) => {
  navigation.popToTop();
};

const onSubmitPress = (navigation) => {
  // navigation.navigate("Feedback");
};

const FeedbackScreen = (props) => {
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
            <View style={styles.feedbackContainer}>
              <View style={styles.feedbackRequestView}>
                <Text style={styles.feedbackRequestText}>
                  Help us with a quick feedback while we prepapre your drink.
                </Text>
              </View>
              <View style={styles.ratingContainer}>
                <View style={styles.ratingCategoryContainer}>
                  <View style={styles.ratingCategoryNameView}>
                    <Text style={styles.ratingCategoryNameText}>
                      UI Feedback:
                    </Text>
                  </View>
                  <View style={styles.ratingStarsView}>
                    <View style={styles.iconContainer}>
                      <TouchableOpacity>
                        <StarFilled width={40} height={40} fill="#343088" />
                      </TouchableOpacity>
                    </View>
                    <View style={styles.iconContainer}>
                      <TouchableOpacity>
                        <StarFilled width={40} height={40} fill="#343088" />
                      </TouchableOpacity>
                    </View>
                    <View style={styles.iconContainer}>
                      <TouchableOpacity>
                        <StarFilled width={40} height={40} fill="#343088" />
                      </TouchableOpacity>
                    </View>
                    <View style={styles.iconContainer}>
                      <TouchableOpacity>
                        <StarFilled width={40} height={40} fill="#343088" />
                      </TouchableOpacity>
                    </View>
                    <View style={styles.iconContainer}>
                      <TouchableOpacity>
                        <StarRegular width={40} height={40} fill="#343088" />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                <View style={styles.ratingCategoryContainer}>
                  <View style={styles.ratingCategoryNameView}>
                    <Text style={styles.ratingCategoryNameText}>
                      Available Options:
                    </Text>
                  </View>
                  <View style={styles.ratingStarsView}>
                    <View style={styles.iconContainer}>
                      <TouchableOpacity>
                        <StarFilled width={40} height={40} fill="#343088" />
                      </TouchableOpacity>
                    </View>
                    <View style={styles.iconContainer}>
                      <TouchableOpacity>
                        <StarFilled width={40} height={40} fill="#343088" />
                      </TouchableOpacity>
                    </View>
                    <View style={styles.iconContainer}>
                      <TouchableOpacity>
                        <StarFilled width={40} height={40} fill="#343088" />
                      </TouchableOpacity>
                    </View>
                    <View style={styles.iconContainer}>
                      <TouchableOpacity>
                        <StarRegular width={40} height={40} fill="#343088" />
                      </TouchableOpacity>
                    </View>
                    <View style={styles.iconContainer}>
                      <TouchableOpacity>
                        <StarRegular width={40} height={40} fill="#343088" />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                <View style={styles.ratingCategoryContainer}>
                  <View style={styles.ratingCategoryNameView}>
                    <Text style={styles.ratingCategoryNameText}>
                      Product Quality:
                    </Text>
                  </View>
                  <View style={styles.ratingStarsView}>
                    <View style={styles.iconContainer}>
                      <TouchableOpacity>
                        <StarFilled width={40} height={40} fill="#343088" />
                      </TouchableOpacity>
                    </View>
                    <View style={styles.iconContainer}>
                      <TouchableOpacity>
                        <StarFilled width={40} height={40} fill="#343088" />
                      </TouchableOpacity>
                    </View>
                    <View style={styles.iconContainer}>
                      <TouchableOpacity>
                        <StarFilled width={40} height={40} fill="#343088" />
                      </TouchableOpacity>
                    </View>
                    <View style={styles.iconContainer}>
                      <TouchableOpacity>
                        <StarFilled width={40} height={40} fill="#343088" />
                      </TouchableOpacity>
                    </View>
                    <View style={styles.iconContainer}>
                      <TouchableOpacity>
                        <StarRegular width={40} height={40} fill="#343088" />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                <View style={styles.ratingCategoryContainer}>
                  <View style={styles.ratingCategoryNameView}>
                    <Text style={styles.ratingCategoryNameText}>
                      Overall Experience:
                    </Text>
                  </View>
                  <View style={styles.ratingStarsView}>
                    <View style={styles.iconContainer}>
                      <TouchableOpacity>
                        <StarFilled width={40} height={40} fill="#343088" />
                      </TouchableOpacity>
                    </View>
                    <View style={styles.iconContainer}>
                      <TouchableOpacity>
                        <TouchableOpacity>
                          <StarFilled width={40} height={40} fill="#343088" />
                        </TouchableOpacity>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.iconContainer}>
                      <TouchableOpacity>
                        <StarFilled width={40} height={40} fill="#343088" />
                      </TouchableOpacity>
                    </View>
                    <View style={styles.iconContainer}>
                      <TouchableOpacity>
                        <StarFilled width={40} height={40} fill="#343088" />
                      </TouchableOpacity>
                    </View>
                    <View style={styles.iconContainer}>
                      <TouchableOpacity>
                        <StarRegular width={40} height={40} fill="#343088" />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.submitContainer}>
                <SubmitButton
                  text="Submit"
                  textColor="#343088"
                  fillColor="white"
                  onPress={onSubmitPress.bind(this, props.navigation)}
                />
              </View>
            </View>
          </View>
          <View style={styles.bottomView}>
            <View style={styles.bottomContainer}>
              <Text style={styles.dispendingText}>Dispensing your Blend.</Text>
            </View>
            <View style={styles.loaderView}>
              <ActivityIndicator size="large" color="#999999" />
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
    justifyContent: "space-between",
  },
  feedbackContainer: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    width: 700,
    padding: 50,
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
  bottomContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 160,
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
  },
  dispendingText: {
    textAlign: "center",
    fontSize: 20,
    color: "black",
  },
  loaderView: {
    flex: 1,
    padding: 50,
  },
  feedbackRequestView: {
    borderWidth: 1,
    alignItems: "center",
    paddingVertical: 10,
    borderStyle: "dashed",
    borderRadius: 10,
  },
  feedbackRequestText: {
    fontSize: 20,
    color: "black",
  },
  ratingContainer: {
    padding: 20,
  },
  ratingCategoryContainer: {
    flexDirection: "row",
    paddingVertical: 20,
    justifyContent: "space-between",
  },
  ratingCategoryNameView: {
    borderWidth: 1,
    paddingVertical: 5,
    borderRadius: 10,
    alignItems: "center",
    width: 250,
  },
  ratingCategoryNameText: {
    fontSize: 18,
    color: "black",
  },
  iconContainer: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 5,
    backgroundColor: "transparent",
  },
  ratingStarsView: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  submitContainer: {
    paddingTop: 40,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FeedbackScreen;
