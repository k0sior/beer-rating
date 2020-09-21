import React from 'react';
import './css/index.scss';
//displayed outside main content
import { Warning } from "./Warning/Warning.jsx";
import { HeaderConnected } from './Header/HeaderConnected.jsx';
import { LeftSidebar } from './SideBars/LeftSidebar.jsx';
import { RightSidebar } from './SideBars/RightSidebar.jsx';
import { Footer } from './Footer/Footer.jsx';
//main content
import { Catalog } from "./Catalog/Catalog.jsx";
import { Contact } from "./Contact/Contact.jsx";
import { InputForm } from './Add/InputForm.jsx';
// functions 
import { addBeerToCatalog } from "./Add/AddBeerFunction.jsx"


export class ConnectedApp extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      view: "catalog"
    }
    this.changeView = this.changeView.bind(this)
  }

  componentDidMount(){

  }

  componentDidUpdate() {

  }

  handleChange(e) {
    
  }
  
  changeView(tab) {
    this.setState({
      view: tab
    })
  }



  render () {
    const view = this.state.view;
    return (
      <div className="connectedApp">
        { view === "" && <Warning entryView={() => this.changeView("main")} />}
  
        { view !== "" && <HeaderConnected
          mainTabView={() => this.changeView("main")}
          catalogView={() => this.changeView("catalog")}
          ratingView={() => this.changeView("rating")}
          contactView={() => this.changeView("contact")}
          addBeerView={() => this.changeView("addBeer")}
        />}

        { view !== "" && <LeftSidebar />}
        { view !== "" && <RightSidebar />}
        { view !== "" && <Footer />}
        { view === "contact" && <Contact /> }
        { view === "catalog" && <Catalog />}
        <div className="addWrapper">     
          { view === "addBeer" && <InputForm submitForm={() => addBeerToCatalog()}/> }
        </div>
        
      </div>
    );
  } 
} 
