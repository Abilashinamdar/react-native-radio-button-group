import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Circle from './Circle';

class RadioGroup extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedOptionId: props.activeButtonId,
    };
  }

  static propTypes = {
    options: PropTypes.arrayOf({
      id: PropTypes.string.isRequired,
      label: PropTypes.string,
      labelView: PropTypes.element,
    }).isRequired,
    horizontal: PropTypes.bool,
    circleStyle: PropTypes.object,
    activeButtonId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    onChange: PropTypes.func,
  };

  static defaultProps = {
    horizontal: false,
  };

  onPress = option => () => {
    if (option.id === this.state.selectedOptionId) {
      return;
    }

    this.setState({ selectedOptionId: option.id });
    this.props.onChange && this.props.onChange(option);
  };

  render() {
    const { options, horizontal, circleStyle } = this.props;
    return (
      <View style={[styles.container, horizontal && { flexDirection: 'row' }]}>
        {options.map(option => (
          <TouchableOpacity
            key={option.id}
            style={styles.radio}
            onPress={this.onPress(option)}
          >
            <Circle
              active={this.state.selectedOptionId === option.id}
              circleStyle={circleStyle}
            />
            {option.label && <Text>{option.label}</Text>}
            {!option.label && option.labelView}
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
  },
  radio: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginRight: 10,
  },
});

export default RadioGroup;
