import React, { Component } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { button } from '../../styles'

/**
Button
@param {function} action function called on press of button, passed by parent as action={() => this.foo()}
@param {string} variant change button colour based in styles
@param {string} title button inner text
*/

export default class Button extends Component {
  constructor(props) {
    super(props)
  }

  state = { variant: {} }

  componentDidMount() {
    let color
    if (this.props.variant === 'primary') {
      color = button.primary
    } else if (this.props.variant === 'secondary') {
      color = button.secondary
    } else if (this.props.variant === 'alternative') {
      color = button.alternative
    } else {
      color = {}
    }
    this.setState({
      variant: color
    })
  }

  render() {
    return (
      <TouchableOpacity
        style={[this.props.style, button.normal, this.state.variant]}
        onPress={this.props.action}
      >
        <Text style={this.props.link ? button.link : button.text}>
          {this.props.title}
        </Text>
      </TouchableOpacity>
    )
  }
}
