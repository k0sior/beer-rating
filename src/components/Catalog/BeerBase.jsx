import React from 'react'
import { base } from "./data.js"

export class BeerBase extends React.Component {

  state = {
    search: "",
  }

  updateSearch = (e) => {
    this.setState({
      search: e.target.value
    })
  }

  render() {

    const search = this.state.search;
    const filteredBeers = base.filter(beer => {
      return beer.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
        || beer.type.toLowerCase().indexOf(search.toLowerCase()) !== -1
    })

    return (
      <div className="beerBaseWrapper">
        <div className='searchBoxWrapper'>
          <form>
            <label htmlFor="searchBeer">Szukaj piwa</label>
            <br />
            <input
              id="searchBeer"
              type="text"
              placeholder="Szukaj..."
              onChange={this.updateSearch} />
          </form>
        </div>
        <div className="beerBase">
          {filteredBeers.map((data, key) => {
            return (
              <>
                {data.name.length >= 3 &&
                  <div className="catalogElementWrapper">
                    <fieldset>
                      <legend><span id="catalog-name" key={key}>{data.name.substring(0, 30)}</span></legend>
                      <div className="catalogElement">
                        <table>
                          <tbody>
                            <tr>
                              <th>Typ </th>
                              <td><span id="catalog-type">{data.type}</span></td>
                            </tr>
                            <tr>
                              <th>Alk. </th>
                              <td><span id="catalog-alcohol">{data.alc}</span></td>
                            </tr>
                            {data.ext !== "" &&
                              <tr>
                                <th>Eks. </th>
                                <td><span id="catalog-extract">{data.ext}</span></td>
                              </tr>}
                            {data.ibu !== "" &&
                              <tr>
                                <th>IBU </th>
                                <td><span id="catalog-ibu">{data.ibu}</span></td>
                              </tr>}
                            {data.hop !== "" &&
                              <tr>
                                <th>Chmiele </th>
                                <td><span id="catalog-hop">{data.hop}</span></td>
                              </tr>}
                            {data.prod !== "" &&
                              <tr>
                                <th>Producent/ Importer </th>
                                <td><span id="catalog-producer">{data.prod}</span></td>
                              </tr>}
                            {data.country !== "" &&
                              <tr>
                                <th>Kraj pochodzenia </th>
                                <td><span id="catalog-country">{data.country}</span></td>
                              </tr>}
                          </tbody>
                        </table>
                        <div id="catalog-description">
                          {data.description}
                        </div>
                        <div id="catalog-photo">
                          <img src={data.photo} alt="BRAK ZDJĘCIA"></img>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                }
              </>
            )
          })}
        </div>
      </div>

    )
  }

}