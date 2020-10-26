import React from 'react'
import { base } from "./data.js"
import { StarRating } from "./Rating.jsx"
import { Container, Row, Col } from 'reactstrap';
import { FaBeer } from "react-icons/fa"


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

    const urlRegex = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(:[0-9]+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/

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
        <div className="beerBase">
          {filteredBeers.map((data, key) => {
            return (
              <div key={"beer" + key} id={"beer" + key}>
                {data.name.length >= 3 &&
                  <div className={"catalogElementWrapper"}>
                    <fieldset>
                      <legend><span id="catalog-name">{data.name.substring(0, 30)}</span></legend>
                      <div className="catalogElement">
                        <Container>
                          <Row>
                            <Col>Typ </Col>
                            <Col xs={8}><span id="catalog-type">{data.type}</span></Col>
                          </Row>
                          <Row>
                            <Col>Alk. </Col>
                            <Col xs={8}><span id="catalog-alcohol" >{data.alc}</span></Col>
                          </Row>
                          {data.ext !== "" &&
                            <Row>
                              <Col>Eks. </Col>
                              <Col xs={8}><span id="catalog-extract" >{data.ext}</span></Col>
                            </Row>}
                          {data.ibu !== "" &&
                            <Row>
                              <Col>IBU </Col>
                              <Col xs={8}><span id="catalog-ibu" >{data.ibu}</span></Col>
                            </Row>}
                          {data.hop !== "" &&
                            <Row>
                              <Col>Chmiele </Col>
                              <Col xs={8}><span id="catalog-hop" >{data.hop}</span></Col>
                            </Row>}
                          {data.prod !== "" &&
                            <Row>
                              <Col>Producent/ Importer </Col>
                              <Col xs={8}><span id="catalog-producer" >{data.prod}</span></Col>
                            </Row>}
                          {data.country !== "" &&
                            <Row>
                              <Col>Kraj pochodzenia </Col>
                              <Col xs={8}><span id="catalog-country" >{data.country}</span></Col>
                            </Row>}
                          <br />
                          {<Row>
                            <Col> Oceń </Col>
                            <Col xs={8}><span id="catalog-rating"> <StarRating /> </span></Col>
                          </Row>
                          }
                        </Container>
                        <div id="catalog-description">
                          {data.description}
                        </div>
                        <div id="catalog-photo">
                          {urlRegex.test(data.photo) &&
                            <img src={data.photo} alt=""></img>}

                          {urlRegex.test(data.photo) === false &&
                            <FaBeer size={200}
                              style={{
                                color: "rgb(220,220,220)"
                              }} />}
                        </div>
                      </div>
                    </fieldset>
                  </div>
                }
              </div>
            )
          })}
        </div>
      </div>

    )
  }

}