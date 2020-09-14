import React from 'react';
import './css/App.css';
import { Warning } from "./Warning/Warning.jsx"
import { InputForm } from './Add/InputForm.jsx'
import { HeaderConnected } from './Header/HeaderConnected';
import { Footer } from './Footer/Footer.jsx'

export class ConnectedApp extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      warning : true,
      addBeer: false,
      main: false,
    }
    this.entryView = this.entryView.bind(this)
    this.addBeerView = this.addBeerView.bind(this)
  }

  entryView() {
    this.setState({
      warning: false
    })
  }

  addBeerView() {
    this.setState({
      addBeer: true
    })
  }
  
  render () {
    const warning = this.state.warning
    return (
      <div className="connectedApp">
        { warning && <Warning entryView={this.entryView} />}
        { !warning && <HeaderConnected addBeerView={this.addBeerView} /> }
        <br/>
        { this.state.addBeer && <InputForm /> }
        { }
        { !warning && <Footer />}
      </div>

    );
  } 
} 
