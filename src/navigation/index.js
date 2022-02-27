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
  const onEditBlogButtonPress = navigation => {
    const selectedBlogID = navigation
      .getState()
      .routes.find(route => route.name === 'Show Blog').params.id;
    navigation.navigate('Edit Blog', {id: selectedBlogID});
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
          options={({navigation}) => {
            return {
              headerTitle: 'Show Blog',
              headerRight: () => (
                <HeaderRightButtonEdit
                  onButtonPress={() => onEditBlogButtonPress(navigation)}
                />
              ),
            };
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
