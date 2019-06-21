import React, { Component } from 'react'
import { View, Image, Alert } from 'react-native'
import { display } from '../../styles'
import Button from '../atoms/Button'
import Input from '../atoms/Input'
import Pass from '../assets/pass.png'
import Logo from '../assets/logoLarge.png'
import { Auth } from '../utils/Api'

export default class Login extends Component {
  constructor() {
    super()
  }

  state = {
    user: '',
    pass: ''
  }

  _authUser = async () => {
    const auth = await Auth(this.state.user, this.state.pass)
    if (!auth.error) {
      this.props.navigation.navigate('Home', { userId: auth.id })
    } else {
      Alert.alert(
        'Something went wrong',
        'User or password are incorrect',
        [{ text: 'OK' }],
        { cancelable: false }
      )
    }
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
          onChange={val => {
            this.setState({
              user: val
            })
          }}
        />
        <Input
          style={display.marginLargeBottom}
          placeholder="password"
          variant="primary"
          onChange={val => {
            this.setState({
              pass: val
            })
          }}
        />
        <Button
          action={() => this._authUser()}
          style={display.marginSmallBottom}
          title="login"
          variant="primary"
        />
        <Button title="Not a member ?" link={true} />
      </View>
    )
  }
}
