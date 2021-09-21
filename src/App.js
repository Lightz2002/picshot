import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PhotoGrid from "./components/PhotoGrid";
import PhotoGridProvider from "./components/PhotoGridContext";

function App() {
  return (
    <PhotoGridProvider>
      <Router>
        <div className="app">
          <Header />
          <Main />
          <Switch>
            <Route
              path="/summer"
              exact
              render={(props) => <PhotoGrid {...props} tag="summer" />}
            />
            <Route
              path="/mountain"
              render={(props) => <PhotoGrid {...props} tag="mountain" />}
            />
            <Route
              path="/leave"
              render={(props) => <PhotoGrid {...props} tag="leave" />}
            />
          </Switch>
        </div>
      </Router>
    </PhotoGridProvider>
  );
}

export default App;
