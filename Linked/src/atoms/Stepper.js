import React, { Component } from 'react'
import { View } from 'react-native'
import { stepper } from '../../styles'

/**
Stepper
@param {number} step control the active step indicator
*/

export default class Stepper extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={[this.props.style, stepper.container]}>
        <View
          style={
            this.props.step === 0
              ? [stepper.dot, stepper.active]
              : [stepper.dot]
          }
        />
        <View
          style={
            this.props.step === 1
              ? [stepper.dot, stepper.active]
              : [stepper.dot]
          }
        />
        <View
          style={
            this.props.step === 2
              ? [stepper.dot, stepper.active]
              : [stepper.dot]
          }
        />
      </View>
    )
  }
}
