import './App.css';
import {BrowserRouter as Router, Route,Switch} from "react-router-dom";
import Body from "./components/Home";
import ProductDetail from "./components/ProductDetailFragment/ProductDetail"

function App() {
  return (
    <Router>
        <Switch>
            <Route path="/" exact component={Body}/>
            <Route path="/Home/:id/CartPurchase" component={ProductDetail}/>
        </Switch>
      </Router>
  );
}

export default App;
