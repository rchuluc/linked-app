import React, { Component } from 'react'
import Carousel from '../molecules/Carousel'
import ActionButton from '../molecules/ActionButtons'
import { View } from 'react-native'
import { display } from '../../styles'
import AsyncStorage from '@react-native-community/async-storage'
/**
 Intro
 */

export default class Intro extends Component {
  constructor() {
    super()
  }

  state = { step: 0 }

  _next = () => {
    if (this.state.step < 2) {
      this.setState({
        step: this.state.step + 1
      })
    }
  }

  _storeData = async () => {
    await AsyncStorage.setItem('newUser', 'false')
  }

  componentWillUnmount = () => {
    this._storeData()
  }

  render() {
    const { navigate } = this.props.navigation

    return (
      <View style={[display.container, display.col, display.center]}>
        <Carousel style={[display.marginLargeTop]} step={this.state.step} />
        <ActionButton
          style={{ position: 'absolute' }}
          primaryAction={
            this.state.step === 2 ? () => navigate('Login') : () => this._next()
          }
          primaryTitle="next"
          variant="primary"
          secondaryTitle="skip"
          secondaryAction={() => navigate('Login')}
        />
      </View>
    )
  }
}
