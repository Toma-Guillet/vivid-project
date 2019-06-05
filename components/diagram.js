import * as React from 'react';
import { Text, View, StyleSheet, Image, Animated, Dimensions  } from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from 'react-native-chart-kit';

export default class Diagram extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isTop: true,
      yAnimated: new Animated.Value(130),
      scaleAnimated: new Animated.Value(1),
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({isTop: nextProps.scrollY == 0 }, ()=>{
      Animated.timing(this.state.yAnimated, {
        toValue: this.state.isTop ? 130 : 0
      }).start();
      Animated.timing(this.state.scaleAnimated, {
        toValue: this.state.isTop ? 1 : 0.5
      }).start();
    });
  }
  render() {
    return (
      <Animated.View style={[styles.container,{
        transform: [{translateY: this.state.yAnimated},{scale: this.state.scaleAnimated}],
      }]}>
        <LineChart
          data={{
              labels: ['Work', 'Ressources', 'Health', 'Family', 'Community'],
            datasets: [{
              data: [
                90,
                100,
                25,
                40,
                -15
              ]
            }]
          }}
          width={Dimensions.get('window').width} // from react-native
          height={220}
          yAxisLabel={''}
          chartConfig={{
            backgroundColor: '#210349',
            backgroundGradientFrom: '#210349',
            backgroundGradientTo: '#210349',
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 0
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 0
          }}
        />
      </Animated.View>
    );

  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    height: 200,
    width: '100%',
    flexDirection: 'row',
    top: 0,
    right: 0,
  }
});
