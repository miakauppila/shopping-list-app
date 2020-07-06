import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const AddItem = props => {
  const [text, setText] = useState('');

  const onChangeHandler = textValue => setText(textValue);

  const onPressHandler = () => {
    props.addItem(text);
    setText('');
    Keyboard.dismiss();
  };

  return (
    <View>
      <TextInput
        placeholder="Add new item..."
        style={styles.input}
        onChangeText={onChangeHandler}
        value={text}
      />
      <TouchableOpacity style={styles.button} onPress={onPressHandler}>
        <Text style={styles.buttonText}>
          <Icon name="plus" size={20} /> Add item
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 18,
  },
  button: {
    backgroundColor: '#c2bad8',
    padding: 9,
    margin: 5,
  },
  buttonText: {
    color: '#483d8b',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default AddItem;
