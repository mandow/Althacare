import React, { Component } from 'react'
import Logo from '../../assets/images/logos/logotipo.png'

import { myContext } from '../../Context';

export default class Login extends Component {
    static contextType = myContext;

    render() {
         
        return (
            <div className="container" >
                <div className="row justify-content-center">
                    <div className="col-xs-12 col-md-8 col-xl-6">
                        <div className="separator"></div>
                        <div className="card p-3 border-0">
                        <div className="separator"></div>

                            <div className="text-center">
                                <img src={Logo} alt="Logotipo Althacare"/>
                            </div>
                            
                            <p className="h1 text-center m-4">
                               <b>Bienvenido</b> 
                            </p>
                            
                            <div className="m-3">
                                <label htmlFor="UserLogin" className="form-label">
                                    Usuario
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="UserLogin"
                                    placeholder="name@example.com"
                                    required
                                />
                            </div>
                            <div className="m-3">
                                <label htmlFor="passwordLogin" className="form-label">
                                    Password
                                </label>
                                <input
                                    type="passwprd"
                                    className="form-control"
                                    id="passwordLogin"
                                    placeholder="****"
                                    required
                                />
                            </div>
                            <div  className="text-center">
                               
                                <button className="bton btn-althacare-primary-invert m-auto "
                                  onClick={
                                    (event) => {this.context.checkLogin()}
                                }
                                 >
                                    Aceptar
                                </button>
                                
                            </div>

                        </div>

                    </div>


                </div>
            </div>)
    }
}
