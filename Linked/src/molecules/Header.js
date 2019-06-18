import React, { Component } from 'react'
import { Text, View } from 'react-native'
import BackButton from '../atoms/BackButton'
import FavoriteButton from '../atoms/FavoriteButton'
import { text, display } from '../../styles'

/**
Header
@param {string} title of the header
@param {string} subtitle of the header
@param {boolean} favoriteControl enable the favorite function
@param {boolean} backControl enable the visibility of backButton
@param {function} action function passed to BackButton
 */

export default class Header extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View
        style={[
          this.props.style,
          display.fullWidth,
          display.col,
          display.center
        ]}
      >
        <BackButton action={this.props.action} />
        <View style={[display.fullWidth, display.row, display.center]}>
          <Text style={[text.h2, text.bold, display.marginSmallBottom]}>
            {this.props.title}
          </Text>
          {this.props.favoriteControl ? (
            <FavoriteButton style={display.alignRight} />
          ) : null}
        </View>
        <Text style={[text.h5, display.marginMediumBottom]}>
          {this.props.subtitle}
        </Text>
      </View>
    )
  }
}
