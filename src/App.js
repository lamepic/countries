import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import { Switch, Route } from "react-router-dom";
import Quiz from "./Components/Quiz/Quiz";
import Home from "./Components/Home/Home";
import { useStateValue } from "./StateProvider";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    getCountries();
  }, []);

  const getCountries = async () => {
    const req = await fetch(
      `http://api.countrylayer.com/v2/all?access_key=${process.env.REACT_APP_COUNTRY_API_KEY}`
    );
    const res = await req.json();
    const data = await res;
    dispatch({
      type: "SET_COUNTRIES",
      payload: data,
    });
  };

  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/quiz" component={Quiz} />
        <Route component={ErrorPage} />
      </Switch>
    </>
  );
}

export default App;
