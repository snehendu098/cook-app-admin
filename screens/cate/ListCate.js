import React, {useEffect} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import SingleCate from '../../components/SingleCate';
import axios from '../../axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
        console.log(item._id);
      }}
      deleteHandler={async () => {
        const token = await AsyncStorage.getItem('@token');
        await axios.delete(`/category/${item._id}`, {
          headers: {
            'auth-token': token,
          },
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
        <FlatList
          data={cate}
          renderItem={SingleItem}
          keyExtractor={item => item._id}
        />
      )}
    </View>
  );
};

export default ListCate;
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 10,
  },
});
