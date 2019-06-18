import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import Card from '../atoms/Card'
import ActionButtons from '../molecules/ActionButtons'
import { text, display } from '../../styles'
import Think from '../assets/think.png'

export default class ActionModal extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View
        style={[
          { position: 'absolute', width: '100%', height: '100%' },
          display.overlay,
          display.col,
          display.center
        ]}>
        <Card variant="primary" style={[display.col, display.center]}>
          <Text
            style={[
              text.h2,
              display.marginSmallTop,
              display.marginSmallBottom
            ]}>
            Are you sure?
          </Text>
          <Image
            style={[display.imageMedium, display.marginMediumTop]}
            source={Think}
            resizeMode="contain"
          />
          <Text
            style={[
              text.p,
              display.marginSmallTop,
              display.marginLargeBottom,
              { textAlign: 'center' }
            ]}>
            You can't undo it later!
          </Text>

          <ActionButtons
            style={[display.marginMediumTop, { position: 'relative' }]}
            primaryTitle="delete"
            variant="primary"
            secondaryTitle="cancel"
          />
        </Card>
      </View>
    )
  }
}
