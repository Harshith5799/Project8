import React, { Component } from 'react'
import './App.css'
import { callApi, APIURL } from './lib.js'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      data: [],
      showpopup: null,
      userdata: null
    }
    this.getData = this.getData.bind(this)
  }

  componentDidMount() {
    callApi("GET", APIURL, "", this.getData)
  }

  getData(res) {
    this.setState({ data: res })
  }

  render() {
    const { data } = this.state

    return (
      <div className='app'>
        <div className='header'>
          Example for APIs, fetch function and conditional rendering
        </div>

        <div className='section'>
          <h1>Welcome</h1>

          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
              </tr>
            </thead>

            <tbody>
              {data.map((user) => (
                <tr key={user.id}>
                  <td data-label="ID">{user.id}</td>
                  <td data-label="Name">{user.name}</td>
                  <td data-label="Username">{user.username}</td>
                  <td data-label="Email">{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <footer className="footer">
          All Rights Reserved Copyright © 2026 Designed by Bollineni Harshith
        </footer>
      </div>
    )
  }
}
