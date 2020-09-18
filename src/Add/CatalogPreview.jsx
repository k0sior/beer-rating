import React from 'react'

export class CatalogPreview extends React.Component {

  render () {
    return (
      <div className="catalogPreview">
      <h2>Preview</h2>
        <fieldset>
          <legend><span id="addBeer-name">Name</span></legend>
            <table>
              <tr>
                <td><span id="addBeer-type">Type</span></td>
              </tr>
              <tr>
                <td><span id="addBeer-alcohol">%</span></td>
                <td><span id="addBeer-extract">Ekstarkt</span></td>
              </tr>
              <tr>
                <td><span id="addBeer-ibu">IBU</span></td>
                <td><span id="addBeer-hop">chmiel</span></td>
              </tr>
              <tr>
                <td><span id="addBeer-producer">Producent</span></td>
                <td><span id="addBeer-country">Kraj</span></td>
              </tr>
            </table>
            <div id="addBeer-photo"> image
              <img src="" alt="pifko"></img>
            </div>
            <div id="addBeer-description">
              opis
            </div>
        </fieldset>
      </div>
    )
  }
}