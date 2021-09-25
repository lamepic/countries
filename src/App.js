import { useEffect, useState } from "react";
import "./App.css";
import Card from "./Components/Card/Card";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetchCountries();
  }, []);

  async function fetchCountries() {
    const req = await fetch("https://restcountries.eu/rest/v2/regionalbloc/au");
    const res = await req.json();
    setCountries(res);
  }

  return (
    <>
      <nav>
        <h1>Country Facts</h1>
      </nav>
      <div className="container">
        {/* {countries.map((country, idx) => {
          const { name, capital, population, region, flag } = country;
          return (
            <Card
              name={name}
              flag={flag}
              population={population}
              continent={region}
              capital={capital}
              key={idx}
            />
          );
        })} */}
        <h1 className="info">
          API down, under construction
        </h1>
        <p className="info-text">Stay tuned for exciting features and look</p>
      </div>
    </>
  );
}

export default App;
