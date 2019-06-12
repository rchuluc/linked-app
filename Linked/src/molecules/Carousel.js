import React, { Component } from 'react'
import { View, Image, Text } from 'react-native'
import Stepper from '../atoms/Stepper'
import { text, carousel } from '../../styles'
import wait from '../assets/wait.png'
import people from '../assets/people.png'
import favorite from '../assets/favorite.png'

/**
Carousel
@param {number} step control the step and carrousel
*/

export default class Carousel extends Component {
  constructor(props) {
    super(props)
  }

  state = {
    images: [wait, favorite, people],
    label: [
      `Save time ! No more search${'\n'}for employee data`,
      `You can favorite${'\n'}your employees`,
      `Start to build an${'\n'}awesome team!`
    ]
  }
  render() {
    return (
      <View style={carousel.layout}>
        <Image
          style={carousel.image}
          source={this.state.images[this.props.step]}
          resizeMode="contain"
        />
        <Text style={[text.p, carousel.label]}>
          {this.state.label[this.props.step]}
        </Text>
        <Stepper step={this.props.step} />
      </View>
    )
  }
}
