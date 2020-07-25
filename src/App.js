import React from "react";
import "./components/styles/main.css";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" component={Landing} exact />
          <Route path="/galeria" component={Gallery} />
          <Route path="/contacto" component={Contact} />
          <Route path="/acerca-de" component={About} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
