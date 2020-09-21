import React from 'react'

export class Tyskie extends React.Component {

  render() {

    return (
      <div className="catalogElementWrapper">
        <fieldset>
          <legend><span id="catalog-name">Tyskie</span></legend>

          <div className="catalogElement">
            <table>
              <tbody>
                <tr>
                  <th>Typ </th>
                  <td><span id="catalog-type">Pils</span></td>
                </tr>
                <tr>
                  <th>Alk. </th>
                  <td><span id="catalog-alcohol">6.0%</span></td>
                </tr>
                <tr>
                  <th>Eks. </th>
                  <td><span id="catalog-extract">12.2%</span></td>
                </tr>
                <tr>
                <th>IBU </th>
                  <td><span id="catalog-ibu">IBU</span></td>
                </tr>
                <tr>
                  <th>Chmiele </th>
                  <td><span id="catalog-hop">Chmiel lubelski</span></td>
                </tr>
                <tr>
                  <th>Producent/ Importer </th>
                  <td><span id="catalog-producer">Perła - Browary Lubelskie S.A.</span></td>
                </tr>
                <tr>
                  <th>Kraj pochodzenia </th>
                  <td><span id="catalog-country">Polska</span></td>
                </tr>
              <div id="catalog-description">
                Fajny opisik
              </div>
              </tbody>
            </table>
        <div id="catalog-photo">
          <img src="https://www.tradeunderbond.com/img/post/image_1530792667.jpg" alt="pifko"></img>
        </div>

          </div>
        </fieldset>

      </div>
    )
  }
}