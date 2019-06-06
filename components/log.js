import * as React from 'react';
import { Text, View, StyleSheet, Image, Platform } from 'react-native';
import { Font } from 'expo';
import TimeAgo from 'react-native-timeago';

 export default class Log extends React.Component {
   constructor(props){
     super(props);
     const randomType = Math.floor(Math.random() * 7);
     this.timer = null;
     this.state = {
       logStatut: '0',
       logClassStatut: 'grey',
       logText: 'undefined',
       time: props.date,
       value: props.value,
       logType: props.logType,
       fontLoaded: false,
     };
   }

   async componentDidMount(){
     if(this.state.value >= 0){
       this.setState({
         logClassStatut: '#2BD1FD'
       });
     }else{
       this.setState({
         logClassStatut: '#C6137D'
       });
     }

     if(this.state.logType == 0){
       // Action positive dans le cadre de son travail
       this.setState({
         logText: 'Votre avez résolu un problème durant votre temps de travail.'
       });
     }else if(this.state.logType == 1){
       // Action négative dans le cadre de son travail
       this.setState({
         logText: 'Votre avez été à l\'origine d\'un problème durant votre temps de travail.'
       });
     }else if(this.state.logType == 2){
       this.setState({
         logText: 'Vous avez terminé votre journée de travail.'
       });
     }else if(this.state.logType == 3){
       this.setState({
         logText: 'Consommation hebdomadaire de ressources'
       });
     }else if(this.state.logType == 4){
       this.setState({
         logText: 'Consommation hebdomadaire de ressources'
       });
     }else if(this.state.logType == 5){
       this.setState({
         logText: 'Vous avez apporté une connaissance'
       });
     }else if(this.state.logType == 6){
       this.setState({
         logText: 'Vous avez apporté votre assistance à une personne en danger'
       });
     }

     await Font.loadAsync({
       'abel-regular': require('../assets/fonts/Abel-Regular.ttf'),
     });

     this.setState({ fontLoaded: true });
   }

  render() {
    return (
      <View style={styles.container}>
        {
           this.state.fontLoaded ? (
            <Text style={styles.label}>
              {this.state.logText}
            </Text>
           ) : null
         }
         {
            this.state.fontLoaded ? (
             <Text style={styles.timecode}>
              <TimeAgo time={this.state.time} />
             </Text>
            ) : null
          }
          {
             this.state.fontLoaded ? (
              <Text style={[styles.pictogram,{color: this.state.logClassStatut}]}>
                {this.state.value}
              </Text>
             ) : null
           }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 0,
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderWidth: 0,
    borderColor: '#07E7DC',
    width: '96%',
    fontSize: 14,
    color: '#2e78b7',
    backgroundColor: 'transparent',
  },
  label: {
    width: '90%',
    fontSize: 18,
    color: '#f9f9f9',
    fontFamily: 'abel-regular'
  },
  timecode: {
    width: '100%',
    fontStyle: 'italic',
    fontSize: 11,
    color: '#f9f9f9',
    fontFamily: 'abel-regular'
  },
  pictogram: {
    position: 'absolute',
    right: 5,
    top: 5,
    fontSize: 12,
    fontWeight: 'bold',
    fontFamily: 'abel-regular'
  }
});
