import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { button } from '../../styles'

/**
 Favorite Button
 */

export default class FavoriteButton extends Component {
  constructor() {
    super()
  }

  state = { favorite: false }

  toggleState() {
    this.setState({ favorite: !this.state.favorite })
  }

  render() {
    return (
      <TouchableOpacity
        style={this.props.style}
        onPress={() => this.toggleState()}
      >
        <Icon
          style={[button.icon, { color: '#EDC30D' }]}
          name={this.state.favorite === true ? 'star' : 'star-o'}
        />
      </TouchableOpacity>
    )
  }
}
