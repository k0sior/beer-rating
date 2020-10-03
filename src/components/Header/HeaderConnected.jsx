import React from 'react'

import { NavBar } from "./NavBar.jsx"
import { SearchBox } from "./SearchBox.jsx"
import { Title } from "./Title.jsx"


export class HeaderConnected extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      position: 0,
    }
  }
  render () {
    const mainPageView = this.props.mainPageView;
    const catalogView = this.props.catalogView;
    const higestRatedView = this.props.higestRatedView;
    const contactView = this.props.contactView;
    const addBeerView = this.props.addBeerView;
    return(
      <header className='headerConnected'>
        <Title />
        <NavBar 
          mainPageView={mainPageView}
          catalogView={catalogView}
          higestRatedView={higestRatedView}
          contactView={contactView}
          addBeerView={addBeerView}/>
        <SearchBox />
      </header>
    )
  }
}