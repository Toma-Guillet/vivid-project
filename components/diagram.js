import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class Diagram extends React.Component {
  render() {
    return (
      <View style={styles.container}></View>
    );

  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
    width: '100%',
    flexDirection: 'row',
    top: 0,
    backgroundColor: 'blue',
  }
});
