import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const MainView = () => {

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
        <Container>
          <Row>
            <Col><p>jakiś tekst</p></Col>
            <Col><p>ostatnio dodane</p></Col>
            
          </Row>
        </Container>

        <ul id="links">
          <li>Warto zobaczyć:</li>
          <li><a href="https://www.browary-polskie.pl/o-piwie/ciekawostki/">
            Ciekawostki</a></li>
          <li><a href="https://udh.pl/aboutbeer/o-piwie/?">
            Ważne informacje</a></li>
          <li></li>
          <li></li>
        </ul>
      </main>
    </div>
  )
}

export default MainView;