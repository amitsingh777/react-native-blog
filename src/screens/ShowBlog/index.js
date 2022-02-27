import React, {useState, useEffect, useContext} from 'react';
import {View, Text} from 'react-native';
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
    <View>
      <Text>{selectedBlog.title}</Text>
      <Text>{selectedBlog.content}</Text>
    </View>
  );
};

export default ShowBlog;
