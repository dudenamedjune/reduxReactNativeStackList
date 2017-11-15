import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';

import * as actions from '../actions';
import { CardSection } from './common';

class ListItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }
  render() {
    const { title, id, description } = this.props.library;
    const { titleStyle } = styles;


    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
        <View>
        <CardSection>
          <Text style={titleStyle}>{title}</Text>
        </CardSection>
        {this.props.expanded &&
            <CardSection>
              <Text style={{ flex: 1 }}>{description}</Text>
            </CardSection>
        }
        </View>
      </TouchableWithoutFeedback>

    );
  }
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
});
function mapStateToProps(state, ownProps) {
  const expanded = state.selectedLibraryId === ownProps.library.id;

  return { expanded };
}
export default connect(mapStateToProps, actions)(ListItem);
