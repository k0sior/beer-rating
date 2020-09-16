import React from 'react'


export class NavBar extends React.Component {

  render() {
    const addBeerView = this.props.addBeerView;
    return (
      <div className='navBarWrapper' >
        <nav className='navBar'>
          <ul className='navBarList'>
            <li><button type="button" id="mainPageButton">Strona główna</button></li>
            <li><button type="button" id="beerCatalogueButton">Katalog piw</button></li>
            <li><button type="button" id="highestRatedButton">Najwyżej oceniane</button></li>
            <li><button type="button" id="contactButton">Kontakt</button></li>
            <li><button type="button" id="addBeerButton" onClick={addBeerView}>Dodaj piwo</button></li>
          </ul>
        </nav>
      </div>
    )
  }
}