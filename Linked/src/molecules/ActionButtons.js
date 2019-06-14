import React, { Component } from 'react'
import { View } from 'react-native'
import { button } from '../../styles'
import Button from '../atoms/Button'

/**
Action Buttons

@param {function} primaryAction function called on press of button, passed by parent as action={() => this.foo()}
@param {string} primaryTitle button inner text
@param {string} variant change positive action button color based in styles
@param {function} secondayAction function called on press of button, passed by parent as action={() => this.foo()}
@param {string} secondaryTitle button inner text
*/

export default class ActionButtons extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={[this.props.style, button.inlineButtons]}>
        <Button
          action={this.props.secondaryAction}
          title={this.props.secondaryTitle}
        />
        <Button
          action={this.props.primaryAction}
          title={this.props.primaryTitle}
          variant={this.props.variant}
        />
      </View>
    )
  }
}
