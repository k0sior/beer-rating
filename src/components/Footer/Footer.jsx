import React from 'react'
import { FaBeer } from "react-icons/fa"

export class Footer extends React.Component {


  render() {
    const piwko = <FaBeer size={25} style={{marginLeft:5}}/>
    
    return (
      <footer className="footerWrapper">
        

        <ul id="links">
          <li><strong>Warto zobaczyć:</strong></li>
          {piwko}
          <li><a href="https://www.browary-polskie.pl/o-piwie/ciekawostki/">
             Ciekawostki</a></li>
          {piwko}

          <li><a href="https://udh.pl/aboutbeer/o-piwie/?">
            Ważne informacje</a></li>
          {piwko}

          <li></li>
          {piwko}

          <li></li>
        </ul>
        <p>Strona stworzona przez <a href="https://github.com/k0sior" className="gitLink"><strong>k0sior</strong></a></p>
      </footer>

    )
  }
}