import './App.css';
import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import Menu from './components/Menu'
import Order from "./components/Order";
import SignIn from "./components/SignIn";
import KitchenClass from "./components/KitchenClass";
import PizzaGarden from "./components/PizzaGarden"
import OrderNew from "./components/OrderNew"
import WaiterClass from "./components/WaiterClass";
import SingInClass from "./components/SingInClass";
import SignUpClass from "./components/SignUpClass";
import AdminClass from "./components/Admin/AdminClass";
import ManagerClass from "./components/Manager/ManagerClass";
import HomeClass from "./components/HomeClass";


function App() {
    return (
      <BrowserRouter>
      <Switch>
          <Route path={'/'} exact component={SingInClass}/>
          <Route path={'/signup'} component={SignUpClass}/>
          <Route path={'/pizzagarden/:id'} component={HomeClass}/>
          <Route exact path={'/pizzagarden/0'} component={HomeClass}/>
          <Route exact path={'/pizzagarden'} component={HomeClass}/>
          <Route path={'/menu'} component={PizzaGarden}/>
          <Route path={'/kitchen'} component={KitchenClass}/>
          <Route path={'/order'} component={OrderNew}/>
          <Route path={'/waiter'} component={WaiterClass}/>
          <Route path={'/admin'} component={AdminClass}/>
          <Route path={'/manager'} component={ManagerClass}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
