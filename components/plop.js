import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Button } from 'react-native';
import ee from '../store/event';

export default class Plop extends React.Component {
  onPressIncrement() {
      ee.emit('plop');
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={this.onPressIncrement}
          title="Augmenter valeur"
          color="#841584"
          accessibilityLabel="Augmente valeur"
        />
      </View>
    );

  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 128,
    width: 128,
  }
});
