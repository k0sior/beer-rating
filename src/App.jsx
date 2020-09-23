import React from 'react';
import './css/index.scss';
//displayed outside main content
import { Warning } from "./components/Warning/Warning.jsx";
import { HeaderConnected } from './components/Header/HeaderConnected.jsx';
import { LeftSidebar } from './components/SideBars/LeftSidebar.jsx';
import { RightSidebar } from './components/SideBars/RightSidebar.jsx';
import { Footer } from './components/Footer/Footer.jsx';
//main content
import { Catalog } from "./components/Catalog/Catalog.jsx";
import { Contact } from "./components/Contact/Contact.jsx";
import { InputForm } from './components/Add/InputForm.jsx';
// functions 
import { addBeerToCatalog } from "./components/Add/AddBeerFunction.jsx"


export class ConnectedApp extends React.Component {
  
  constructor(props) {
    super(props)
    this.ref = React.createRef();
    this.state = {
      view: "addBeer",
      scrollTop : 0,
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
        { view !== "" && <HeaderConnected onScroll={this.onScroll}
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
