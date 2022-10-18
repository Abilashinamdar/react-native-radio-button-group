import React, { PureComponent } from "react";
import { View, StyleSheet, Animated } from "react-native";
import PropTypes from "prop-types";

class Circle extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      animatedHeight: new Animated.Value(0),
      animatedWidth: new Animated.Value(0),
    };
    this.setWidthHeight = this.setWidthHeight.bind(this);
  }

  static propTypes = {
    active: PropTypes.bool,
    circleStyle: PropTypes.object,
  };

  static defaultProps = {
    active: false,
    circleStyle: {
      fillColor: "#279315",
    },
  };

  setWidthHeight(event) {
    const active = this.props.active;
    const height = event.nativeEvent.layout.height;
    const width = event.nativeEvent.layout.width;
    Animated.parallel([
      Animated.timing(this.state.animatedHeight, {
        toValue: active ? height - 6 : 0,
        duration: 200,
        useNativeDriver: false,
      }),
      Animated.timing(this.state.animatedWidth, {
        toValue: active ? width - 6 : 0,
        duration: 200,
        useNativeDriver: false,
      }),
    ]).start();
  }

  render() {
    const { circleStyle } = this.props;
    return (
      <View
        key={this.props.active}
        style={[styles.circle, circleStyle]}
        onLayout={this.setWidthHeight}
      >
        <Animated.View
          style={[
            styles.fill,
            {
              backgroundColor: circleStyle.fillColor,
              height: this.state.animatedHeight,
              width: this.state.animatedWidth,
            },
          ]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  circle: {
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    // customizable properties are as follows...
    width: 22,
    height: 22,
    borderColor: "#000",
    borderWidth: 0.8,
    marginRight: 10,
  },
  fill: {
    borderRadius: 20,
    backgroundColor: "#279315",
  },
});

export default Circle;
