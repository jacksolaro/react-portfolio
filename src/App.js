import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div className="">
      <header className="">
        <Nav></Nav>
        <Portfolio></Portfolio>
        <Footer></Footer>
      </header>
    </div>
  );
}

export default App;
