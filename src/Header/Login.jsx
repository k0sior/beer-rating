import React, { Component } from 'react'

export class Login extends Component {

  render() {
    
    return (
      <div className="loginWrapper">
        <form>
          <label htmlFor="login">E-mail: </label>
          <input type="text" name="login"></input>
          <br/>
          <label htmlFor="password">Hasło: </label>
          <input type="text" name="password"></input>
          <br/>
          <button type="submit">Login</button>
        </form> 
      </div>
    )
  }
}