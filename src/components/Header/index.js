import React from 'react';
import PropTypes from 'prop-types';

import {useNavigation} from '@react-navigation/native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const HeaderRightButton = ({onButtonPress}) => {
  const navigator = useNavigation();
  return (
    <MaterialCommunityIcons
      name="plus"
      color="#5463FF"
      size={30}
      onPress={() => onButtonPress(navigator)}
    />
  );
};
export const HeaderRightButtonEdit = ({onButtonPress}) => {
  const navigator = useNavigation();
  return (
    <MaterialCommunityIcons
      name="playlist-edit"
      size={30}
      color="#5463FF"
      onPress={() => onButtonPress(navigator)}
    />
  );
};

HeaderRightButton.propType = {
  onButtonPress: PropTypes.func,
};
