import React, { Component } from 'react'
import { View, Image } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import { display } from '../../styles'
import Logo from '../assets/logoLarge.png'

export default class Loading extends Component {
  constructor(props) {
    super(props)
  }

  _getUser = async () => {
    const newUser = await AsyncStorage.getItem('newUser')
    this.props.navigation.navigate(newUser ? 'Auth' : 'Intro')
  }

  componentDidMount = () => {
    this._getUser()
  }

  render() {
    return (
      <View style={[display.container, display.col, display.center]}>
        <Image style={display.imageLarge} source={Logo} resizeMode="contain" />
      </View>
    )
  }
}
