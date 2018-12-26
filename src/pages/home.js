import React, { Component } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

export default class Home extends Component {
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.view}>
        <Text style={styles.titleText}>Welcome to MoBB!</Text>
        <Text style={styles.margin}>Here you're our guest.</Text>
        <Button
          title="Register your contact"
          onPress={() => navigate('Contact') }
        />
      </View>
    );
  }
}

Home.navigationOptions = {
  title: 'MoBB',
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  margin: {
    marginBottom: 20
  },
});