import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import Notation from './components/notation';
import Plop from './components/plop';
import Diagram from './components/diagram';
import Logs from './components/logs';

import data from './store/data';
import ee from './store/event';
let isTop = true;

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { scrollY: 0 };
    setInterval(()=>{
    },100)
  }

  componentDidMount(){
    ee.on('redraw', () => {
      this.forceUpdate();
    })
  }

  onScroll(e){
    const scrollY = e.nativeEvent.contentOffset.y;
    if(scrollY === 0 && !isTop || scrollY !== 0 && isTop) {
      if(scrollY === 0) {
        isTop = true
      } else {
        isTop = false;
      }
      this.setState({ scrollY });
    }

  }

  render() {
    return (
      <View style={styles.master} >
        <View style={styles.header}>
          <Notation style={styles.notation} value={data.number} scrollY={this.state.scrollY} />
          <Diagram scrollY={this.state.scrollY} />
        </View>
        <ScrollView style={styles.container} onScroll={(e) => this.onScroll(e)}>
          <Logs dataLogs={data.logs} />
          <Plop />
        </ScrollView >
      </View>
    );
  }
}

const styles = StyleSheet.create({
  master: {
    backgroundColor: '#210349',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
  },
  container: {
    position: 'absolute',
    height: '75%',
    width: '100%',
    top: '25%',
    left: 0
  },
  header: {
    position: 'absolute',
    height: '25%',
    width: '100%',
    top: 0,
    left: 0
  }
});
