import React from "react";
import {Button as NativeButton} from "react-native";

interface ButtonProps {
    text: string;
    onPress: () => void;
    color: string
    
}

export default class Button extends React.Component<ButtonProps>{
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