import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import { Switch, Route } from "react-router-dom";
import Quiz from "./Components/Quiz/Quiz";
import Home from "./Components/Home/Home";

function App() {
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
