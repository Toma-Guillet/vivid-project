import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

import Log from './log';

export default class Logs extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      valueArray: 0
    };
  }
  componentDidMount() {
    const valueArray = this.props.dataLogs.length;
    this.setState({ valueArray });
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.dataLogs.length !== this.state.valueArray){
      const valueArray = nextProps.dataLogs.length;
      this.setState({ valueArray });
    }
  }

  render() {
    const listLogs = [];
    for(let i=(this.props.dataLogs.length -1); i>=0; i--) {
      const dataLog = this.props.dataLogs[i];
      listLogs.push(
        <Log
          key = {i}
          date = {dataLog.date}
          logType = {dataLog.logType}
          value = {dataLog.value}
          category = {dataLog.category}
        />
      )
    }
    return (
      <View style={styles.container}>
        <View style={styles.whiteSpace}/>
        {listLogs}
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
  },
  whiteSpace: {
    position: 'relative',
    width: '100%',
    height: 290
  }
});
