import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import Button from '../atoms/Button'
import Header from '../molecules/Header'
import { display, text, button } from '../../styles'
import Done from '../assets/done.png'

export default class Success extends Component {
  constructor() {
    super()
  }

  text = `You have been added a new${'\n'}employee`

  render() {
    return (
      <View style={[display.container, display.col, display.start]}>
        <Header title="New Employee" favoriteControl={false} />
        <View style={[display.container, display.col, display.spaceBetween]}>
          <View>
            <Image
              style={display.imageLarge}
              source={Done}
              resizeMode="contain"
            />
            <Text
              style={[text.p, display.marginSmallTop, { textAlign: 'center' }]}>
              {this.text}
            </Text>
          </View>
          <Button
            style={display.marginMediumBottom}
            variant="secondary"
            title="finish"
          />
        </View>
      </View>
    )
  }
}
