import React from "react";
import Icon from 'react-native-vector-icons/FontAwesome5';

interface MealIconProps {
    description: string;
}

// find awesome icons here: https://oblador.github.io/react-native-vector-icons/

export default class MealIcon extends React.Component<MealIconProps> {

  render(){
      return(
        <Icon name={this.props.description} size={30} color="#900" />
      )
  }
}


