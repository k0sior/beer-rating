import React from 'react'


export class NavBar extends React.Component {

  render() {
    const addBeerView = this.props.addBeerView
    return (
      <div className='navBarWrapper' >
        <nav className='navBar'>
          <ul 
            className='navBarList' 
            style={{
              width: 500,
              display: "flex", 
              flexDirection: "row",
              justifyContent:'space-between', 
              listStyleType: 'none',
              textAlign: 'left'}}>
            <li>Strona główna</li>
            <li>Katalog</li>
            <li>Najwyżej oceniane</li>
            <li>Kontakt</li>
            <li><button type="button" id="addBeer" onClick={addBeerView}>Dodaj piwo </button></li>
          </ul>
        </nav>
      </div>
    )
  }
}