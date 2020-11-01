import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import { base } from "../Catalog/data.js";

console.log(base[0])

const MainView = () => {
  const latest = base.length - 1;
  console.log(latest);
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
        {console.log(base[latest])}
        <Container>
          <Row>
            <Col>
              <p>jakiś tekst</p>
            </Col>
            <Col>
              <div className="beerBase">
                {Object.values(base[latest]).map((data, key) => {
                  return (
                    <div id={"beer" + key} key={"beer" + key}>
                      { data !== "" &&
                        <li className={"beer" + data.toString()} >
                          <span>
                            {data}
                          </span>
                        </li>
                      }
                    </div>
                  )
                })}
              </div>
            </Col>
          </Row>
        </Container>


      </main>
    </div>
  )
}

export default MainView;