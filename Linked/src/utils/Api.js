import { API_ENDPOINT, API_ENDPOINT_V2, API_TOKEN } from '../../ApiEnviroment'

const Auth = async (user, password) => {
  try {
    let response = await fetch(`${API_ENDPOINT}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        login: user,
        pass: password
      })
    })
    let responseJson = await response.json()
    return responseJson
  } catch (error) {
    console.error(error)
  }
}

const InsertNew = async ({ data }) => {
  try {
    let response = await fetch(`${API_ENDPOINT}/sign-up`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${API_TOKEN}`
      },
      body: data
    })
    let responseJson = await response.text()
    return responseJson
  } catch (error) {
    console.error(error)
  }
}

const Delete = async id => {
  try {
    let response = await fetch(`${API_ENDPOINT_V2}/funcionarios/${id}`, {
      method: 'DEL',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${API_TOKEN}`
      }
    })
    let responseJson = await response.json()
    return responseJson
  } catch (error) {
    console.error(error)
  }
}

const ShowAll = async () => {
  try {
    let response = await fetch(`${API_ENDPOINT_V2}/funcionarios`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${API_TOKEN}`
      }
    })
    let responseJson = await response.json()
    return responseJson
  } catch (error) {
    console.error(error)
  }
}

const SearchById = async id => {
  try {
    let response = await fetch(`${API_ENDPOINT_V2}/funcionarios/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${API_TOKEN}`
      }
    })
    let responseJson = await response.json()
    return responseJson
  } catch (error) {
    console.error(error)
  }
}

const Update = async (data, id) => {
  try {
    let response = await fetch(`${API_ENDPOINT_V2}/funcionarios/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${API_TOKEN}`
      },
      body: data
    })
    let responseJson = await response.json()
    return responseJson
  } catch (error) {
    console.error(error)
  }
}

export { Auth, InsertNew, Delete, ShowAll, SearchById, Update }
