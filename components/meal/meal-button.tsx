import React from "react";
import {Button as NativeButton} from "react-native";

interface MealButtonProps {
    text: string;
    onPress: () => void;
    color: string
    
}

export default class MealButton extends React.Component<MealButtonProps>{
    render(){
        return(
            <NativeButton 
                onPress={this.props.onPress}
                title={this.props.text}
                color={this.props.color}
                accessibilityLabel="This is a button"
            />
        )
    }
}