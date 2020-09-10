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
      warning : false,
      main: false,
      addBeer: false,

    }
    this.entryView = this.entryView.bind(this)
  }

  entryView() {
    this.setState({
      warning: !this.state.warning
    })
  }

  render () {
    const warning = this.state.warning
    return (
      <div className="connectedApp">
        { warning && <Warning entryView={this.entryView} />}
        { !warning && <HeaderConnected /> }
        { this.state.addBeer && <InputForm /> }
        { }
        { !warning && <Footer />}
      </div>

    );
  } 
} 
