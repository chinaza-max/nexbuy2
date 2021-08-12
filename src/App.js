import './App.css';
import {BrowserRouter as Router, Route,Switch} from "react-router-dom";
import Body from "./components/Home";
import ProductDetail from "./components/ProductDetailFragment/ProductDetail"
import Cart from "./components/CartFragment/CartBody"

function App() {
  return (
    <Router>
        <Switch>
            <Route path="/" exact component={Body}/>
            <Route path="/Home/CartPurchase" component={ProductDetail}/>
            <Route path="/Home/cart" component={Cart}/>
        </Switch>
      </Router>
  );
}

export default App;
