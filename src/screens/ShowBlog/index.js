import React, {useState, useEffect, useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {BlogContext} from '../../AppContext';

const ShowBlog = () => {
  const navigator = useNavigation();
  const [selectedBlog, setSelectedBlog] = useState({});
  const BlogPost = useContext(BlogContext);

  const selectedBlogID = navigator
    .getState()
    .routes.find(route => route.name === 'Show Blog').params.id;

  useEffect(() => {
    const selectedBlogPost = BlogPost.data.find(
      blog => blog.id === selectedBlogID,
    );
    setSelectedBlog(selectedBlogPost);
  }, [BlogPost.data, selectedBlogID]);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>{selectedBlog.title}</Text>
        <Text style={styles.cardDescription}>{selectedBlog.content}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  card: {
    backgroundColor: '#ECECEC',
    borderRadius: 10,
    padding: 5,
  },
  cardTitle: {
    fontSize: 30,
    color: '#222222',
  },
  cardDescription: {
    fontSize: 20,
    color: '#222222',
  },
});
export default ShowBlog;
