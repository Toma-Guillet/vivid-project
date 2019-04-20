import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class Notation extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          {this.props.value}
        </Text>
        <Image style={styles.logo} source={require('../assets/icon.png')} />
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
    height: 0,
    width: 0,
  }
});
