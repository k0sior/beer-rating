import React from 'react';
import logo from '../images/logo.png'


export class Title extends React.Component {

  render() {

    return (
      <div className='titleWrapper'>
        <div className='titleLogo'>
          <img src={logo} alt={"Beer-rating"} />
        </div>
      </div>
    )
  }
}