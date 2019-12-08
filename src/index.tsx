import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import 'bootstrap'
import './styles/estilo-base.scss'


import Detalhes from './components/detalhes';
import Tabela from './components/tabela';




ReactDOM.render (
<BrowserRouter>
<Switch>
<Route path='/' exact={true} component={Tabela}></Route>
<Route path='/detalhes/:id' component={Detalhes}></Route>
</Switch>
</BrowserRouter>,
  document.getElementById("root")
)