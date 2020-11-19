import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";

function App() {
  function Home() {
    return <HomePage></HomePage>;
  }

  function Portfolio() {
    return <PortfolioPage></PortfolioPage>;
  }

  function Contact() {
    return <ContactPage></ContactPage>;
  }

  return (
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
          <Route component={Home} />
        </Switch>

        <footer>
          <Footer></Footer>
        </footer>
      </div>
    </Router>
  );
}

export default App;
