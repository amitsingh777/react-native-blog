import React from 'react';

import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {HeaderRightButton, HeaderRightButtonEdit} from '../components/Header';
import BlogHome from '../screens/BlogHome';
import EditBlog from '../screens/EditBlog';
import CreateBlog from '../screens/CreateBlog';
import ShowBlog from '../screens/ShowBlog';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  const onBlogHomeButtonPress = navigator => {
    navigator.navigate('Create Blog');
  };
  const onEditBlogButtonPress = navigator => {
    navigator.navigate('Edit Blog');
  };
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Blog">
        <Stack.Screen
          name="Blog"
          component={BlogHome}
          options={{
            headerTitle: 'Blogs List',
            headerRight: () => (
              <HeaderRightButton onButtonPress={onBlogHomeButtonPress} />
            ),
          }}
        />
        <Stack.Screen name="Create Blog" component={CreateBlog} />
        <Stack.Screen name="Edit Blog" component={EditBlog} />
        <Stack.Screen
          name="Show Blog"
          component={ShowBlog}
          options={{
            headerTitle: 'Show Blog',
            headerRight: () => (
              <HeaderRightButtonEdit onButtonPress={onEditBlogButtonPress} />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
