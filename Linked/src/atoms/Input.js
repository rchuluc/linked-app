import React, { Component } from 'react'
import { TextInput, View, Text } from 'react-native'
import { input } from '../../styles'

/**
Input
@param {string} label assistive label of input
@param {string} placeholder of input
@param {string} variant change input border color based in styles
@param {string} textValue value when the field isn't editable
@param {boolean} editable control if the field is editable or not
*/

export default class Input extends Component {
  constructor(props) {
    super(props)
  }

  state = {
    variant: {},
    text: input.placeholder,
    input: ''
  }

  componentDidMount() {
    let color
    if (this.props.variant === 'primary') {
      color = input.primary
    } else if (this.props.variant === 'secondary') {
      color = input.secondary
    } else if (this.props.variant === 'alternative') {
      color = input.alternative
    } else if (this.props.variant === 'transparent') {
      color = input.transparent
    } else {
      color = input.default
    }
    this.setState({
      variant: color,
      text: this.props.editable ? input.placeholder : input.value
    })
  }

  render() {
    return (
      <View style={[this.props.style, this.state.variant, input.container]}>
        <Text style={input.label}>{this.props.label}</Text>
        <TextInput
          style={this.state.text}
          value={this.props.editable ? this.state.input : this.props.textValue}
          onChangeText={val => this.setState({ input: val, text: input.value })}
          placeholder={this.props.placeholder}
          editable={this.props.editable}
        />
      </View>
    )
  }
}
