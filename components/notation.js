import * as React from 'react';
import { Text, View, StyleSheet, Image, Animated } from 'react-native';

export default class Notation extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      firstNumber: 0,
      lastNumber: 0,
      scale: new Animated.Value(1),
      translate: new Animated.Value(0),
      stateAnimation: false,
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

      if(scrollValue == 0 && this.state.stateAnimation){
        Animated.timing(
          this.state.scale,
          {
            toValue: 1,
            duration: 200,
          },
          this.state.translate,
          {
            toValue: -150,
            duration: 200,
          }
        ).start();
        this.setState({ stateAnimation: false });
      }else if(scrollValue != 0 && !this.state.stateAnimation){
        Animated.timing(
          this.state.scale,
          {
            toValue: .5,
            duration: 500,
          },
          this.state.translate,
          {
            toValue: -150,
            duration: 500,
          }
        ).start();
        this.setState({ stateAnimation: true });
      }
    }
  }

  computeValue(value){
      const firstNumber = Math.floor(value);
      const lastNumber = Math.floor((value - firstNumber) * 100);
      this.setState({ firstNumber, lastNumber });
  }

  render() {
    let { fadeAnim } = this.state;
    return (
        <Animated.View style={[styles.container,{transform: [
          {scale: this.state.scale},
          {translateX: this.state.scale.interpolate({
            inputRange: [0, 1],
            outputRange: [-500, 0]  // 0 : 150, 0.5 : 75, 1 : 0
          })},
          {perspective: 1000}, // without this line this Animation will not render on Android while working fine on iOS
        ]}]}>
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
    alignItems: 'center',
    justifyContent: 'center',
    height: 'auto',
    flexDirection: 'row',
    top: 0,
    marginTop: 25,
    marginBottom: 25,
    position: 'absolute',
  },
  firstNumber: {
    bottom: 0,
    fontSize: 100,
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
