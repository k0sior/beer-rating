import React  from 'react'

import { Perla, Tyskie } from "./Beers.jsx"
import { lazy, Suspense } from "react"

const Preview = lazy(() => import("./CatalogPattern.jsx"));
// test version

export class Catalog extends React.Component {

  render () {
    return (
      <div className="catalogWrapper">
        <Suspense fallback={<div>Wczytywanie</div>}>
          <Preview />
        </Suspense>
        <Perla />
        <Tyskie />
        <Perla />
        <Tyskie/>
      </div>
    )
  }
}