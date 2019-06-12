import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native'
import { button } from '../../styles'
import Icon from 'react-native-vector-icons/FontAwesome'

/**
Floating Button
@param {function} action function called on press of button, passed by parent as action={() => this.foo()}
@param {string} icon button inner icon
*/

export default class FloatingButton extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <TouchableOpacity
        style={[button.floating, button.primary]}
        onPress={this.props.action}
      >
        <Icon name={this.props.icon} style={button.icon} />
      </TouchableOpacity>
    )
  }
}
