import React, { Component } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { button, display } from '../../styles'
import Icon from 'react-native-vector-icons/FontAwesome'

/**
BackButton
@param {function} action function called on press of button, passed by parent as action={() => this.foo()}
*/

export default class Button extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <TouchableOpacity
        style={[this.props.style, button.normal, display.row, display.center]}
        onPress={this.props.action}
      >
        <Icon
          name="chevron-left"
          style={[display.marginSmallRight, button.iconSmall]}
        />
        <Text style={button.text}>back</Text>
      </TouchableOpacity>
    )
  }
}
