import React, {useContext, useEffect} from 'react';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import BlogContext from '../../AppContext';

const BlogHome = () => {
  const blogContext = useContext(BlogContext);
  console.log('rendered');
  useEffect(() => {
    const action = {
      type: 'CREATE_BLOG',
      payload: {
        data: {
          id: 0,
          title: 'My Success',
          content:
            'These are my marching steps towards my success, which is surreal!',
        },
      },
    };
    blogContext.dispatchData(action);
  }, []);
  const myIcon = <Icon name="plus" size={30} color="#900" />;
  return <Text>Blog Home {myIcon}</Text>;
};

export default BlogHome;
