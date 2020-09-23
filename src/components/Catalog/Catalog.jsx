import React from 'react'

import { Perla, Tyskie } from "./Beers.jsx"

// test version

export class Catalog extends React.Component {

  render () {
    return (
      <div className="catalogWrapper">
        <Perla />
        <Tyskie />
        <Perla />
        <Tyskie/>
      </div>
    )
  }
}