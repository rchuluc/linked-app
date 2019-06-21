import React, { Component } from 'react'
import { View, FlatList, TouchableOpacity } from 'react-native'
import { display } from '../../styles'
import FloatingButton from '../atoms/FloatingButton'
import Header from '../molecules/Header'
import Search from '../atoms/Search'
import EmployerCard from '../organisms/EmployerCard'
import { ShowAll } from '../utils/Api'

export default class SearchPage extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  _getEmployees = async () => {
    const employees = await ShowAll()
    this.setState({ data: employees })
  }

  componentWillMount = () => {
    this._getEmployees()
  }

  render() {
    const { goBack, navigate } = this.props.navigation

    return (
      <View style={[display.container, display.col, display.start]}>
        <Header
          title="My employees"
          subtitle="Here is!"
          favoriteControl={false}
          action={() => goBack()}
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
                variant="secondary"
                name={item.name}
                role={item.job}
              />
            )}
            keyExtractor={item => item._id}
          />
        </View>
        <FloatingButton action={() => navigate('NewEmployee')} icon="plus" />
      </View>
    )
  }
}
