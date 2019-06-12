import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import { text, display } from '../../styles'
import Logo from '../assets/logo.png'
import ActionCard from '../molecules/ActionCard'

/**
Home
@param {string} username name of logged user
*/

export default class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={[display.container, display.col, display.start]}>
        <Image style={display.logo} source={Logo} resizeMode="contain" />
        <Text
          style={[
            text.h2,
            text.bold,
            display.marginLargeTop,
            display.marginMediumBottom
          ]}
        >
          Hello {this.props.userName}
        </Text>
        <Text style={text.h5}>How can I help?</Text>
        <View
          style={[
            display.fullWidth,
            display.col,
            display.start,
            display.marginLargeTop
          ]}
        >
          <ActionCard label="Add a new employee" variant="primary" />
          <ActionCard label="View my employees" variant="secondary" />
        </View>
      </View>
    )
  }
}
