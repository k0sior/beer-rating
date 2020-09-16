import React from 'react';
import './css/index.scss';
//displayed outside main content
import { Warning } from "./Warning/Warning.jsx";
import { HeaderConnected } from './Header/HeaderConnected.jsx';
import { LeftSidebar } from './SideBars/LeftSidebar.jsx';
import { RightSidebar } from './SideBars/RightSidebar.jsx';
import { Footer } from './Footer/Footer.jsx';
//main content
import { Contact } from "./Contact/Contact.jsx";
import { InputForm } from './Add/InputForm.jsx';


export class ConnectedApp extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      warning : false,
      view: "main"
    }
    this.entryView = this.entryView.bind(this);
    this.contactView = this.contactView.bind(this);
    this.addBeerView = this.addBeerView.bind(this);
  }

  entryView() {
    this.setState({
      warning: false,
    })
  }

  mainPageView() {
    this.setState({
      view: "main"
    })
  }

  contactView() {
    this.setState({
      view: "contact"
    })
  }

  addBeerView() {
    this.setState({
      view: "addBeer",
    })
  }

  render () {
    const warning = this.state.warning;
    const view = this.state.view;

    return (
      <div className="connectedApp">
        { warning && <Warning entryView={this.entryView} />}
        { !warning && <HeaderConnected            
          contactView={this.contactView}
          addBeerView={this.addBeerView}/> 
          }
        { !warning && <LeftSidebar />}
        { !warning && <RightSidebar />}
        { !warning && <Footer />}

        <div className="mainWrapper">
          { view === "addBeer" && <InputForm /> }
          { view === "contact" && <Contact /> }
        </div>
      </div>
    );
  } 
} 
