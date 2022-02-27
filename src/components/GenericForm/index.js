import React, {useState, useContext} from 'react';
import {View, Text, TextInput, TouchableOpacity, Button} from 'react-native';

const GenericForm = ({onButtonPress, title, content, setTitle, setContent}) => {
  return (
    <View>
      <View>
        <Text>Enter Title:</Text>
        <TextInput
          onChangeText={text => {
            setTitle(text);
          }}
          value={title}
        />
      </View>
      <View>
        <Text>Enter Content:</Text>
        <TextInput
          onChangeText={text => {
            setContent(text);
          }}
          value={content}
        />
      </View>
      <Button title="Save" onPress={() => onButtonPress()} />
    </View>
  );
};

export default GenericForm;
