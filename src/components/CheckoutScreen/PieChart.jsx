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

const handleSelect = (event) => {
  let entry = event.nativeEvent;
  if (entry == null) {
    this.setState({ ...this.state, selectedEntry: null });
  } else {
    this.setState({ ...this.state, selectedEntry: JSON.stringify(entry) });
  }

  console.log(event.nativeEvent);
};

const PieChartContainer = (props) => {
  return (
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  chart: {
    flex: 1,
  },
});

export default PieChartContainer;
