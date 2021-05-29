import ContactUS from "./pages/ContactUS";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <ContactUS />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
