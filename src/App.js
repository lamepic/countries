import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import { Switch, Route } from "react-router-dom";
import Quiz from "./Components/Quiz/Quiz";
import Home from "./Components/Home/Home";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/quiz" component={Quiz} />
        <Route component={ErrorPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
