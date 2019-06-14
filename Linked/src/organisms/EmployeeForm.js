import React, { Component } from 'react'
import { ScrollView, View } from 'react-native'
import Card from '../atoms/Card'
import Input from '../atoms/Input'
import ActionButton from '../molecules/ActionButtons'
import { display } from '../../styles'

export default class EmployeeForm extends Component {
  constructor(props) {
    super(props)
  }

  state = {
    data: [
      {
        label: 'Name',
        placeholder: 'complete name'
      },
      {
        label: 'CPF',
        placeholder: 'only numbers'
      },
      {
        label: 'Birthdate',
        placeholder: 'DD/MM/YYYY'
      },
      {
        label: 'Job',
        placeholder: 'enter the role'
      },
      {
        label: 'Email',
        placeholder: 'example@domain.com'
      },
      {
        label: 'Phone',
        placeholder: 'only numbers'
      },
      {
        label: 'Mobile',
        placeholder: 'only numbers'
      },
      {
        label: 'Address',
        placeholder: 'street'
      },
      {
        label: 'Number',
        placeholder: 'number of house'
      },
      {
        label: 'Complement',
        placeholder: 'apartment, block ...'
      },
      {
        label: 'State',
        placeholder: 'only code'
      }
    ]
  }

  render() {
    return (
      <ScrollView style={{ width: '100%' }}>
        <Card variant="alternative">
          <View
            style={[
              { flex: 1 },
              display.col,
              display.center,
              display.marginSmallTop
            ]}
          >
            {this.state.data.map(item => (
              <Input
                key={item.label}
                style={display.marginMediumBottom}
                label={item.label}
                placeholder={item.placeholder}
                variant="alternative"
              />
            ))}
          </View>
          <ActionButton
            style={[display.marginLargeTop, { flex: 1 }]}
            primaryTitle="create"
            variant="alternative"
            secondaryTitle="cancel"
          />
        </Card>
      </ScrollView>
    )
  }
}
