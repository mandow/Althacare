import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage'
import Panel from './pages/PanelPage'
import Login from './pages/LoginPage'
import './styles/General/General.css'
import { MyProvider } from './Context';
import Casos from './components/Panel/Casos/Casos';
import Facturas from './components/Panel/Facturas/Facturas';
import AgregarCaso from './components/Panel/Casos/AgregarCaso'
import EditarCaso from './components/Panel/Casos/EditarCaso'
import Doctores from './components/Panel/Doctores/Doctores';
import Productos from './components/Panel/Productos/Productos';
import Pacientes from './components/Panel/Pacientes/Pacientes';
import AgregarPaciente from './components/Panel/Pacientes/Pacientes';
import EditarPaciente from './components/Panel/Pacientes/Pacientes';
import AgregarProducto from './components/Panel/Productos/AgregarProducto';
import EditarProducto from './components/Panel/Productos/EditarProducto';
import AgregarDoctor from './components/Panel/Doctores/AgregarDoctor'
import EditarDoctor from './components/Panel/Doctores/EditarDoctor';

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
              <Route path="/panel/editar-caso" component={EditarCaso} />
              <Route exact path="/panel/facturas" component={Facturas} />
              <Route exact path="/panel/agregar-caso" component={AgregarCaso} />
              <Route path="/panel/editar-caso" component={EditarCaso} />
              <Route exact path="/panel/pacientes" component={Pacientes} />
              <Route exact path="/panel/agregar-paciente" component={AgregarPaciente} />
              <Route path="/panel/editar-paciente" component={EditarPaciente} />
              <Route exact path="/panel/producto" component={Productos} />
              <Route exact path="/panel/agregar-producto" component={AgregarProducto} />
              <Route path="/panel/editar-productos" component={EditarProducto} />
              <Route exact path="/panel/doctores" component={Doctores} />
              <Route exact path="/panel/agregar-doctor" component={AgregarDoctor} />
              <Route path="/panel/editar-doctor" component={EditarDoctor} />
            </Switch>
          </Router>
        </MyProvider>
      </div>
    );
  }
}

export default App;