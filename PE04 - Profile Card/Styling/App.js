import React, { Component } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import {Platform, StyleSheet, Text, View } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          <View style={styles.cardImageContainer}>
            <Image
              style={styles.cardImage}
              source={require('../../assets/images/user.png')}
            />
          </View>
        </View>
      </View>
    );
  }
}

const profileCardColor = 'dodgerblue';




const styles = StyleSheet.create({
  cardContainer: {
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 3,
    borderStyle: 'solid',
    borderRadius: 20,
    backgroundColor: profileCardColor, // 假设这是定义在其它地方的变量
    width: 300,
    height: 400,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {
          height: 10,
        },
        shadowOpacity: 1,
      },
      android: {
        elevation: 15,
      },
    }),
  },

  cardImageContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: 'black',
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: 30,
    paddingTop: 15,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {
          height: 10,
        },
        shadowOpacity: 1,
      },
      android: {
        borderWidth: 3,
        borderColor: 'black',
        elevation: 15,
      },
    }),
  },
});


