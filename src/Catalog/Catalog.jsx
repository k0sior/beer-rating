import React from 'react'
import { Perla } from "./Beers/Perla.jsx"

export class Catalog extends React.Component {

  render () {
    return (
      <div className="catalogWrapper">
        <Perla />
      </div>
    )
  }
}