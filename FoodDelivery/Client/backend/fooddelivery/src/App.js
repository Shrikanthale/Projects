import "./App.css";
import TopBar from "./components/TopBar";
import About from "./components/About";
import Contact from "./components/Contact";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Policy from "./components/Policy";
import InnerNav from "./components/InnerNav";
import Pizza from "./screens/Pizza";
import Option from "./screens/Option";

function App() {
  return (
    <BrowserRouter>
      <TopBar/>
      <InnerNav/>
      <Switch>
        <Route path="/about" component={About} exact/>
        <Route path="/contact" component={Contact}/>
        <Route path="/policy" component={Policy}/>
        <Route path="/" component={Pizza}/>
        {/* <Route path="/" component={Option}/> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;