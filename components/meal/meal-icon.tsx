import React from "react";
import { StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';

import { Text, View } from '../Themed';
import styles from './meal-style'

interface MealIconProps {
    description: string;
}

// find awesome icons here: https://oblador.github.io/react-native-vector-icons/

export default class MealIcon extends React.Component<MealIconProps> {

  render(){
      return(
        <View style={styles.getStartedContainer}>
          <Icon name={this.props.description} size={30} color="rgba(10,200,255,0.8)"/>
        </View>
      )
  }
}


