import React from 'react';
import './css/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

//displayed outside main content
import { Warning } from "./components/Warning/Warning.jsx";
import { HeaderConnected } from './components/Header/HeaderConnected.jsx';
import { LeftSidebar } from './components/SideBars/LeftSidebar.jsx';
import { RightSidebar } from './components/SideBars/RightSidebar.jsx';
import { Footer } from './components/Footer/Footer.jsx';
//main content
import MainView from "./components/Main/Main.jsx"
import { BeerBase } from "./components/Catalog/BeerBase.jsx";
import { Contact } from "./components/Contact/Contact.jsx";
import { InputForm } from './components/Add/InputForm.jsx';
// functions 
import { addBeerToCatalog } from "./components/Add/AddBeerFunction.jsx"


export class ConnectedApp extends React.Component {

  constructor(props) {
    super(props)
    this.ref = React.createRef();
    this.state = {
      view: "main",
      scrollTop: 0,
      search: "",
    }
    this.changeView = this.changeView.bind(this)
  }

  changeView(tab) {
    this.setState({
      view: tab
    })
  }

  render() {
    const view = this.state.view;

    return (
      <div className="connectedApp">

        { view === "" && <Warning entryView={() => this.changeView("main")} />}

        { view !== "" && <HeaderConnected onScroll={this.onScroll}
          mainView={() => this.changeView("main")}
          catalogView={() => this.changeView("catalog")}
          ratingView={() => this.changeView("rating")}
          contactView={() => this.changeView("contact")}
          addBeerView={() => this.changeView("addBeer")}
        />}

        { view === "main" && <MainView />}
        
        { view !== "" && <LeftSidebar /> && <RightSidebar /> && <Footer />}

        { view === "contact" && <Contact />}

        <div className="catalogWrapper">
          {view === "catalog" && <BeerBase />}
        </div>

        <div className="addWrapper">
          {view === "addBeer" && <InputForm submitForm={() => addBeerToCatalog()} />}
        </div>

      </div>
    );
  }
} 
