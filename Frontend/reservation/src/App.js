import Reservation from "./components/Reservation";
import Navbar from "./components/Navbar";
import Businesses from "./components/Businesses";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserProfile from "./components/UserProfile";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="appContent">
          <Switch>
            <Route
              path="/rooms/:username"
              name="Reservation"
              component={Reservation}
            ></Route>

            <Route path="/businesses">
              <Businesses />
            </Route>

            <Route
              path="/profile/:username"
              name="UserProfile"
              component={UserProfile}
            ></Route>
            <Route path="/">
              <Login />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
