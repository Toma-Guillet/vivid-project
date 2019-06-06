import * as React from 'react';
import { Text, View, StyleSheet, Image, Animated, Dimensions } from 'react-native';
import { Font } from 'expo';

export default class Notation extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      valueArray: 0,
      firstNumber: 0,
      lastNumber: 0,
      scaleTarget: 0,
      isTop: true,
      xAnimated: new Animated.Value(Dimensions.get('window').width /2),
      scaleAnimated: new Animated.Value(1),
      midScreen: Dimensions.get('window').width /2,
      fontLoaded: false,
    };
  }

  async componentDidMount() {
    this.computeValue(this.props.value);
    await Font.loadAsync({
      'abel-regular': require('../assets/fonts/Abel-Regular.ttf'),
    });

    this.setState({ fontLoaded: true });
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.value.length !== this.state.valueArray){
      this.computeValue(nextProps.value);
    }
    this.setState({isTop: nextProps.scrollY == 0 }, ()=>{
      Animated.timing(this.state.xAnimated, {
        toValue: this.state.isTop ? this.state.midScreen : 50
      }).start();
    });


  }

  computeValue(value){
      let valueTotal = 0;
      const valueArray = value.length;
      for(let i=0; i<value.length; i++) {
        const valueCategory = value[i].value;
        valueTotal += valueCategory;
      }

      const firstNumber = Math.floor(valueTotal);
      const lastNumber = Math.floor((valueTotal - firstNumber) * 100);

      this.setState({ valueArray, firstNumber, lastNumber });
  }

  render() {
    let { fadeAnim } = this.state;
    return (
        <Animated.View style={[styles.container,{
          transform: [{translateX: this.state.xAnimated},{scale: this.state.scaleAnimated}],
        }]}>
        {
           this.state.fontLoaded ? (
             <Text style={styles.firstNumber}>
               {this.state.firstNumber}
             </Text>
           ) : null
         }
         {
            this.state.fontLoaded ? (
              <Text style={styles.lastNumber}>
                {this.state.lastNumber}
              </Text>
            ) : null
          }
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
    height: 80,
    width: 100,
    top: 0,
    left: -50,
    marginTop: 25,
  },
  firstNumber: {
    top: 0,
    fontSize: 60,
    color: '#20B5E0',
    textAlign: 'center',
    textShadowColor: '#20B5E0',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    fontFamily: 'abel-regular'
  },
  lastNumber: {
    marginTop: 30,
    fontSize: 20,
    color: '#20B5E0',
    textAlign: 'center',
    textShadowColor: '#20B5E0',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    fontFamily: 'abel-regular'
  },
  logo: {
    height: 0,
    width: 0,
  }
});
