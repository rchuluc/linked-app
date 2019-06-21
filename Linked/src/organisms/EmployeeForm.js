import React, { Component } from 'react'
import { ScrollView, View } from 'react-native'
import Card from '../atoms/Card'
import Input from '../atoms/Input'
import ActionButton from '../molecules/ActionButtons'
import { display } from '../../styles'
import { InsertNew } from '../utils/Api'

export default class EmployeeForm extends Component {
  constructor(props) {
    super(props)
  }

  state = {
    form: [
      {
        label: 'Name',
        placeholder: 'complete name',
        key: 'name',
        value: ''
      },
      {
        label: 'CPF',
        placeholder: 'only numbers',
        key: 'cpf',
        value: ''
      },
      {
        label: 'Birthdate',
        placeholder: 'DD/MM/YYYY',
        key: 'birthday',
        value: ''
      },
      {
        label: 'Job',
        placeholder: 'enter the role',
        key: 'job',
        value: ''
      },
      {
        label: 'Email',
        placeholder: 'example@domain.com',
        key: 'emailPrivate',
        value: ''
      },
      {
        label: 'Phone',
        placeholder: 'only numbers',
        key: 'phone',
        value: ''
      },
      {
        label: 'Mobile',
        placeholder: 'only numbers',
        key: 'mobilePhone',
        value: ''
      },
      {
        label: 'Address',
        placeholder: 'street',
        key: 'address',
        value: ''
      },
      {
        label: 'Number',
        placeholder: 'number of house',
        key: 'number',
        value: ''
      },
      {
        label: 'Complement',
        placeholder: 'apartment, block ...',
        key: 'complement',
        value: ''
      },
      {
        label: 'City',
        placeholder: 'city name',
        key: 'city',
        value: ''
      },
      {
        label: 'State',
        placeholder: 'only code',
        key: 'state',
        value: ''
      }
    ]
  }

  _addEmployee = () => {
    const payload = this.state.form.reduce((prev, curr) => {
      const obj = { [curr.key]: curr.val }
      return { ...prev, ...obj }
    })
    const insert = InsertNew(JSON.stringify(payload))
    if (!insert.error) {
      alert(insert)
    }
  }

  render() {
    return (
      <ScrollView style={{ width: '100%' }}>
        <Card variant={this.props.variant}>
          <View
            style={[
              { flex: 1 },
              display.col,
              display.center,
              display.marginSmallTop
            ]}
          >
            {this.state.form.map(item => (
              <Input
                key={item.label}
                style={display.marginMediumBottom}
                label={item.label}
                placeholder={item.placeholder}
                variant={
                  this.props.editable ? this.props.variant : 'transparent'
                }
                onChange={val => {
                  this.setState({ [item.value]: val })
                }}
                editable={this.props.editable}
                textValue={this.props.textValue}
              />
            ))}
          </View>
          {this.props.editable ? (
            <ActionButton
              style={[
                display.marginLargeTop,
                { flex: 1, position: 'relative' }
              ]}
              primaryTitle="create"
              primaryAction={() => this._addEmployee()}
              variant={this.props.variant}
              secondaryTitle="cancel"
            />
          ) : null}
        </Card>
      </ScrollView>
    )
  }
}
