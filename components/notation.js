import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class Notation extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      firstNumber: 0,
      lastNumber: 0,
      scrollStyle: 100,
    };
  }

  componentDidMount() {
    this.computeValue(this.props.value);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.value !== this.props.value){
      this.computeValue(nextProps.value);
    }
    if(nextProps.scrollY !== this.props.scrollY){
      const scrollValue = nextProps.scrollY;
      let scrollStyle;

      if(scrollValue == 0){
        scrollStyle = 100;
      }else{
        scrollStyle = 50;
      }

      this.setState({ scrollStyle });
    }
  }

  computeValue(value){
      const firstNumber = Math.floor(value);
      const lastNumber = Math.floor((value - firstNumber) * 100);
      this.setState({ firstNumber, lastNumber });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.firstNumber, {fontSize: this.state.scrollStyle}]}>
          {this.state.firstNumber}
        </Text>
        <Text style={styles.lastNumber}>
          {this.state.lastNumber}
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
    height: 'auto',
    flexDirection: 'row',
    top: 0,
    marginTop: 25,
    marginBottom: 25,
  },
  firstNumber: {
    bottom: 0,
  },
  lastNumber: {
    marginTop: 65,
    fontSize: 20,
  },
  logo: {
    height: 0,
    width: 0,
  }
});
