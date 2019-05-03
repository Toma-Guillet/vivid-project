import * as React from 'react';
import { Text, View, StyleSheet, Image, Platform } from 'react-native';

 export default class Log extends React.Component {
   constructor(props){
     super(props);
     const randomType = Math.floor(Math.random() * 5);
     this.state = {
       logType: randomType,
       logStatut: '0',
       logClassStatut: 'grey',
       logText: 'undefined',
     };
   }

   componentDidMount(){
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

     }else if(this.state.logType == 3){

     }else if(this.state.logType == 4){

     }else if(this.state.logType == 5){

     }
   }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>
          {this.state.logText}
        </Text>
        <Text style={styles.position}>
          6 rue Deshoulières, 44000 Nantes
        </Text>
        <Text style={styles.timecode}>
          il y a 6 secondes
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
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderWidth: 0,
    borderColor: '#07E7DC',
    width: '96%',
    marginBottom: 5,
    fontSize: 14,
    color: '#2e78b7',
    backgroundColor: 'white',
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 1,
      },
    }),
  },
  label: {
    width: '90%',
    fontSize: 18,
  },
  timecode: {
    width: '100%',
    fontStyle: 'italic'
  },
  position: {
    width: '100%',
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
