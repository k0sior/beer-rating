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

            <Col className="column-2"
            style={{
              marginTop: 20,
              marginLeft: 20,
            }}>
              <p> <strong>Piwo </strong>– napój alkoholowy otrzymywany w wyniku fermentacji alkoholowej brzeczki piwnej. Brzeczka stanowi wodny wyciąg ze słodu browarnego z dodatkiem chmielu i ewentualnie innych surowców. W szerokim znaczeniu, zwłaszcza historycznym, piwem określa się napój fermentowany oparty na zbożowym surowcu. Piwo to najstarszy i najczęściej spożywany napój alkoholowy oraz trzeci pod względem popularności po wodzie i herbacie napój na świecie.</p>
              <p>Produkcja piwa najczęściej przebiega następująco: </p>
              <ol>
                <li>rozdrobniony słód (zwykle jęczmienny) miesza się z ciepłą wodą, czasem z dodatkiem innych surowców skrobiowych i enzymów,</li>
                <li>uzyskany ekstrakt (brzeczka) wraz z chmielem poddawany jest gotowaniu</li>
                <li>ciecz jest klarowana i schładzana</li>
                <li>dodane drożdże piwowarskie powodują fermentację</li>
                <li>powstałe piwo zazwyczaj filtruje się i podaje jako napój musujący z uwalniającymi się pęcherzykami dwutlenku węgla tworzącymi pianę</li>
              </ol>
              <p>Na charakterystyczne cechy sensoryczne piwa składają się substancje pochodzenia zbożowego, aromat i goryczka chmielowa, alkohol i dwutlenek węgla. Istotnym parametrem piwa jest zawartość ekstraktu przed fermentacją złożonego głównie z cukrów (ulegających przemianom biochemicznym do alkoholu) i dekstryn, a także ze związków azotowych i soli mineralnych. Zwykle zawartość ekstraktu wyrażana jest w stopniach Plato. Najpopularniejsze piwa, jasne lagery, zawierają przeciętnie ponad 90% wody i ok. 5% alkoholu objętościowo, ale wartości te mogą odbiegać w zależności od stylu piwa. Drożdże piwne w procesie fermentacji pozwalają uzyskać do kilkunastu procent alkoholu obj., ale w wyniku wymrażania wody jego zawartość można zwiększyć nawet do ponad 60%. Z drugiej strony przy użyciu odpowiedniej technologii produkcji można uzyskać piwo bezalkoholowe, zawierające poniżej 0,5% alkoholu obj.</p>
              <p>Do piwa w szerokim znaczeniu można zaliczyć również kwas chlebowy z Europy Wschodniej (wytwarzany poprzez fermentację chleba), tak zwane wina ryżowe (np. japońskie sake, chińskie huangjiu, koreańskie cheongju), mętne, fermentujące piwa afrykańskie z prosa, sorga, kukurydzy określane jako opaque beer, wiele fermentowanych napojów z Ameryki Środkowej i Południowej jak chicha z kukurydzy.</p>
            </Col>
          </Row>
        </Container>

      </main>
    </div>
  )
}

export default MainView;