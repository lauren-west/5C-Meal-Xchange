import React from "react";
import { Text, View } from '../Themed';
import styles from './meal-style'

interface MealTitleProps {
  title: String;
}

export default class MealTitle extends React.Component<MealTitleProps> {
  render() {
    return(
      <Text
        style={styles.getStartedText}
        lightColor="rgba(0,0,0,0.8)"
        darkColor="rgba(255,255,255,0.8)">
        {this.props.title}
      </Text>
    )
  }
}
