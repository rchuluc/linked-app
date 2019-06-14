import React, { Component } from 'react'
import Card from '../atoms/Card'
import { Text, View, Image } from 'react-native'
import { text, display } from '../../styles'
import Logo from '../assets/logo.png'
import FavoriteButton from '../atoms/FavoriteButton'

/**
 * Employer Card
@param {string} variant change color of card left border
@param {string} name label of card
@param {date} since label of card
*/

export default class EmployerCard extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={[this.props.style, display.fullWidth]}>
        <Card variant={this.props.variant}>
          <View style={[display.fullWidth, display.row, display.start]}>
            <Image
              style={[display.logoSmall, display.marginSmallLeft]}
              source={Logo}
              resizeMode="contain"
            />
            <View
              style={[
                display.col,
                {
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  flex: 1
                },
                display.marginMediumLeft,
                display.marginMediumTop,
                display.fullHeight
              ]}
            >
              <View style={[display.row, display.spaceBetween]}>
                <Text style={[text.h4, text.bold, { flex: 5 }]}>
                  {this.props.name}
                </Text>
                <FavoriteButton style={{ flex: 1 }} />
              </View>
              <Text style={[text.h5, display.marginMediumBottom]}>
                {this.props.role}
              </Text>
              <Text style={text.p}>Employee since: {this.props.since}</Text>
            </View>
          </View>
        </Card>
      </View>
    )
  }
}
