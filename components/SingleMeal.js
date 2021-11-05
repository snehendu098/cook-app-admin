import React from 'react';
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';

const {height, width} = Dimensions.get('window');

const SingleMeal = props => {
  return (
    <ImageBackground
      source={{uri: `http://192.168.0.106:5000/uploads/${props.imageUrl}`}}
      resizeMode="cover"
      style={styles.imageBack}>
      <View style={styles.subImage}>
        <TouchableOpacity
          onPress={props.updateHandler}
          style={{
            padding: 10,
            backgroundColor: '#347548',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <AntDesign name="edit" size={15} color="#fff" />
        </TouchableOpacity>
        <View
          style={{
            width: 0.7 * width,
            alignItems: 'center',
          }}>
          <Text style={styles.text} numberOfLines={1}>
            {props.name}
          </Text>
        </View>
        <TouchableOpacity
          onPress={props.deleteHandler}
          style={{
            padding: 10,
            backgroundColor: '#800f19',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <AntDesign name="delete" size={15} color="#fff" />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default SingleMeal;

const styles = StyleSheet.create({
  imageBack: {
    width: 0.95 * width,
    height: 0.25 * height,
    marginTop: 10,
    justifyContent: 'flex-end',
    backgroundColor: '#fff',
    elevation: 10,
  },
  subImage: {
    width: '100%',
    height: '20%',
    backgroundColor: 'rgba(144, 130, 130, 0.6)',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '800',
  },
});
