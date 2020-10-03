import React from 'react'

export default class CatalogPreview extends React.Component {

  render() {

    return (
      <div className="catalogElementWrapper">
        <fieldset>
          <legend><span id="catalog-name">Nazwa</span></legend>

          <div className="catalogElement">
            <table>
              <tbody>
                <tr>
                  <th>Typ </th>
                  <td><span id="catalog-type">TYP</span></td>
                </tr>
                <tr>
                  <th>Alk. </th>
                  <td><span id="catalog-alcohol">ALK</span></td>
                </tr>
                <tr>
                  <th>Eks. </th>
                  <td><span id="catalog-extract">EKS</span></td>
                </tr>
                <tr>
                <th>IBU </th>
                  <td><span id="catalog-ibu">IBU</span></td>
                </tr>
                <tr>
                  <th>Chmiele </th>
                  <td><span id="catalog-hop">HOP</span></td>
                </tr>
                <tr>
                  <th>Producent/ Importer </th>
                  <td><span id="catalog-producer">PROD</span></td>
                </tr>
                <tr>
                  <th>Kraj pochodzenia </th>
                  <td><span id="catalog-country">KRAJ</span></td>
                </tr>

                <tr>
                  <th>Oceń</th>
                  <td></td>
                </tr>
              </tbody>
            </table>
            <div id="catalog-description">OPIS - OPIS </div>
        <div id="catalog-photo">
          <img src="" alt="pifko"></img>
        </div>

          </div>
        </fieldset>

      </div>
    )
  }
}