import React, { Component } from 'react'
import { View, Image } from 'react-native'
import { display } from '../../styles'
import Button from '../atoms/Button'
import Input from '../atoms/Input'
import Pass from '../assets/pass.png'
import Logo from '../assets/logoLarge.png'

export default class Login extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <View style={[display.container, display.col, display.start]}>
        <Image
          source={Logo}
          style={[
            display.imageSmall,
            display.marginSmallTop,
            display.marginSmallBottom
          ]}
          resizeMode="contain"
        />
        <Image
          source={Pass}
          style={[display.imageMedium]}
          resizeMode="contain"
        />
        <Input
          style={[display.marginMediumTop, display.marginMediumBottom]}
          placeholder="email"
          variant="primary"
        />
        <Input
          style={display.marginLargeBottom}
          placeholder="password"
          variant="primary"
        />
        <Button
          style={display.marginSmallBottom}
          title="login"
          variant="primary"
        />
        <Button title="Not a member ?" link={true} />
      </View>
    )
  }
}
