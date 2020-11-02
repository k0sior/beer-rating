import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import { base } from "../Catalog/data.js";
import { FaBeer } from "react-icons/fa"

const MainView = () => {

  console.log("base: ", base);
  const latest = base[base.length - 1]

  console.log("latest: ", latest, "\n", "latest typeof", typeof latest, "\n", "latest.name typeof: ", typeof latest.name);

  // eslint-disable-next-line no-useless-escape
  const urlRegex = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(:[0-9]+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/

  return (
    <div className="mainViewWrapper">
      <main>
        <title>
          <h1 style={{
            fontSize: 36,
          }}>Witaj na stronie beer-rating</h1>
          <h4 style={{
            fontSize: 26
          }}><em>Stworzona dla miłośników piwa</em></h4>

          <p style={{
            maxWidth: "400px",
            fontSize: 18,
          }}>
            <strong>Dobre piwo to coś znacznie więcej niż dobry smak i okazja do spotkania ze znajomymi. To solidny zastrzyk zdrowia. <br /><em>A więc zdrowie!</em></strong>
          </p>
        </title>
        <br/> <br/>
        <Container className="mainView">
          <Row>

            <Col xl={8} className="mainColumn">
              <h4> Ostatnio dodane</h4>
              <div className="beerBase">
                {base.slice(base.length - 2, base.length).map((data, key) => {
                  console.log("typeof data:", typeof data, data)
                  return (
                    <div id={"beer" + key} key={"beer" + key}>
                      {
                        <div key={"beer" + key} id={"beer" + key}>
                          {
                            <div className={"catalogElementWrapper"}>
                              <fieldset>
                                <legend>
                                  <span id="catalog-name">{data.name}</span>
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
            </Col>
            <Col xl={4} className="mainColumn">
              <p> piwko oto wspaniałaa rzecz jest, naturalnie jest to płyn niezbedny do zycia a takze do codziennej egzystencji, bo bez niego to tjest tylko kiszka i</p>
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  )
}

export default MainView;