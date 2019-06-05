import * as React from 'react';
import { Text, View, StyleSheet, Image, Animated, Dimensions } from 'react-native';

export default class Notation extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      firstNumber: 0,
      lastNumber: 0,
      scaleTarget: 0,
      isTop: true,
      xAnimated: new Animated.Value(Dimensions.get('window').width /2),
      scaleAnimated: new Animated.Value(1),
      midScreen: Dimensions.get('window').width /2
    };
  }

  componentDidMount() {
    this.computeValue(this.props.value);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({isTop: nextProps.scrollY == 0 }, ()=>{
      Animated.timing(this.state.xAnimated, {
        toValue: this.state.isTop ? this.state.midScreen : 30
      }).start();
      Animated.timing(this.state.scaleAnimated, {
        toValue: this.state.isTop ? 1 : 0.5
      }).start();
    });
  }

  computeValue(value){
      const firstNumber = Math.floor(value);
      const lastNumber = Math.floor((value - firstNumber) * 100);
      this.setState({ firstNumber, lastNumber });
  }

  render() {
    let { fadeAnim } = this.state;
    return (
        <Animated.View style={[styles.container,{
          transform: [{translateX: this.state.xAnimated},{scale: this.state.scaleAnimated}],
        }]}>
          <Text style={styles.firstNumber}>
            {this.state.firstNumber}
          </Text>
          <Text style={styles.lastNumber}>
            {this.state.lastNumber}
          </Text>
          <Image style={styles.logo} source={require('../assets/icon.png')} />
        </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    alignItems: 'center',
   justifyContent: 'center',
   flexDirection: 'row',
    height: 100,
    width: 100,
    top: 10,
    left: -50,
    marginTop: 25,
  },
  firstNumber: {
    top: 0,
    fontSize: 100,
    color: '#20B5E0',
    textAlign: 'center',
    textShadowColor: '#20B5E0',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  },
  lastNumber: {
    marginTop: 65,
    fontSize: 20,
    color: '#20B5E0',
    textAlign: 'center',
    textShadowColor: '#20B5E0',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10

  },
  logo: {
    height: 0,
    width: 0,
  }
});
