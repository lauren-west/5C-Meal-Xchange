import React from "react";
import { Text } from "react-native";

interface MealTitleProps {
  title: String;
}

export default class MealTitle extends React.Component<MealTitleProps> {
  render() {
    return <Text>{this.props.title}</Text>;
  }
}
