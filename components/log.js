import * as React from 'react';
import { Text, View, StyleSheet, Image, Platform } from 'react-native';

 export default class Log extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Ceci est un log d'historique.
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
    width: '90%',
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
  }
});
