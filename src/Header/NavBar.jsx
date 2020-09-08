import React from 'react'


class NavBar extends React.Component {
  render() {

    return (
      <div className='navBarWrapper'>
        <nav className='navBar'>
          <ul className='navBarList'>
            <li><a href="#">Strona główna</a></li>
            <li><a href="#">Katalog</a></li>
            <li><a href="#">Najwyżej oceniane</a></li>
            <li><a href="#">Kontakt</a></li>
          </ul>
        </nav>
      </div>
    )
  }
}