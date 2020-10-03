import React from 'react'

let beerBase = []

const beerCatalogue = (props) => {

  const catalogueElements = beerBase.map((element) =>
    <li key={element.name.toString()}>
      {element}
    </li>
  );

  return (
    <div className="beerCatalogueWrapper">
      <ul>{catalogueElements}</ul>
    </div>
  )
}