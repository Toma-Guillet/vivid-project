import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

import Log from './log';

export default class Logs extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Log />
        <Log />
        <Log />
        <Log />
        <Log />
        <Log />
        <Log />
        <Log />
        <Log />
        <Log />
        <Log />
        <Log />
      </View>
    );

  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 'auto',
    width: '100%',
    top: 0,
    marginTop: 25,
  }
});
