import React from 'react';
import PropTypes from 'prop-types';

import {useNavigation} from '@react-navigation/native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const HeaderRightButton = ({onButtonPress}) => {
  const navigator = useNavigation();
  return (
    <MaterialCommunityIcons.Button
      name="plus"
      color="blue"
      size={20}
      onPress={() => onButtonPress(navigator)}
    />
  );
};
export const HeaderRightButtonEdit = ({onButtonPress}) => {
  const navigator = useNavigation();
  return (
    <MaterialCommunityIcons
      name="playlist-edit"
      fontSize="20"
      color="blue"
      onPress={() => onButtonPress(navigator)}
    />
  );
};

HeaderRightButton.propType = {
  onButtonPress: PropTypes.func,
};
