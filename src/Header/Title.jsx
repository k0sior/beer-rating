import React from 'react';
import logo from '../images/logo.jpg'


class Title extends React.Component {

  render() {
    return (
      <div className='titleWrapper'>
        <div className='titleText'>
          <h1>Beer-Rating</h1>
        </div>
        <div className='titleLogo'>
          <img src={logo} alt={"Logo"} />
        </div>
      </div>
    )
  }
}