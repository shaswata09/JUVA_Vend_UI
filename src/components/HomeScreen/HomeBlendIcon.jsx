import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';

const HomeBlendIcon = props => {
  return (
    <TouchableOpacity>
      <View style={styles.blendView}>
        <View style={styles.imageView}>
          <Image source={props.img} style={styles.image} />
        </View>
        <View style={styles.textView}>
          <Text style={styles.text}>{props.imgText}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  blendView: {
    shadowColor: 'black',
    // shadowOpacity: 0.26,
    // shadowOffset: {width: 0, height: 2},
    // shadowRadius: 8,
    // elevation: 5,
    // borderRadius: 10,
    // backgroundColor: 'white',
    // marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageView: {
    alignItems: 'center',
    marginTop: 15,
  },
  image: {
    width: 70,
    height: 70,
  },
  textView: {
    paddingTop: 15,
    alignItems: 'center',
    marginRight: 12,
    width: 110,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default HomeBlendIcon;
