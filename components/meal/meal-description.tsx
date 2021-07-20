import React from "react";
import { Text, View } from '../Themed';
import styles from './meal-style'

import { StyleSheet, TouchableOpacity } from 'react-native';

interface MealDescriptionProps {
    description: string;
}

export default class MealDescription extends React.Component<MealDescriptionProps> {

  render(){
      return(
        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          {this.props.description}
        </Text>
      )
  }
}

