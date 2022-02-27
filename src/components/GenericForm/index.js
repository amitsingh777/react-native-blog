import React, {useState, useContext} from 'react';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';

const GenericForm = ({onButtonPress, title, content, setTitle, setContent}) => {
  return (
    <View style={style.form}>
      <View>
        <Text style={style.text}>Enter Title:</Text>
        <TextInput
          onChangeText={text => {
            setTitle(text);
          }}
          value={title}
          style={style.textInput}
        />
      </View>
      <View>
        <Text style={style.text}>Enter Content:</Text>
        <TextInput
          onChangeText={text => {
            setContent(text);
          }}
          value={content}
          style={[style.textInput]}
          multiline={true}
        />
      </View>
      <Button color="#5463FF" title="Save" onPress={() => onButtonPress()} />
    </View>
  );
};

const style = StyleSheet.create({
  text: {
    fontSize: 20,
    marginBottom: 5,
  },
  textInput: {
    fontSize: 20,

    borderBottomWidth: 1,
    borderColor: '#5463FF',
    marginBottom: 10,
    padding: 2,
  },
  form: {
    paddingTop: 10,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
});

export default GenericForm;
