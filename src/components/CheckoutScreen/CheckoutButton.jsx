import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

const CheckoutButton = (props) => {
  return (
    <TouchableOpacity>
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
  },
  buttonText: {
    paddingVertical: 30,
    paddingHorizontal: 70,
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
  },
});

export default CheckoutButton;
