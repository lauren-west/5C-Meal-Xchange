import React from "react";
import {TextInput} from "react-native";

interface MealWrittenReviewState {
  text: string;
}

export default class MealWrittenReview extends React.Component<
  {},
  MealWrittenReviewState
> {
  constructor(props: {}) {
    super(props);
    this.state = {
        text: "",
    };
  }

  onChangeText(text: string) {
    this.setState({
      text: text,
    });
  }

  render() {
    return (
      <TextInput
        onChangeText={(text) => this.onChangeText(text)}
        value={this.state.text}
        placeholder={"Write a Review (Optional)"}
      />
    );
  }
}
