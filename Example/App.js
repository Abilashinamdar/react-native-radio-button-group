/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RadioGroup from 'react-native-radio-button-group';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', margin: 20}}>
          Vertical
        </Text>
        <RadioGroup
          options={radiogroup_options}
          onChange={option => this.setState({ selectedOption: option })}
        />

        <Text style={{ fontSize: 18, fontWeight: 'bold', margin: 20 }}>
          Horizontal
        </Text>
        <RadioGroup
          horizontal
          options={radiogroup_options}
          onChange={option => this.setState({ selectedOption: option })}
        />

        <Text style={{ fontSize: 18, fontWeight: 'bold', margin: 20 }}>
          Label View
        </Text>
        <RadioGroup
          options={labelViewOptions}
          onChange={option => this.setState({ selectedOption: option })}
        />

        <Text style={{ fontSize: 18, fontWeight: 'bold', margin: 20 }}>
          Customized button with bigger size radio
        </Text>
        <RadioGroup
          options={labelViewOptions}
          onChange={option => this.setState({ selectedOption: option })}
          activeButtonId={0}
          circleStyle={{
            width: 30,
            height: 30,
            fillColor: 'blue',
            borderColor: 'yellow',
            borderWidth: 1.5,
          }}
        />
      </View>
    );
  }
}

const radiogroup_options = [
  { id: 0, label: 'Button1' },
  { id: 1, label: 'Button2' },
  { id: 2, label: 'Button3' },
  { id: 3, label: 'Button4' },
];

const labelViewOptions = [
  {
    id: 1,
    labelView: (
      <Text>
        React Native by <Text style={{ color: 'green' }}>Facebook</Text>( Menlo
        Park, California, United States )
      </Text>
    ),
  },
  {
    id: 2,
    labelView: (
      <Text>
        React native build{' '}
        <Text style={{ color: 'green' }}>Android and IOS</Text> apps.
      </Text>
    ),
  },
  {
    id: 3,
    labelView: (
      <Text style={{ flex: 1 }}>
        React Native{' '}
        <Text style={{ color: 'red' }}>
          {' '}
          Build native mobile apps using JavaScript and React{' '}
        </Text>
      </Text>
    ),
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 80,
    padding: 20,
  },
});
