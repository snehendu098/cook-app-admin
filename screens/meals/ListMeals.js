import AsyncStorage from '@react-native-async-storage/async-storage';
import {Picker} from '@react-native-picker/picker';
import {useIsFocused} from '@react-navigation/core';
import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableNativeFeedback,
} from 'react-native';
import axios from '../../axios';
import SingleMeal from '../../components/SingleMeal';
import AntDesign from 'react-native-vector-icons/AntDesign';

const {width, height} = Dimensions.get('window');

const ListMeals = ({navigation, route}) => {
  const item = route.params;
  const [selectedValue, setSelectedValue] = useState(item ? item.name : '');
  const [cate, setCate] = useState([]);
  const [meals, setMeals] = useState([]);

  const filterMeals = meals.filter(meal => meal.category === selectedValue);

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get('/category');
      setCate(data.data);

      const meals = await axios.get('/meals');
      setMeals(meals.data);
    };

    fetchData();
  }, [meals]);
  // console.log(selectedValue);

  const RenderItem = ({item}) => (
    <SingleMeal
      name={item.name}
      imageUrl={item.imageUrl}
      updateHandler={() => {}}
      deleteHandler={async () => {
        const token = await AsyncStorage.getItem('@token');
        await axios.delete(`/meals/${item._id}`, {
          headers: {
            'auth-token': token,
          },
        });
      }}
    />
  );

  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedValue}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        dropdownIconColor="#000">
        {/*  */}
        {cate.map(item => (
          <Picker.Item key={item._id} label={item.name} value={item.name} />
        ))}
        {/*  */}
      </Picker>
      {filterMeals.length === 0 ? (
        <Text>No Meals found</Text>
      ) : (
        <FlatList
          data={filterMeals}
          renderItem={RenderItem}
          keyExtractor={item => item._id}
        />
      )}
      <View style={styles.add}>
        <TouchableNativeFeedback
          onPress={() =>
            navigation.navigate('CreateMeals', {cate, selected: selectedValue})
          }>
          <AntDesign name="plus" size={45} color="#fff" />
        </TouchableNativeFeedback>
      </View>
    </View>
  );
};

export default ListMeals;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  picker: {
    height: 0.08 * height,
    width: 0.95 * width,
    color: '#000',
    backgroundColor: 'white',
    elevation: 5,
  },
  add: {
    position: 'absolute',
    width: 0.2 * width,
    height: 0.2 * width,
    backgroundColor: '#d17d00',
    bottom: 10,
    right: 10,
    borderRadius: (0.2 * width) / 2,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
});
