import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero"
import App2 from './App2.css'
import Company from "./components/companies/Company";
import Residencies from "./components/Residencies/Residencies";
import Value from "./components/Value/Value";

function App() {
  return (
    <div className="App">
      <div className="parent2">
        <div className="white-gradient"></div>
        <Header />
        <Hero />
      </div>
      <Company/>
      <Residencies/>
      <Value/>
    </div>
  );
}

export default App;
