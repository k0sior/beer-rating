import React from 'react'

import { NavBar } from "./NavBar.jsx"
import { SearchBox } from "./SearchBox.jsx"
import { Title } from "./Title.jsx"


export class HeaderConnected extends React.Component {

  render () {
    const addBeerView = this.props.addBeerView
    return(
      <div className='headerConnected' 
        style={{
          gridArea: "header",
          display: 'flex',
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",}}>
        <Title />
        <NavBar addBeerView={addBeerView}/>
        <SearchBox />
      </div>
    )
  }
}