import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  TouchableNativeFeedback,
} from 'react-native';
import SingleCate from '../../components/SingleCate';
import axios from '../../axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AntDesign from 'react-native-vector-icons/AntDesign';

const {height, width} = Dimensions.get('window');

const ListCate = ({navigation}) => {
  const [cate, setCate] = React.useState([]);
  const [load, setLoad] = React.useState(true);

  useEffect(() => {
    async function fetchData() {
      const data = await axios.get('/category');
      setCate(data.data);
      setLoad(false);
    }
    fetchData();
  }, [cate, load]);

  const SingleItem = ({item}) => (
    <SingleCate
      title={item.name}
      editHandler={() => {
        navigation.navigate('UpdateCate', item);
      }}
      deleteHandler={async () => {
        const token = await AsyncStorage.getItem('@token');
        await axios.delete(`/category/${item._id}`, {
          headers: {
            'auth-token': token,
          },
        });
      }}
      handleClick={() => {
        navigation.navigate('Meals', {
          screen: 'ListMeal',
          params: {name: item.name},
        });
      }}
    />
  );

  return (
    <View style={styles.container}>
      {cate.length === 0 ? (
        <>
          <Text style={{color: '#000'}}>No categories found</Text>
        </>
      ) : (
        <>
          <FlatList
            data={cate}
            renderItem={SingleItem}
            keyExtractor={item => item._id}
          />
        </>
      )}
      <TouchableNativeFeedback
        onPress={() => {
          navigation.navigate('CreateCate');
        }}>
        <View style={styles.add}>
          <AntDesign name="plus" size={45} color="#fff" />
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

export default ListCate;
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 10,
    flex: 1,
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
  },
});
