import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BlogHome from '../screens/BlogHome';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Blog"
          component={BlogHome}
          options={{title: 'Blog'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
