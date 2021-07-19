import React from "react";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
// import Button from "./button";
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
            <MealIcon description="check-square"/>
            <MealDescription description="Hamburger contain meat yum!" />
            <MealWrittenReview/>
            {/* <Button text="Submit Review" onPress={} color="#846434"></Button> */}
            {/* <StatusBar style="auto" /> */}
        
        </View>
    );
  }
}

// <MealIcon description="coffee"/>