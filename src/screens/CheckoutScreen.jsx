import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
  Switch,
  processColor,
} from "react-native";
import { RadarChart, PieChart } from "react-native-charts-wrapper";

import CheckoutButton from "../components/CheckoutScreen/CheckoutButton";

const imageJUVA = "../assets/app_background.png";
const juvaLogo = "../assets/JUVA_Blueberry_Logo.png";

const onMainLogoClick = (navigation) => {
  navigation.pop();
};

const onCancelPress = (navigation) => {
  navigation.pop();
};

const onPayPress = (navigation) => {
  navigation.navigate("Feedback");
};

const handleSelect = (event) => {
  let entry = event.nativeEvent;
  if (entry == null) {
    this.setState({ ...this.state, selectedEntry: null });
  } else {
    this.setState({ ...this.state, selectedEntry: JSON.stringify(entry) });
  }

  console.log(event.nativeEvent);
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
            <View style={styles.blendNameContainer}>
              <View style={styles.blendNameView}>
                <Text style={styles.blendNameText}>Blend Name</Text>
              </View>
            </View>
            <View style={styles.blendDetailsContainer}>
              <View style={styles.blendChartContainer}>
                <View
                  style={{
                    flex: 0.4,
                    backgroundColor: "#00000010",
                    color: "#FFFFFF",
                    borderTopLeftRadius: 60,
                    borderTopRightRadius: 60,
                  }}
                >
                  <View style={styles.container}>
                    <PieChart
                      style={styles.chart}
                      logEnabled={true}
                      chartBackgroundColor={processColor("transparent")}
                      chartDescription={{
                        text: "",
                        textSize: 0,
                        textColor: processColor("black"),
                      }}
                      data={{
                        dataSets: [
                          {
                            values: [
                              { value: 45, label: "Sandwiches" },
                              { value: 21, label: "Salads" },
                              { value: 15, label: "Soup" },
                              { value: 9, label: "Beverages" },
                              { value: 10, label: "Desserts" },
                            ],
                            label: "",
                            config: {
                              colors: [
                                processColor("#C0FF8C"),
                                processColor("#FFF78C"),
                                processColor("#FFD08C"),
                                processColor("#8CEAFF"),
                                processColor("#FF8C9D"),
                              ],
                              valueTextSize: 16,
                              valueTextColor: processColor("black"),
                              sliceSpace: 5,
                              selectionShift: 13,
                              // xValuePosition: "OUTSIDE_SLICE",
                              // yValuePosition: "OUTSIDE_SLICE",
                              valueFormatter: "#.#'%'",
                              valueLineColor: processColor("green"),
                              valueLinePart1Length: 0.5,
                            },
                          },
                        ],
                      }}
                      legend={{
                        enabled: true,
                        textSize: 17,
                        form: "CIRCLE",

                        horizontalAlignment: "LEFT",
                        verticalAlignment: "CENTER",
                        orientation: "VERTICAL",
                        wordWrapEnabled: true,
                      }}
                      highlights={[{ x: 2 }]}
                      extraOffsets={{ left: 0, top: 0, right: 0, bottom: 0 }}
                      entryLabelColor={processColor("green")}
                      entryLabelTextSize={20}
                      entryLabelFontFamily={"HelveticaNeue-Medium"}
                      drawEntryLabels={false}
                      rotationEnabled={true}
                      rotationAngle={45}
                      usePercentValues={true}
                      styledCenterText={{
                        text: "Pie center text!",
                        color: processColor("transparent"),
                        fontFamily: "HelveticaNeue-Medium",
                        size: 15,
                      }}
                      centerTextRadiusPercent={100}
                      holeRadius={40}
                      holeColor={processColor("#f0f0f0")}
                      transparentCircleRadius={45}
                      transparentCircleColor={processColor("#f0f0f088")}
                      maxAngle={350}
                      // onSelect={handleSelect.bind(this)}
                      // onChange={(event) => console.log(event.nativeEvent)}
                    />
                  </View>
                </View>
                <View
                  style={{
                    flex: 0.6,
                    backgroundColor: "#00000010",
                    color: "#FFFFFF",
                    borderBottomLeftRadius: 60,
                    borderBottomRightRadius: 60,
                  }}
                >
                  <View style={styles.container}>
                    <RadarChart
                      style={styles.chart}
                      data={{
                        dataSets: [
                          {
                            values: [
                              { value: 100 },
                              { value: 110 },
                              { value: 105 },
                              { value: 115 },
                            ],
                            label: "DS 1",
                            config: {
                              color: processColor("#FF8C9D"),
                              drawFilled: true,
                              fillColor: processColor("#FF8C9D"),
                              fillAlpha: 100,
                              lineWidth: 2,
                            },
                          },
                          {
                            values: [
                              { value: 115 },
                              { value: 100 },
                              { value: 105 },
                              { value: 110 },
                            ],
                            label: "DS 2",
                            config: {
                              color: processColor("#C0FF8C"),
                              drawFilled: true,
                              fillColor: processColor("#C0FF8C"),
                              fillAlpha: 200,
                              lineWidth: 1,
                            },
                          },
                          {
                            values: [
                              { value: 105 },
                              { value: 115 },
                              { value: 121 },
                              { value: 110 },
                            ],
                            label: "DS 3",
                            config: {
                              color: processColor("#8CEAFF"),
                              drawFilled: true,
                              fillColor: processColor("#8CEAFF"),
                            },
                          },
                        ],
                      }}
                      xAxis={{
                        valueFormatter: ["Bone", "Muscle", "Energy", "BMR"],
                        textSize: 14,
                      }}
                      yAxis={{ drawLabels: false }}
                      chartDescription={{ text: "" }}
                      legend={{
                        enabled: false,
                        textSize: 14,
                        form: "CIRCLE",
                        wordWrapEnabled: false,
                      }}
                      drawWeb={true}
                      webLineWidth={2}
                      webLineWidthInner={2}
                      webAlpha={355}
                      webColor={processColor("red")}
                      webColorInner={processColor("gray")}
                      skipWebLineCount={1}
                      // onSelect={handleSelect.bind(this)}
                      // onChange={(event) => console.log(event.nativeEvent)}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.blendIngredientsContainer}></View>
            </View>
          </View>
          <View style={styles.bottomView}>
            <View style={styles.blendTipsContainer}>
              <View style={styles.blendTipsView}>
                <Text style={styles.blendTipsText}>
                  Some unknown facts, tips, and insights for customers to learn
                  and get inspired.
                </Text>
              </View>
            </View>
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
                  onPress={onCancelPress.bind(this, props.navigation)}
                />
              </View>
              <View style={styles.payButtonContainer}>
                <CheckoutButton
                  text="Pay & Start Coldpress"
                  textColor="#343088"
                  fillColor="white"
                  onPress={onPayPress.bind(this, props.navigation)}
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
    flex: 0.05,
    alignItems: "center",
  },
  mainLogo: {
    width: 80,
    height: 80,
  },
  bodyView: {
    flex: 0.55,
    alignItems: "center",
    justifyContent: "space-between",
  },
  footerView: {
    flex: 0.05,
    alignItems: "center",
    justifyContent: "center",
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
    paddingBottom: 50,
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
    paddingTop: 50,
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
  blendNameText: {
    fontSize: 28,
    color: "black",
  },
  blendNameView: {
    borderWidth: 1,
    width: 500,
    alignItems: "center",
    paddingVertical: 5,
    borderRadius: 10,
    borderStyle: "dashed",
  },
  blendNameContainer: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingVertical: 25,
    width: 700,
    alignItems: "center",
  },
  blendTipsContainer: {
    borderTopWidth: 1,
    paddingVertical: 25,
    width: 700,
    alignItems: "center",
  },
  blendTipsView: {
    borderWidth: 1,
    width: 500,
    alignItems: "center",
    paddingVertical: 15,
    borderRadius: 10,
    borderStyle: "dashed",
  },
  blendTipsText: {
    fontSize: 20,
    color: "black",
    textAlign: "center",
  },
  blendDetailsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  chart: {
    flex: 1,
  },
  blendChartContainer: {
    padding: 40,
    flex: 0.5,
  },
  blendIngredientsContainer: {
    flex: 0.5,
  },
});

export default CheckoutScreen;
