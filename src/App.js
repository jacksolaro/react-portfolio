import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import PortfolioPage from "./pages/PortfolioPage";

function App() {
  function Home() {
    return <HomePage></HomePage>;
  }

  function Portfolio() {
    return <PortfolioPage></PortfolioPage>;
  }

  function Contact() {
    return <h2>Contact</h2>;
  }

  return (
    // <div className="">
    //   <header className="">
    //     <Nav></Nav>
    //     <Portfolio></Portfolio>
    //     <Footer></Footer>
    //   </header>
    // </div>

    <Router>
      <div>
        <nav>
          <Nav></Nav>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
      renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

        <footer>
          <Footer></Footer>
        </footer>
      </div>
    </Router>
  );
}

export default App;
