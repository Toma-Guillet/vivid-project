import * as React from 'react';
import { Text, View, StyleSheet, Image, Animated, Dimensions, ViewPagerAndroid } from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from 'react-native-chart-kit';
import { Svg, Font } from 'expo';

export default class Diagram extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      valueWork: 0,
      valueRessources: 0,
      valueHealth: 0,
      valueFamily: 0,
      valueCommunity: 0,
      isTop: true,
      yAnimated: new Animated.Value(0),
      scaleAnimated: new Animated.Value(1),
      widthScreen: Dimensions.get('window').width,
      fontLoaded: false,
      diagramStatut: false
    };
  }

  async componentDidMount() {
    this.computeValue(this.props.value);
    await Font.loadAsync({
      'abel-regular': require('../assets/fonts/Abel-Regular.ttf'),
    });

    this.setState({ fontLoaded: true });
  }

  computeValue(value){
    let valueWork = 0;
    let valueRessources = 0;
    let valueHealth = 0;
    let valueFamily = 0;
    let valueCommunity = 0;
    const diagramStatut = true;

    for(let i=0; i<value.length; i++) {
      const idCategory = value[i].category;
      const valueCategory = value[i].value;

      if(idCategory == 1){
        valueWork += valueCategory;
      }else if(idCategory == 2){
        valueRessources += valueCategory;
      }else if(idCategory == 3){
        valueHealth += valueCategory;
      }else if(idCategory == 4){
        valueFamily += valueCategory;
      }else if(idCategory == 5){
        valueCommunity += valueCategory;
      }
    }
    this.setState({ valueWork, valueRessources, valueHealth, valueFamily, valueCommunity, diagramStatut });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({isTop: nextProps.scrollY == 0 }, ()=>{
      Animated.timing(this.state.yAnimated, {
        toValue: this.state.isTop ? 0 : this.state.widthScreen
      }, {useNativeDriver: true}).start();
    });
    if(this.state.isTop){
      this.viewpager.setPage(0);
    }else{
      this.viewpager.setPage(2);
    }
  }

  render() {
    return (
      <Animated.View
        style={[styles.container,{
          transform: [{translateX: this.state.yAnimated}],
        }]}>
        <ViewPagerAndroid
          ref={(viewpager) => {this.viewpager = viewpager}}
          style={styles.containerCarousel}
          initialPage={2}>
          <View style={styles.pageContainer} key="1">
            <View
              style={styles.round}>
              <Image style={styles.roundImg} source={require('../assets/suitcase.png')} />
            </View>
            {this.statutIcon(this.state.valueWork)}
            {
               this.state.fontLoaded ? (
                <Text style={styles.titleRound}>WORK</Text>
               ) : null
             }
             {
                this.state.fontLoaded ? (
                  <Text style={styles.labelRound}>{this.state.valueWork} POINTS</Text>
                ) : null
              }
              <Image style={styles.slide} source={require('../assets/slide.png')} />
          </View>

          <View style={styles.pageContainer} key="2">
            <View
              style={styles.round}>
              <Image style={styles.roundImg} source={require('../assets/storage.png')} />
            </View>
            {this.statutIcon(this.state.valueRessources)}
            {
               this.state.fontLoaded ? (
                <Text style={styles.titleRound}>RESSOURCES</Text>
               ) : null
             }
             {
              this.state.fontLoaded? (
                  <Text style={styles.labelRound}>{this.state.valueRessources} POINTS</Text>
                ) : null
              }
              <Image style={styles.slide} source={require('../assets/slide2.png')} />
          </View>

          <View style={styles.pageContainer} key="3">
            <View
              style={styles.round}>
              <Image style={styles.roundImg} source={require('../assets/pharmacy.png')} />
            </View>
            {this.statutIcon(this.state.valueHealth)}
            {
               this.state.fontLoaded ? (
                <Text style={styles.titleRound}>HEALTH</Text>
               ) : null
             }
             {
                this.state.fontLoaded ? (
                  <Text style={styles.labelRound}>{this.state.valueHealth} POINTS</Text>
                ) : null
              }
              <Image style={styles.slide} source={require('../assets/slide3.png')} />
          </View>

          <View style={styles.pageContainer} key="4">
            <View
              style={styles.round}>
              <Image style={styles.roundImg} source={require('../assets/family.png')} />
            </View>
            {this.statutIcon(this.state.valueFamily)}
            {
               this.state.fontLoaded ? (
                <Text style={styles.titleRound}>FAMILY</Text>
               ) : null
             }
             {
                this.state.fontLoaded ? (
                  <Text style={styles.labelRound}>{this.state.valueFamily} POINTS</Text>
                ) : null
              }
              <Image style={styles.slide} source={require('../assets/slide4.png')} />
          </View>

          <View style={styles.pageContainer} key="5">
            <View
              style={styles.round}>
              <Image style={styles.roundImg} source={require('../assets/speech-bubble.png')} />
            </View>
            {this.statutIcon(this.state.valueCommunity)}
            {
               this.state.fontLoaded ? (
                <Text style={styles.titleRound}>COMMUNITY</Text>
               ) : null
             }
             {
                this.state.fontLoaded ? (
                  <Text style={styles.labelRound}>{this.state.valueCommunity} POINTS</Text>
                ) : null
              }
              <Image style={styles.slide} source={require('../assets/slide5.png')} />
          </View>

          {
             this.state.diagramStatut ? (
               <View style={styles.pageContainer} key="6">
                 <LineChart
                   data={{
                       labels: ['Work', 'Ressources', 'Health', 'Family', 'Community'],
                     datasets: [{
                       data: [
                       this.state.valueWork,
                       this.state.valueRessources,
                       this.state.valueHealth,
                       this.state.valueFamily,
                       this.state.valueCommunity
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
                     borderRadius: 0,
                   }}
                 />
                 <View style={{height: 23}} />
                 <Image style={styles.slide} source={require('../assets/slide6.png')} />
               </View>
             ) : null
           }
        </ViewPagerAndroid>
      </Animated.View>
    );

  }

  statutIcon(info){
    if (info >= 0) {
            return <View style={[styles.dotGreen,{transform: [{translateY: 155}]}]}><Image style={styles.iconCheck} source={require('../assets/checked.png')} /></View>;
        } else {
            return <View style={[styles.dotRed,{transform: [{translateY: 155}]}]}><Image style={styles.iconCheck} source={require('../assets/warning-sign.png')} /></View>;
        }
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    height: 300,
    width: '100%',
    flexDirection: 'row',
    top: 120,
    right: 0,
  },
  containerCarousel: {
    position: 'relative',
    height: 300,
    width: '100%',
    flexDirection: 'row',
    top: 0,
    right: 0
  },
  round: {
    position: 'relative',
    height: 170,
    width: 170,
    borderRadius: 100,
    backgroundColor: 'transparent',
    borderColor: 'rgba(255,255,255,5)',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  pageContainer: {
    alignItems: 'center'
  },
  roundImg: {
    height: 70,
    width: 70,
    opacity: .75
  },
  dotGreen: {
    position: 'absolute',
    height: 30,
    width: 30,
    backgroundColor: '#2BD1FD',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  dotRed:{
    position: 'absolute',
    height: 30,
    width: 30,
    backgroundColor: '#C6137D',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconCheck: {
    position: 'relative',
    height: 15,
    width: 15
  },
  titleRound: {
    marginTop: 20,
    color: 'white',
    fontSize: 40,
    fontFamily: 'abel-regular'
  },
  labelRound: {
    marginTop: -10,
    color: 'white',
    fontSize: 22,
    opacity: .3,
    fontFamily: 'abel-regular'
  },
  slide: {
    height: 10,
    width: 92,
    marginTop: 10
  }
});
