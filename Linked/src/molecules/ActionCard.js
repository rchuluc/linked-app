import React, { Component } from 'react'
import Card from '../atoms/Card'
import { Text, TouchableOpacity, View } from 'react-native'
import { text, display } from '../../styles'

/**
ActionButton
@param {function} action action on press passed as () => this.function()
@param {string} variant change color of card left border
@param {string} label label of card
*/

export default class ActionCard extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <TouchableOpacity
        onPress={this.props.action}
        style={[display.fullWidth, display.marginMediumBottom]}
      >
        <Card variant={this.props.variant}>
          <View style={[display.fullWidth, display.row, display.center]}>
            <Text
              style={[
                text.h5,
                text.bold,
                display.marginMediumTop,
                display.marginMediumBottom
              ]}
            >
              {this.props.label}
            </Text>
          </View>
        </Card>
      </TouchableOpacity>
    )
  }
}
