import React from 'react';
import {Pressable, Text, StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const BlogAbstractCard = ({title, id, onDeletePress, onCardPress}) => {
  const deleteIcon = (
    <MaterialCommunityIcons
      name="delete"
      color="#5463FF"
      size={30}
      onPress={() => onDeletePress(id)}
    />
  );

  return (
    <Pressable style={styles.blogCardAbstractContainer} onPress={onCardPress}>
      <Text style={styles.text}>{title}</Text>
      {deleteIcon}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  blogCardAbstractContainer: {
    borderTopWidth: 1,
    borderStyle: 'solid',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    // flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});

export default BlogAbstractCard;
