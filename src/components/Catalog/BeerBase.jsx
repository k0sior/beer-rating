import React from 'react'
import { base } from "./data.js"
import { Preview } from "../Preview/Preview.js";

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
    const beersList = base.filter(beer => {
      return beer.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
        || beer.type.toLowerCase().indexOf(search.toLowerCase()) !== -1
    })

    return (
      <div className="beerBaseWrapper">
        <div className='searchBoxWrapper'>
          <form>
            <label htmlFor="searchBeer"></label>
            <br />
            <input
              id="searchBeer"
              type="text"
              placeholder="Szukaj..."
              onChange={this.updateSearch} />
          </form>
        </div>
        <Preview 
          beers={beersList}
          start={0}
          end={base.length}
        />
      </div>
    )
  }
}