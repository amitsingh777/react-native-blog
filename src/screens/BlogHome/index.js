import React, {useContext, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import BlogAbstractCard from '../../components/BlogAbstractCard';
import {BlogContext} from '../../AppContext';

const BlogHome = () => {
  const blogContext = useContext(BlogContext);
  const navigation = useNavigation();
  const onDeletePress = id => {
    blogContext.dispatchData({type: 'DELETE_BLOG', payload: {id: id}});
  };

  const onCardPress = blog => {
    navigation.navigate('Show Blog', {id: blog.id});
  };

  const renderList = blog => {
    return (
      <BlogAbstractCard
        {...blog}
        onDeletePress={onDeletePress}
        onCardPress={() => onCardPress(blog)}
      />
    );
  };

  return (
    <View>
      <FlatList
        data={blogContext.data}
        keyExtractor={blog => blog.id}
        renderItem={({item}) => renderList(item)}
      />
    </View>
  );
};

export default BlogHome;
