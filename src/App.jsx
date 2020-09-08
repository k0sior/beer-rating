import React from 'react';
import './css/App.css';
import { Warning } from "./Warning/Warning.jsx"
import { InputForm } from './Add/InputForm.jsx'


export class ConnectedApp extends React.Component {
  
  constructor(props) {
    super(props)

    this.stat = {
      active: "warning"
    }
  }

  changeView(view) {
    this.setState({
      active: view
    })
  }

  render () {

    return (
      <div className="connectedApp">
        <Warning />
        <InputForm />

        
      </div>
    );
  }
}


