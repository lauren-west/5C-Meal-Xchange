import React from "react";
import {Button as NativeButton} from "react-native";

interface MealButtonProps {
    text: string;
    onPress: () => void;
}

export default class MealButton extends React.Component<MealButtonProps>{
    render(){
        return(
            <NativeButton 
                onPress={this.props.onPress}
                title={this.props.text}
                accessibilityLabel="This is a button"
            />
        )
    }
}