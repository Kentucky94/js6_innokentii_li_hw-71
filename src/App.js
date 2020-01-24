import React from 'react';
import {Switch, Route} from "react-router-dom";

import Layout from "./components/Layout/Layout";
import MainPage from "./containers/MainPage/MainPage";
import DishesPage from "./containers/DishesPage/DishesPage";
import CreateDishPage from "./containers/CreateDishPage/CreateDishPage";
import EditDishesPage from "./containers/EditDishesPage/EditDishesPage";
import OrdersPage from "./containers/OrdersPage/OrdersPage";

import './App.css';


const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact component={MainPage} />
        <Route path='/dishes' exact component={DishesPage} />
        <Route path='/dishes/create' exact component={CreateDishPage} />
        <Route path='/dishes/edit/:id' component={EditDishesPage} />
        <Route path='/orders' exact component={OrdersPage} />
        <Route render={() => <h2>PAGE NOT FOUND</h2>} />
      </Switch>
    </Layout>
  );
};

export default App;