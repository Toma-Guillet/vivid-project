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
         logText: 'You have solved a problem during your working time'
       });
     }else if(msgCode == '1p2'){
       this.setState({
         logText: 'You have worked overtime at work'
       });
     }else if(msgCode == '1n1'){
       this.setState({
         logText: 'You were responsible for an incident during your working time'
       });
     }else if(msgCode == '1n2'){
       this.setState({
         logText: 'You have not completed the required number of daily working hours'
       });
     }else if(msgCode == '2n1'){
       this.setState({
         logText: 'Your daily energy consumption has been too high'
       });
     }else if(msgCode == '2n2'){
       this.setState({
         logText: 'You have consumed more rations than the authorized threshold'
       });
     }else if(msgCode == '2p1'){
       this.setState({
         logText: 'Your daily energy consumption has been improved'
       });
     }else if(msgCode == '2p2'){
       this.setState({
         logText: 'Your ration consumption threshold has been respected'
       });
     }else if(msgCode == '3n1'){
       this.setState({
         logText: 'You have been the victim of a health problem'
       });
     }else if(msgCode == '3n2'){
       this.setState({
         logText: 'You have used a medication threshold that is too high'
       });
     }else if(msgCode == '3p1'){
       this.setState({
         logText: 'You haven\'t had any health problems this month'
       });
     }else if(msgCode == '3p2'){
       this.setState({
         logText: 'You healed without using medical resources'
       });
     }else if(msgCode == '4n1'){
       this.setState({
         logText: 'You are at the origin of a higher number of births than the authorized threshold'
       });
     }else if(msgCode == '4n2'){
       this.setState({
         logText: 'You have been living alone for several consecutive months'
       });
     }else if(msgCode == '4p1'){
       this.setState({
         logText: 'You have properly integrated your child into the community'
       });
     }else if(msgCode == '4p2'){
       this.setState({
         logText: 'You live in the family home'
       });
     }else if(msgCode == '5n1'){
       this.setState({
         logText: 'You are the cause of an accident'
       });
     }else if(msgCode == '5n2'){
       this.setState({
         logText: 'You have been disrespectful to others'
       });
     }else if(msgCode == '5p1'){
       this.setState({
         logText: 'You have been polite to others'
       });
     }else if(msgCode == '5p2'){
       this.setState({
         logText: 'You have been a volunteer with an association'
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
