import React, { Component } from 'react'
import axios from 'axios'

import Form from './components/Form'
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

  myCustomSubmit = (values, dispatch) => {
    console.log('value>>>>', values)

    // Custom dispatch
    // dispatch({
    //   type: 'BEFORE_SUBMIT'
    // })

    // dispatch(createDate(values))
  }

  render() {
    const initial = {
      name: 'Sarawut Kodkaew',
      email: 'sirguys.apple@gmail.com',
      username: 'sirguys',
      message: 'Hi'
    }
    return (
      <div className="container">
        <h2 className="title">Redux Form Example</h2>
        <div className="columns">
          <div className="column is-12">
            <Form onSubmit={this.myCustomSubmit} initialValues={initial} />
          </div>
        </div>
      </div>
    )
  }
}

export default App
