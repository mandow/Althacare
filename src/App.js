import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage'
import Panel from './pages/PanelPage'
import Login from './pages/LoginPage'
import './styles/General/General.css'
import {MyProvider} from './Context';
import Casos from './components/Panel/Casos/Casos';
import Facturas from './components/Panel/Facturas/Facturas';
import AgregarCaso from './components/Panel/Casos/AgregarCaso'
import EditarCaso from './components/Panel/Casos/EditarCaso'

class App extends Component {
  render() {
  return (
    <div className="App">
      <MyProvider >
        <Router>
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/panel" component={Panel} />
            <Route exact path="/panel/casos" component={Casos} />
            <Route exact path="/panel/agregar-caso" component={AgregarCaso} />
            <Route path="/panel/editar-caso" component={EditarCaso}/>
            <Route exact path="/panel/facturas" component={Facturas} />
            </Switch>
        </Router>
        </MyProvider>
    </div>
  );
  }
}

export default App;