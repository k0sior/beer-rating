import React from 'react'
import { base } from "../Catalog/data.js";
import { Container, Row, Col } from 'reactstrap';
import { Preview } from "../Preview/Preview.js";


const MainView = () => {

  console.log("base: ", base);
  const latest = base[base.length - 1]

  console.log("latest: ", latest, "\n", "latest typeof", typeof latest, "\n", "latest.name typeof: ", typeof latest.name);

  // eslint-disable-next-line no-useless-escape
  // const urlRegex = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(:[0-9]+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/

  return (
    <div className="mainViewWrapper">
      <main>
        <title>
          <h1 style={{
            fontSize: 36,
          }}>Witaj na stronie beer-rating
          </h1>
          <h4 style={{
            fontSize: 26
          }}><em>Stworzona dla miłośników piwa</em>
          </h4>

          <p style={{
            maxWidth: "400px",
            fontSize: 18,
          }}>
            <strong>Dobre piwo to coś znacznie więcej niż dobry smak i okazja do spotkania ze znajomymi. To solidny zastrzyk zdrowia. <br /><em>A więc zdrowie!</em></strong>
          </p>
        </title>
        <br /> <br />
        <Container className="mainContainer">
          <Row>
            <Col className="column-1">
              <Preview
                beers={base}
                start={base.length - 1}
                end={base.length}
              />
              <Preview
                beers={base}
                start={base.length - 2}
                end={base.length - 1}
              />
            </Col>

            <Col className="column-2">
              <p> DRUGA KOLUMNA FAJNA ŻE HEJ</p>
            </Col>
          </Row>
        </Container>

      </main>
    </div>
  )
}

export default MainView;