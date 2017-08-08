import React from 'react';
import { StyleSheet, TouchableHighlight, Image, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    let pic = { uri: 'http://assets.fodors.com/destinations/54497/gondolas-canal-venice-italy_main.jpg' }
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Top Destinations</Text>
        <Text > Venice</Text>
        <TouchableHighlight onPress={this.imgClick}>
          <Image source={pic} style={{width: 193, height: 110}}/>
        </TouchableHighlight>
      </View>
    );
  }

  imgClick() {
    console.log('Hi');
  } 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header : {
    fontSize: 35
  }

});
