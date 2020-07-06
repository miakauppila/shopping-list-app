import React, {useState} from 'react';
import {View, StyleSheet, FlatList, Alert} from 'react-native';
import 'react-native-get-random-values';
import {uuid} from 'uuidv4';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
  const [items, setItems] = useState([
    {id: uuid(), text: 'Milk'},
    {id: uuid(), text: 'Eggs'},
    {id: uuid(), text: 'Bread'},
    {id: uuid(), text: 'Juice'},
  ]);

  const deleteItemHandler = id => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  };

  const addItemHandler = itemText => {
    if (!itemText) {
      // Alert with standard OK button
      Alert.alert('Error', 'Please enter an item');
    } else {
      setItems(prevItems => [...prevItems, {id: uuid(), text: itemText}]);
    }
  };

  return (
    <View style={styles.container}>
      <Header title="Shopping List" />
      <AddItem addItem={addItemHandler} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItemHandler} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
  },
});

export default App;
