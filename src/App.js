import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import CompleteOrder from './components/CompleteOrder/CompleteOrder';
import Header from './components/Header/Header';
import Notfound from './components/NotFound/Notfound';
import Shope from './components/Shope/Shope';
import ViewCart from './components/ViewCart/ViewCart';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Shope />
          </Route>
          <Route path="/shop">
            <Shope />
          </Route>
          <Route path="/view-cart">
            <ViewCart />
          </Route>
          <Route path="/complete-order">
            <CompleteOrder />
          </Route>
          <Route path="*">
            <Notfound />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
