import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import {
  RadialGradient
} from 'react-native-gradients';

export default class RoundTest extends React.Component {

  constructor(props){
    super(props);
  }


  render() {
    const colorList = [
      {offset: '0%', color: '#231557', opacity: '1'},
      {offset: '29%', color: '#44107A', opacity: '1'},
      {offset: '67%', color: '#FF1361', opacity: '1'},
      {offset: '100%', color: '#FFF800', opacity: '1'}
    ];
    <View
      style={[styles.round,{
        transform: [{translateX: Dimensions.get('window').width/2}],
      }]}>
        <RadialGradient x="50%" y="50%" rx="50%" ry="50%" colorList={colorList}/>
      <Text>lol</Text>
    </View>

  }
}

const styles = StyleSheet.create({
  round: {
    position: 'absolute',
    height: 180,
    width: 180,
    top: 20,
    left: -90,
    borderRadius: 100,
    backgroundColor: 'white',
  }
});
