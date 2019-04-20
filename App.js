import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Notation from './components/notation';
import Plop from './components/plop';

import data from './store/data';
import ee from './store/event';

export default class App extends React.Component {
  componentDidMount(){
    ee.on('redraw', () => {
      this.forceUpdate();
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Notation value={data.number} />
        <Plop />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
