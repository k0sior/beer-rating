import React from 'react'


export class NavBar extends React.Component {

  render() {

    return (
      <div className='navBarWrapper' >
        <nav className='navBar'>
          <ul className='navBarList' 
            style={{
              width: 500,
              display: "flex", 
              flexDirection: "row",
              justifyContent:'space-between', 
              listStyleType: 'none'}}>
            <li>Strona główna</li>
            <li>Katalog</li>
            <li>Najwyżej oceniane</li>
            <li>Kontakt</li>
            <li>Dodaj piwo</li>
          </ul>
        </nav>
      </div>
    )
  }
}