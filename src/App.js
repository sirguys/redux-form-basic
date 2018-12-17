import React, { Component } from 'react'
import axios from 'axios'

import logo from './logo.svg'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: ''
    }
  }

  onChange = e => {
    const { value, name } = e.target

    this.setState({
      [name]: value
    })
  }

  onReduxFormSubmit = (values, dispatch) => {
    console.log('values', values)
  }

  onSubmit = e => {
    e.preventDefault()

    console.log('submit >>', this.state)

    axios
      .post('http://localhost:9000/login', this.state)
      .then(res => {
        console.log('res > ', res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <form onSubmit={this.onSubmit}>
          <label>
            Username:
            <input type="text" name="username" onChange={this.onChange} />
          </label>

          <label>
            Password:
            <input type="password" name="password" onChange={this.onChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default App
