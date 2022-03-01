import React, {useContext, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import GenericForm from '../../components/GenericForm';
import {BlogContext} from '../../AppContext';

const CreateBlog = () => {
  const blogContext = useContext(BlogContext);
  const navigator = useNavigation();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const onButtonPress = () => {
    blogContext.createBlog({title: title, content: content});
    navigator.navigate('Blog');
  };

  return (
    <GenericForm
      onButtonPress={onButtonPress}
      title={title}
      content={content}
      setTitle={setTitle}
      setContent={setContent}
    />
  );
};

export default CreateBlog;
