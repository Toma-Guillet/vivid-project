import React from 'react';
import { StyleSheet, Text, Image, View, ScrollView } from 'react-native';
import { LinearGradient, Font, Asset, AppLoading, SplashScreen } from 'expo';


import Notation from './components/notation';
import Plop from './components/plop';
import Diagram from './components/diagram';
import Logs from './components/logs';

import data from './store/data';
import ee from './store/event';
let isTop = true;

export default class App extends React.Component {
  state = {
    isSplashReady: false,
    isAppReady: false,
  };

  constructor(props){
    super(props);
    this.state = {
      isReady: false,
      scrollY: 0
    };
    setInterval(()=>{
    },100)
  }

  async componentDidMount() {
    ee.on('redraw', () => {
      this.forceUpdate();
    });
    Font.loadAsync({
      'abel-regular': require('./assets/fonts/Abel-Regular.ttf'),
    });

    this.setState({ fontLoaded: true });
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
    if (!this.state.isSplashReady) {
      return (
        <AppLoading
          startAsync={this._cacheSplashResourcesAsync}
          onFinish={() => this.setState({ isSplashReady: true })}
          onError={console.warn}
          autoHideSplash={false}
        />
      );
    }

    if (!this.state.isAppReady) {
      return (
        <View style={{ flex: 1 }}>
          <Image
            source={require('./assets/splash.png')}
            onLoad={this._cacheResourcesAsync}
          />
        </View>
      );
    }

    return (
      <LinearGradient
          colors={['#1f0248', '#210349', '#57015b']} style={styles.master} >

        <ScrollView style={styles.container} onScroll={(e) => this.onScroll(e)}>
          <Logs dataLogs={data.logs} />
        </ScrollView >
        <LinearGradient
           style={{position:'absolute', top:'15%', width:'100%', height:30}}
           colors={['rgba(33, 3, 76, 1)', 'rgba(33, 3, 76, 0.1)']}
           pointerEvents={'none'}
         />
        <View style={styles.header}>
          <Diagram scrollY={this.state.scrollY} value={data.logs} />
          <Notation style={styles.notation} value={data.number} scrollY={this.state.scrollY} />
        </View>
        <Image style={styles.backgroundImg} source={require('./assets/background.png')} />
      </LinearGradient>
    );
  }

  _cacheSplashResourcesAsync = async () => {
     const gif = require('./assets/splash.png');
     return Asset.fromModule(gif).downloadAsync()
   }

 _cacheResourcesAsync = async () => {
   SplashScreen.hide();
   const images = [
     require('./assets/splash.png'),
     require('./assets/splash.png'),
   ];

   const cacheImages = images.map((image) => {
     return Asset.fromModule(image).downloadAsync();
   });

   await Promise.all(cacheImages);
   this.setState({ isAppReady: true });
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
    height: '85%',
    width: '100%',
    top: '15%',
    left: 0
  },
  header: {
    position: 'absolute',
    height: '15%',
    width: '100%',
    top: 0,
    left: 0
  },
  backgroundImg: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: 0,
    left: -50,
    opacity: .75
  }
});
