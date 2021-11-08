import {Picker} from '@react-native-picker/picker';
import {launchImageLibrary} from 'react-native-image-picker';
import React, {useState} from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const CreateMeals = ({navigation, route}) => {
  const {cate, selected} = route.params;
  console.log(cate, selected);
  //
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setcategory] = useState('');
  const [nonVeg, setNonVeg] = useState(false);
  const [meatIncluded, setMeatIncluded] = useState(false);
  const [steps, setSteps] = useState('');
  const [materials, setMaterials] = useState('');
  const [image, setImage] = useState(null);

  const handleImage = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        quality: 1,
      },
      res => {
        console.log(res);
      },
    );
  };

  return (
    <View style={{flex: 1}}>
      <ScrollView contentContainerStyle={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Name of Meal"
          placeholderTextColor="#737574"
          value={name}
          onChangeText={e => setName(e)}
        />
        <TextInput
          style={styles.input}
          placeholder="Description of Meal"
          placeholderTextColor="#737574"
          value={description}
          onChangeText={e => setDescription(e)}
        />

        <Text style={styles.danger}>Separate the steps by a ","</Text>
        <TextInput
          value={steps}
          onChangeText={e => setSteps(e)}
          style={styles.input}
          placeholder="Enter Steps"
          placeholderTextColor="#737574"
        />

        <Text style={styles.danger}>Separate the materials by a ","</Text>
        <TextInput
          value={materials}
          onChangeText={e => setMaterials(e)}
          style={styles.input}
          placeholder="Enter Materials"
          placeholderTextColor="#737574"
        />

        <Picker
          selectedValue={category}
          style={styles.picker}
          onValueChange={(itemValue, itemIndex) => setcategory(itemValue)}
          dropdownIconColor="#000">
          {cate.map(item => (
            <Picker.Item key={item._id} label={item.name} value={item.name} />
          ))}
        </Picker>
        <TouchableOpacity
          style={{
            width: 0.5 * width,
            height: 0.06 * height,
            backgroundColor: '#fff',
            marginTop: 10,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 30,
            elevation: 5,
          }}
          onPress={() => setNonVeg(!nonVeg)}>
          <Text style={{color: '#000'}}>
            {nonVeg ? 'Non-Veg' : 'Vegeterian'}
          </Text>
          <Text style={{color: 'red', fontSize: 10}}>Click to change</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            width: 0.5 * width,
            height: 0.06 * height,
            backgroundColor: '#fff',
            marginTop: 10,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 30,
            elevation: 5,
          }}
          onPress={() => setMeatIncluded(!meatIncluded)}>
          <Text style={{color: '#000'}}>
            {meatIncluded ? 'Meat Included' : 'No Meat Included'}
          </Text>
          <Text style={{color: 'red', fontSize: 10}}>Click to change</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.touchable} onPress={handleImage}>
          <Text style={{color: '#000'}}>Select image</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const {width, height} = Dimensions.get('window');

export default CreateMeals;

const styles = StyleSheet.create({
  input: {
    width: 0.95 * width,
    height: 0.07 * height,
    backgroundColor: '#fff',
    borderRadius: 30,
    elevation: 5,
    marginBottom: 0.03 * height,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: '#000',
    marginTop: 0,
  },
  touchable: {
    width: 0.5 * width,
    height: 0.06 * height,
    backgroundColor: '#fff',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    elevation: 5,
  },
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 10,
  },
  danger: {
    color: 'red',
  },
  picker: {
    height: 0.08 * height,
    width: 0.95 * width,
    color: '#000',
    backgroundColor: 'white',
    elevation: 5,
    borderRadius: 30,
  },
});
