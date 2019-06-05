import * as React from 'react';
import { Text, View, StyleSheet, Image, Platform } from 'react-native';

 export default class Log extends React.Component {
   constructor(props){
     super(props);
     const randomType = Math.floor(Math.random() * 7);
     this.timer = null;
     this.state = {
       logType: randomType,
       logStatut: '0',
       logClassStatut: 'grey',
       logText: 'undefined',
       time: props.date,
     };
   }

   componentWillUnmount() {
     clearinterval(this.timer);
   }

   componentDidMount(){
     this.timer = setInterval(
       ()=>{
         this.setState({
           time: this.state.time + 1
         });
       }, 1000);
     if(this.state.logType == 0){
       // Action positive dans le cadre de son travail
       this.setState({
         logText: 'Votre avez résolu un problème durant votre temps de travail.',
         logClassStatut: 'green',
         logStatut: '+5',
       });
     }else if(this.state.logType == 1){
       // Action négative dans le cadre de son travail
       this.setState({
         logText: 'Votre avez été à l\'origine d\'un problème durant votre temps de travail.',
         logClassStatut: 'red',
         logStatut: '-10',
       });
     }else if(this.state.logType == 2){
       this.setState({
         logText: 'Vous avez terminé votre journée de travail.',
         logClassStatut: 'green',
         logStatut: '+25',
       });
     }else if(this.state.logType == 3){
       this.setState({
         logText: 'Consommation hebdomadaire de ressources',
         logClassStatut: 'red',
         logStatut: '-56',
       });
     }else if(this.state.logType == 4){
       this.setState({
         logText: 'Consommation hebdomadaire de ressources',
         logClassStatut: 'red',
         logStatut: '-56',
       });
     }else if(this.state.logType == 5){
       this.setState({
         logText: 'Vous avez apporté une connaissance',
         logClassStatut: 'green',
         logStatut: '+30',
       });
     }else if(this.state.logType == 6){
       this.setState({
         logText: 'Vous avez apporté votre assistance à une personne en danger',
         logClassStatut: 'green',
         logStatut: '+25',
       });
     }
   }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>
          {this.state.logText}
        </Text>
        <Text style={styles.timecode}>
          il y a {this.state.time} secondes
        </Text>
        <Text style={[styles.pictogram,{color: this.state.logClassStatut}]}>
          {this.state.logStatut}
        </Text>
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
    marginBottom: 5,
    fontSize: 14,
    color: '#2e78b7',
    backgroundColor: 'transparent',
  },
  label: {
    width: '90%',
    fontSize: 18,
    color: '#f9f9f9',
  },
  timecode: {
    width: '100%',
    fontStyle: 'italic',
    color: '#f9f9f9',
  },
  pictogram: {
    position: 'absolute',
    right: 5,
    top: 5,
    fontSize: 12,
    fontWeight: 'bold',
  },
  green: {
    color: 'green',
  },
  red: {
    color: 'red',
  }
});
