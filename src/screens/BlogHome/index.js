import React, {useContext, useEffect} from 'react';
import {Text} from 'react-native';

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
  return <Text>Blog Home</Text>;
};

export default BlogHome;
