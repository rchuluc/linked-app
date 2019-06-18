import React, { Component } from 'react'
import { View } from 'react-native'
import { display } from '../../styles'
import Header from '../molecules/Header'
import EmployeeForm from '../organisms/EmployeeForm'
import FloatingButton from '../atoms/FloatingButton'
import ActionModal from '../organisms/ActionModal'

export default class EmployeeDetails extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <View style={[display.container, display.col, display.start]}>
        <Header title="Name" favoriteControl={true} />
        <EmployeeForm editable={false} variant="secondary" textValue="test" />
        <ActionModal />
      </View>
    )
  }
}
