import React from 'react'


export class NavBar extends React.Component {

  render() {
    const mainPageView = this.props.mainPageView;
    const catalogView = this.props.catalogView;
    const higestRatedView = this.props.higestRatedView;
    const contactView = this.props.contactView;
    const addBeerView = this.props.addBeerView;
    return (
      <div className='navBarWrapper' >
        <nav className='navBar'>
          <ul className='navBarList'>
            <li><button type="button" id="mainPageButton">Strona główna</button></li>
            <li><button type="button" id="beerCatalogButton">Katalog piw</button></li>
            <li><button type="button" id="highestRatedButton">Najwyżej oceniane</button></li>
            <li><button type="button" id="contactButton" onClick={contactView}>Kontakt</button></li>
            <li><button type="button" id="addBeerButton" onClick={addBeerView}>Dodaj piwo</button></li>
          </ul>
        </nav>
      </div>
    )
  }
}