import React from 'react'

export class Perla extends React.Component {

  render() {

    return (
      <div className="catalogElementWrapper">
        <fieldset>
          <legend><span id="catalog-name">Perła Chmielowa</span></legend>

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

                <tr>
                  <th>Oceń</th>
                  <td></td>
                </tr>
              </tbody>
            </table>
            <div id="catalog-description">
                Fajny opisik blebl lblblblsad sdldsl lslsl adas asdas asa aasas as a aw a  ssssass asd as d asd as  asddddddddd assssssssssssssssss asssssssssss
              </div>
        <div id="catalog-photo">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSdp5GpEKUkJMz7Xhz8K3WTewCm5IZWPrLglw&usqp=CAU" alt="pifko"></img>
        </div>

          </div>
        </fieldset>

      </div>
    )
  }
}

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

                <tr className="starRating">
                  <th >3.5/5.0</th>
                  <td>
                    <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                  </td>
                </tr>
              </tbody>
            </table>
            <div id="catalog-photo">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Butelka_Tyskie_bez_cienia.png/162px-Butelka_Tyskie_bez_cienia.png" alt="pifko"></img>
            </div>
            <div id="catalog-description">
              Fajny opisik a nie bieda jakaś
              </div>
          </div>
        </fieldset>

      </div>
    )
  }
}