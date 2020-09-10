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
    }

    this.entryView = this.entryView.bind(this)
    this.addBeerView = this.addBeerView.bind(this)
  }

  entryView() {
    this.setState({
      warning: !this.state.warning
    })
  }

  addBeerView() {
    this.setState({
      addBeer: !this.state.addBeer
    })
  }
  
  render () {
    const warning = this.state.warning
    return (
      <div className="connectedApp">
        { warning && <Warning entryView={this.entryView} />}
        { !warning && <HeaderConnected addBeerView={this.addBeerView} /> }
        { this.state.addBeer && <InputForm /> }
        { }
        { !warning && <Footer />}
      </div>

    );
  } 
} 
