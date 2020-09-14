import React from 'react'


export class NavBar extends React.Component {

  render() {
    const addBeerView = this.props.addBeerView;
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
              alignItems: "flex-start"}}>
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