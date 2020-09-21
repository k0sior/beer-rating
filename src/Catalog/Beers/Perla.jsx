import React from 'react'

export class Perla extends React.Component {

  render() {

    return (
      <div className="catalogElement">
        <from className="catalogElementWrapper">
          <fieldset>
            <legend><span id="addBeer-name">Perła Chmielowa</span></legend>
            <table>
              <tbody>
                <tr>
                  <td><span id="addBeer-type">Pale Lager</span></td>
                </tr>
                <tr>
                  <td><span id="addBeer-alcohol">6.0 %</span></td>
                </tr>
                <tr>
                  <td><span id="addBeer-extract">Ekstarkt</span></td>
                </tr>
                <tr>
                  <td><span id="addBeer-ibu">IBU</span></td>
                </tr>
                <tr>
                  <td><span id="addBeer-hop">chmiel</span></td>
                </tr>
                <tr>
                  <td><span id="addBeer-producer">Perła - Browary Lubelskie S.A.</span></td>
                </tr>
                <tr>
                  <td><span id="addBeer-country">Polska</span></td>
                </tr>
              </tbody>
            </table>
            <div id="addBeer-photo">
              <image src="./images/perla.jpeg" alt="pifko"></image>
            </div>
            <div id="addBeer-description">
              Piwo dla każdego.
          </div>
          </fieldset>
        </from>
      </div>
    )
  }
}