import React from 'react'
import { Perla } from "./Beers/Perla.jsx"
import { Tyskie } from "./Beers/Tyskie.jsx"

// test version

export class Catalog extends React.Component {

  render () {
    return (
      <div className="catalogWrapper">
        <Perla />
        <Tyskie />
        <Perla />
        <Perla />
        <Tyskie/>
      </div>
    )
  }
}