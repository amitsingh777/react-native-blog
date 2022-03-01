import React, {useState, useContext, useEffect} from 'react';
import {BlogContext} from '../../AppContext';
import {useNavigation} from '@react-navigation/native';
import GenericForm from '../../components/GenericForm';

const EditBlog = () => {
  const [title, setTitle] = useState('');
  const navigation = useNavigation();
  const [content, setContent] = useState('');
  const BlogPost = useContext(BlogContext);

  const selectedBlogID = navigation
    .getState()
    .routes.find(route => route.name === 'Edit Blog').params.id;
  useEffect(() => {
    const selectedBlog = BlogPost.data.find(blog => blog.id === selectedBlogID);

    setTitle(selectedBlog.title);
    setContent(selectedBlog.content);
  }, [selectedBlogID, BlogPost.data]);

  const onButtonPress = () => {
    BlogPost.editBlog({
      id: selectedBlogID,
      title: title,
      content: content,
    });
    navigation.navigate('Show Blog', {id: selectedBlogID});
  };
  return (
    <GenericForm
      setContent={setContent}
      setTitle={setTitle}
      title={title}
      content={content}
      onButtonPress={onButtonPress}
    />
  );
};

export default EditBlog;
