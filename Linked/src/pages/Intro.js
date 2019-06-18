import React, { Component } from 'react'
import Carousel from '../molecules/Carousel'
import ActionButton from '../molecules/ActionButtons'
import { View } from 'react-native'
import { display } from '../../styles'

/**
 Intro
 */

export default class Intro extends Component {
  constructor() {
    super()
  }

  state = { step: 0 }

  next() {
    if (this.state.step < 2) {
      this.setState({
        step: this.state.step + 1
      })
    }
  }

  render() {
    return (
      <View style={[display.container, display.col, display.center]}>
        <Carousel style={[display.marginLargeTop]} step={this.state.step} />
        <ActionButton
          style={{ position: 'absolute' }}
          primaryAction={() => this.next()}
          primaryTitle="next"
          variant="primary"
          secondaryTitle="skip"
        />
      </View>
    )
  }
}
