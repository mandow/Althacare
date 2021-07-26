import React, { Component } from 'react'
import Logo from '../../assets/images/logos/logotipo.png'

import { myContext } from '../../Context';

export default class Login extends Component {
    static contextType = myContext;
    constructor(props) {
        super(props);
        this.state = {
            UserLogin: '',
            passwordLogin: '',
        };

    }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
    handleSubmit = e => {
        e.preventDefault();

        let UserLogin = this.state.UserLogin
        let passwordLogin = this.state.passwordLogin

        var x = document.getElementsByClassName("form-control");
        var i;

        if ( UserLogin !== "" && passwordLogin !== "") {
            for (i = 0; i < x.length; i++) {
            x[i].classList.remove("is-invalid");
            }
            var email = document.getElementById('UserLogin');
            var filter = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
            var d =  document.getElementById('UserLogin');
        
            if (!filter.test(email.value)) {
                d.className += " is-invalid";
            alert('Ingresa un correo valido');
         }else{
            //alert('correcto');
            this.context.checkLogin( this.state )

         }
        } else {
            alert('Todos los campos son requeridos');
            
            for (i = 0; i < x.length; i++) {
                x[i].classList.remove("is-invalid");
                if(x[i].value!==''){
                    x[i].className += " is-valid";
                }else{
                x[i].className += " is-invalid";
            }
            }

        }
        //console.log(this.state);
    }
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
                                    name="UserLogin"
                                    placeholder="name@example.com"
                                    required
                                    value={this.state.UserLogin}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="m-3">
                                <label htmlFor="passwordLogin" className="form-label">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="passwordLogin"
                                    name="passwordLogin"
                                    placeholder="****"
                                    required
                                    value={this.state.passwordLogin}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div  className="text-center">
                               
                                <button className="bton btn-althacare-primary-invert m-auto "
                                  onClick={this.handleSubmit}                                 >
                                    Aceptar
                                </button>
                                
                            </div>

                        </div>

                    </div>


                </div>
            </div>)
    }
}