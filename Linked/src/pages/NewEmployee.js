import React, { Component } from 'react'
import { View } from 'react-native'
import { display } from '../../styles'
import Header from '../molecules/Header'
import EmployeeForm from '../organisms/EmployeeForm'

export default class SearchPage extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <View style={[display.container, display.col, display.start]}>
        <Header
          title="New Employee"
          subtitle="Enter the personal data"
          favoriteControl={false}
        />
        <EmployeeForm />
      </View>
    )
  }
}
