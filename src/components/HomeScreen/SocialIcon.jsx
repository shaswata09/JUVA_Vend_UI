import {View, Image, Text, StyleSheet} from 'react-native';

const SocialIcon = props => {
  return (
    <View style={styles.socialView}>
      <View style={styles.imageView}>
        <Image source={props.img} style={styles.image} />
      </View>
      <View style={styles.textView}>
        <Text style={styles.text}>{props.imgText}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  socialView: {
    shadowColor: 'black',
    // shadowOpacity: 0.26,
    // shadowOffset: {width: 0, height: 2},
    // shadowRadius: 8,
    // elevation: 5,
    // borderRadius: 10,
    // backgroundColor: 'white',
    flexDirection: 'row',
    padding: 5,
    paddingLeft: 15,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageView: {
    padding: 5,
    marginRight: 25,
    alignItems: 'center',
  },
  image: {
    width: 40,
    height: 40,
  },
  textView: {
    alignItems: 'center',
    marginRight: 20,
    width: 100,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default SocialIcon;
