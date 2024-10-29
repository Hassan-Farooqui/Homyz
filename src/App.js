import Header from "./Components/Header/Header.jsx"
import './App.css';
import Hero from "./Components/Hero/Hero.jsx";
import Companies from "./Components/Companies/Companies.jsx";
import Resedencies from "./Components/Resedencies/Resedencies.jsx"
import Value from "./Components/Value/Value.jsx"
import Contact from "./Components/Contact/Contact.jsx"
import Footer from "./Components/Footer/Footer.jsx"
import Started from "./Components/GetStarted/Started.jsx"

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"></div>
        <Header/>
        <Hero/>
      </div>
      <Companies/>
      <Resedencies />
      <Value />
      <Contact />
      <Started/>
      <Footer />
      
    </div>
  );
}

export default App;
