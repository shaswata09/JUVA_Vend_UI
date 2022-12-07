import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

const SubmitButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={{ ...styles.buttonView, backgroundColor: props.fillColor }}>
        <Text style={{ ...styles.buttonText, color: props.textColor }}>
          {props.text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonView: {
    borderWidth: 4,
    borderRadius: 45,
    borderColor: "#343088",
    backgroundColor: "#343088",
    alignItems: "center",
  },
  buttonText: {
    paddingVertical: 15,
    paddingHorizontal: 75,
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
  },
});

export default SubmitButton;
