import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const {height, width} = Dimensions.get('window');

const SingleCate = props => {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={props.editHandler}
        style={{
          padding: 10,
          backgroundColor: '#347548',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <AntDesign name="edit" size={24} color="#fff" />
      </Pressable>
      <Pressable onPress={props.handleClick}>
        <Text style={styles.text}>{props.title}</Text>
      </Pressable>
      <Pressable
        onPress={props.deleteHandler}
        style={{
          padding: 10,
          backgroundColor: '#800f19',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <AntDesign name="delete" size={24} color="#fff" />
      </Pressable>
    </View>
  );
};

export default SingleCate;

const styles = StyleSheet.create({
  container: {
    width: 0.95 * width,
    height: 0.07 * height,
    backgroundColor: '#e5e88e',
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  text: {
    color: '#000',
    fontSize: 20,
    fontWeight: '900',
    textAlign: 'center',
  },
});
