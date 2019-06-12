import React, { Component } from 'react'
import { TextInput, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { input, display } from '../../styles'

/**
Search
@param {string} placeholder of input
@param {string} variant change input border color based in styles
*/

export default class Search extends Component {
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
    } else {
      color = input.default
    }
    this.setState({
      variant: color
    })
  }

  render() {
    return (
      <View
        style={[
          this.props.style,
          this.state.variant,
          input.container,
          display.row,
          display.spaceBetween
        ]}
      >
        <TextInput
          style={this.state.text}
          value={this.state.input}
          onChangeText={val => this.setState({ input: val, text: input.value })}
          placeholder={this.props.placeholder}
        />
        <Icon name="search" style={input.icon} />
      </View>
    )
  }
}
