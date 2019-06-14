import React, { Component } from 'react'
import { View } from 'react-native'
import { card } from '../../styles'

/**
Card
@param {component} children inner content of card
@param {string} variant set de color of right border of card
*/

export default class Card extends Component {
  constructor(props) {
    super(props)
  }

  state = { variant: {} }

  componentDidMount() {
    let color
    if (this.props.variant === 'primary') {
      color = card.primary
    } else if (this.props.variant === 'secondary') {
      color = card.secondary
    } else if (this.props.variant === 'alternative') {
      color = card.alternative
    } else {
      color = {}
    }
    this.setState({
      variant: color
    })
  }

  render() {
    return (
      <View style={[this.props.style, card.body, this.state.variant]}>
        {this.props.children}
      </View>
    )
  }
}
