import React from "react";
import { Icon } from 'react-native-vector-icons'

interface MealIconProps {
    description: string;
}

export default class MealIcon extends React.Component<MealIconProps> {

  render(){
      return(
        <Icon name={this.props.description} size={30} color="#900" />
      )
  }
}


