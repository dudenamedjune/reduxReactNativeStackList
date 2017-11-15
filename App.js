/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import {
  StyleSheet,
  View
} from 'react-native';

import reducers from './src/reducers/index';
import { Header } from './src/components/common';
import LibraryList from './src/components/LibraryList';

export default class App extends Component<{}> {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={styles.container}>
          <Header headerText="Stack" />
          <LibraryList />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
