import {Picker} from '@react-native-picker/picker';
import React, {useState} from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const CreateMeals = ({navigation, route}) => {
  const {cate, selected} = route.params;
  console.log(cate, selected);
  const [selectedValue, setSelectedValue] = useState(selected);
  //
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setcategory] = useState('');
  const [nonVeg, setNonVeg] = useState(false);
  const [meatIncluded, setMeatIncluded] = useState(false);
  const [steps, setSteps] = useState('');
  const [materials, setMaterials] = useState('');

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
          selectedValue={selectedValue}
          style={styles.picker}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
          dropdownIconColor="#000">
          {cate.map(item => (
            <Picker.Item key={item._id} label={item.name} value={item.name} />
          ))}
        </Picker>
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
