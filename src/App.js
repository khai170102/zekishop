import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import FeatersProduct from "./Feauters";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/product" component={FeatersProduct} />
      </Switch>
    </div>
  );
}

export default App;
