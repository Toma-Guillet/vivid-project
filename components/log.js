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
       logCategory: props.category,
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

     const msgCode = this.state.logCategory+''+this.state.logType;
     if(msgCode == '1p1'){
       this.setState({
         logText: 'Votre avez résolu un problème durant votre temps de travail'
       });
     }else if(msgCode == '1p2'){
       this.setState({
         logText: 'Vous avez effectuez des heures supplémentaires au travail'
       });
     }else if(msgCode == '1n1'){
       this.setState({
         logText: 'Vous avez été responsable d\'un incident durant votre temps de travail.'
       });
     }else if(msgCode == '1n2'){
       this.setState({
         logText: 'Vous n\'avez pas effectuez le nombre d\'heures de travail quotidien requis'
       });
     }else if(msgCode == '2n1'){
       this.setState({
         logText: 'Votre consommation d\'énergie quotidienne a été trop élevée'
       });
     }else if(msgCode == '2n2'){
       this.setState({
         logText: 'Vous avez consommé un nombre de rations plus élevé que le seuil autorisé'
       });
     }else if(msgCode == '2p1'){
       this.setState({
         logText: 'Votre consommation d\'énergie quotidienne a été améliorée'
       });
     }else if(msgCode == '2p2'){
       this.setState({
         logText: 'Votre seuil de consommation de rations a été respecté'
       });
     }else if(msgCode == '3n1'){
       this.setState({
         logText: 'Vous avez été victime d\'un problème de santé'
       });
     }else if(msgCode == '3n2'){
       this.setState({
         logText: 'Vous avez utilisé un seuil de médicament trop élevé'
       });
     }else if(msgCode == '3p1'){
       this.setState({
         logText: 'Vous n\'avez eu aucun problème de santé ce mois-ci'
       });
     }else if(msgCode == '3p2'){
       this.setState({
         logText: 'Vous avez guéri sans utilisé de ressources médicales'
       });
     }else if(msgCode == '4n1'){
       this.setState({
         logText: 'Vous êtes à l\'orgine d\'un nombre de naissances plus élevée que le seuil autorisé'
       });
     }else if(msgCode == '4n2'){
       this.setState({
         logText: 'Vous vivez seul depuis plusieurs mois consécutifs'
       });
     }else if(msgCode == '4p1'){
       this.setState({
         logText: 'Vous avez correctement intégré votre enfant dans la communauté'
       });
     }else if(msgCode == '4p2'){
       this.setState({
         logText: 'Vous vivez au sein du foyer familial'
       });
     }else if(msgCode == '5n1'){
       this.setState({
         logText: 'Vous êtes à l\'origine d\'un accident'
       });
     }else if(msgCode == '5n2'){
       this.setState({
         logText: 'Vous avez été irrespectueux envers autrui'
       });
     }else if(msgCode == '5p1'){
       this.setState({
         logText: 'Vous avez été poli envers autrui'
       });
     }else if(msgCode == '5p2'){
       this.setState({
         logText: 'Vous avez été bénévole au sein d\'une association'
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
