import React, { Component } from 'react'
import { View, FlatList, TouchableOpacity } from 'react-native'
import { display } from '../../styles'
import FloatingButton from '../atoms/FloatingButton'
import Header from '../molecules/Header'
import Search from '../atoms/Search'
import EmployerCard from '../organisms/EmployerCard'

export default class SearchPage extends Component {
  constructor() {
    super()
  }

  state = {
    data: [
      { key: '1', variant: 'secondary', name: 'John', role: 'Developer' },
      { key: '2', variant: 'primary', name: 'Mary', role: 'Tester' },
      { key: '3', variant: 'alternative', name: 'Carol', role: 'Manager' }
    ]
  }

  render() {
    return (
      <View style={[display.container, display.col, display.start]}>
        <Header
          title="My employees"
          subtitle="Here is!"
          favoriteControl={false}
        />
        <Search
          style={[display.marginMediumBottom]}
          variant="alternative"
          placeholder="search"
        />
        <View style={[display.fullWidth, { flex: 1 }]}>
          <FlatList
            data={this.state.data}
            renderItem={({ item }) => (
              <EmployerCard
                style={display.marginMediumBottom}
                variant={item.variant}
                name={item.name}
                role={item.role}
              />
            )}
          />
        </View>
        <FloatingButton icon="plus" />
      </View>
    )
  }
}
