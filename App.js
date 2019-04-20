import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import Notation from './components/notation';
import Plop from './components/plop';
import Diagram from './components/diagram';
import Logs from './components/logs';

import data from './store/data';
import ee from './store/event';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { scrollY: 0 };
  }

  componentDidMount(){
    ee.on('redraw', () => {
      this.forceUpdate();
    })
  }

  onScroll(e){
    const scrollY = e.nativeEvent.contentOffset.y;
    this.setState({ scrollY });
  }

  render() {
    return (
      <ScrollView style={styles.container} onScroll={(e) => this.onScroll(e)}>
        <Notation style={styles.notation} value={data.number} scrollY={this.state.scrollY} />
        <Diagram />
        <Logs />
        <Plop />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
