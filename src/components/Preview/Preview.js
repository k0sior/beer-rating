import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FaBeer } from "react-icons/fa"
import StarRating from "../Catalog/Rating"

export class Preview extends React.Component {

  state = {
    preview: "all",
  }
  
  render() {

    const urlRegex = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+(:[0-9]+)?|(?:www.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[\w]*))?)/

    const start = this.props.start;
    const end = this.props.end;
    const beers = this.props.beers;

    function displayElement() {
      console.log("ELEMENT")
    }

    return (
      <div className="beerBase">
        {[...beers].slice(start, end).map((data, key) => {
          console.log("typeof data:", typeof data, data)
          return (
            <div
              id={"beer-" + data.name.slice(0, 5).toLowerCase().toString()}
              key={"beer" + key}>
              {<div key={"beer" + key} id={"beer" + key}>
                {<div className={"catalogElementWrapper"}>
                  <fieldset>
                    <legend>
                      <span id="catalog-name">
                        <button onClick={() => displayElement()}>
                          {data.name.substring(0, 30)}
                        </button>
                      </span>
                    </legend>
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
                        {data.hop.trim() !== "" &&
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
                        <Row>
                          <Col xs={5}></Col>
                          <Col xs={6} style={{
                            marginLeft: 15,
                          }}>
                            <StarRating />
                          </Col>
                        </Row>

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
                            }} />
                        }
                      </div>
                    </div>
                  </fieldset>
                </div>
                }
              </div>
              }
            </div>
          )
        })}
      </div>
    )
  }
}

export default Preview;
