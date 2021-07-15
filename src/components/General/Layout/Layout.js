import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import ModalBlock from '../ModalBlock';
import { myContext } from '../../../Context';
export default class Layout extends Component {
    static contextType = myContext;
 
    componentDidMount() {
   // console.log(this.context.state);
        
    }
    render(props) {
 
        return (
            <>
            <header className="navbar navbar-dark sticky-top bg-danger flex-md-nowrap p-0 shadow" >
                <Link to="/" className=" col-md-3 col-lg-2 me-0 p-3 bg-white text-center"  style={{height:'100%'}}>
                    <img
                        src="https://althacare.com/wp-content/uploads/2019/03/logoalthacarenewv2-300x85.png"
                        alt="logotipo althacare"
                        className="img-fluid m-auto"
                        
                    />
                </Link>
                <div className="navbar-nav">
                    <div className="nav-item text-nowrap">
                        <label className="nav-link px-3">Roche </label>
                    </div>
                </div>
                
            </header>
            <div className="container-fluid">
                <div className="row">
                    <nav
                        id="sidebarMenu"
                        className="col-md-3 col-lg-2 d-md-block bg-white sidebar collapse"
                    >
                        <div className="position-sticky pt-3">
                            <ul className="nav flex-column">
                                <li className="nav-item" onClick={
                                    (event) => {this.context.changePage('panel-inicio')}
                                }>
                                <Link to="/panel" className={ this.context.state.page==='panel-inicio' ? 'nav-link text-danger fw-bold' : 'nav-link text-danger '}>
                                         Inicio
                                </Link>
                                </li>
                                <li className="nav-item" onClick={
                                    (event) => {this.context.changePage('panel-casos')}
                                }>
                                <Link to="/panel/casos" className={ this.context.state.page==='panel-casos' ? 'nav-link text-danger fw-bold' : 'nav-link text-danger '}>
                                 Casos
                                </Link>
                                </li>
                                <li className="nav-item" onClick={
                                    (event) => {this.context.changePage('panel-pacientes')}
                                }>
                                <Link to="/panel/pacientes" className={ this.context.state.page==='panel-pacientes' ? 'nav-link text-danger fw-bold' : 'nav-link text-danger '}>
                                 Pacientes
                                </Link>
                                </li>
                                <li className="nav-item" onClick={
                                    (event) => {this.context.changePage('panel-productos')}
                                }>
                                <Link to="/panel/productos" className={ this.context.state.page==='panel-productos' ? 'nav-link text-danger fw-bold' : 'nav-link text-danger '}>
                                 Productos
                                </Link>
                                </li>
                                <li className="nav-item" onClick={
                                    (event) => {this.context.changePage('panel-doctores')}
                                }>
                                <Link to="/panel/doctores" className={ this.context.state.page==='panel-doctores' ? 'nav-link text-danger fw-bold' : 'nav-link text-danger '}>
                                 Doctores
                                </Link>
                                </li>
                                <li className="nav-item" onClick={
                                    (event) => {this.context.changePage('panel-facturas')}
                                }>
                                <Link to="/panel/facturas" className={ this.context.state.page==='panel-facturas' ? 'nav-link text-danger fw-bold' : 'nav-link text-danger '}>
                                 Facturas
                                </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-2 bg-light">
                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h1 className="h2"> {this.props.texto}</h1>
                        </div>
                        <p>{this.props.descripcion}</p>
                        <div
                            className="container bg-white card border rounded"
                            style={{ height: "40em", overflowX:'auto' }}
                        >
                            {this.props.children}
                        </div>
                        <div id="footer" className="footer p-1 m-2" >
                            Derechos reservados.
                        </div>
                    </main>
                </div>
            </div>
            <ModalBlock contenido="hola">
                    <iframe src={this.props.url} style={{height: '60vh', width: '100%'}} title="Iframe Example" />
                </ModalBlock>
        </>
   
        )
    }
}

