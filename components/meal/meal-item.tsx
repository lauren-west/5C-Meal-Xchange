import React from "react";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import MealButton from "./meal-button";
import MealDescription from "./meal-description";
import MealIcon from "./meal-icon";
import MealTitle from "./meal-title";
import MealWrittenReview from "./meal-written-review";

// interface MealItemProps {
//   title: String;
// }

export default class MealItem extends React.Component<{}> {
  render() {
    return (
        <View>
            <MealTitle title="Hamburger" />
            <MealIcon description="hamburger"/>
            <MealDescription description="Hamburger contain meat yum!" />
            <MealButton text="Choose Hamburger" onPress={onPress} ></MealButton>
            <StatusBar style="auto" />
        </View>
    );
  }
}

function onPress(){
  console.log("Done Pressed!")
}

// <MealIcon description="coffee"/>