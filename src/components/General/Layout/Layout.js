import React from 'react'
import { Link } from 'react-router-dom';
import ModalBlock from '../ModalBlock';


const Layout = (props) => {

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
                                <li className="nav-item">
                                <Link to="/panel" className="nav-link text-danger active">
                                <span data-feather="home" />
                                        Inicio
                                </Link>
                                </li>
                                <li className="nav-item">
                                <Link to="/panel/casos" className="nav-link text-danger active">
                                <span data-feather="home" />
                                Casos
                                </Link>
                                </li>
                                <li className="nav-item">
                                <Link to="/panel/facturas" className="nav-link text-danger active">
                                <span data-feather="home" />
                                Facturas
                                </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-2 bg-light">
                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h1 className="h2"> {props.texto}</h1>
                        </div>
                        <p>{props.descripcion}</p>
                        <div
                            className="container bg-white card border rounded"
                            style={{ height: "40em", overflowX:'auto' }}
                        >
                            {props.children}
                        </div>
                        <div id="footer" className="footer p-3 m-3" >
                            Derechos reservados.
                        </div>
                    </main>
                </div>
            </div>
            <ModalBlock contenido="hola">
                    <iframe src={props.url} style={{height: '60vh', width: '100%'}} title="Iframe Example" />
                </ModalBlock>
        </>
    )
}

export default Layout;