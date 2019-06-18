import { createStackNavigator, createAppContainer } from 'react-navigation'

import Intro from './src/pages/Intro'
import Login from './src/pages/Login'
import Home from './src/pages/Home'
import SearchPage from './src/pages/SearchPage'
import NewEmployee from './src/pages/NewEmployee'
import EmployeeDetails from './src/pages/EmployeeDetails'
import Success from './src/pages/Success'

const Navigator = createStackNavigator({
  Intro: {
    screen: Intro,
    navigationOptions: {
      header: null
    }
  },
  Login: {
    screen: Login,
    navigationOptions: {
      header: null
    }
  },
  Home: {
    screen: Home,
    navigationOptions: {
      header: null
    }
  },
  Search: {
    screen: SearchPage,
    navigationOptions: {
      header: null
    }
  },
  NewEmployee: {
    screen: NewEmployee,
    navigationOptions: {
      header: null
    }
  },
  EmployeeDetails: {
    screen: EmployeeDetails,
    navigationOptions: {
      header: null
    }
  },
  Success: {
    screen: Success,
    navigationOptions: {
      header: null
    }
  }
})

export default createAppContainer(Navigator)
