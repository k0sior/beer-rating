import React from 'react'

import { NavBar } from "./NavBar.jsx"
import { Title } from "./Title.jsx"


export class HeaderConnected extends React.Component {

  render () {
    const mainView = this.props.mainView;
    const catalogView = this.props.catalogView;
    // const higestRatedView = this.props.higestRatedView;
    const contactView = this.props.contactView;
    const addBeerView = this.props.addBeerView;
    
    return(
      <header className='headerConnected'>
        <Title />
        <NavBar 
          mainView={mainView}
          catalogView={catalogView}
          // higestRatedView={higestRatedView}
          contactView={contactView}
          addBeerView={addBeerView}/>
      </header>
    )
  }
}