import React, { Component } from 'react'
import { myContext } from '../../../Context';
import Layout from '../../General/Layout/Layout'

export default class AgregarPaciente extends Component {
    static contextType = myContext;
    componentDidMount() {
        this.context.changePage('panel-pacientes')

    }
    constructor(props) {
        super(props);
        this.state = {
            Name: '',
            LastName: '',
            SecondLastName: '',
            BirthDate: '',
            Gender: '',
            Email: '',
            MainPhoneNumber: '',
            SecondPhoneNumber: '',
            Street: '',
            InternalCode: '',
            ExternalCode: '',
            PostalCode: '',
            Suburb: '',
            City: '',
            State: '',
            Country: '',
            ExtraInformation: ''
        };

    }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
    handleSubmit = e => {
        e.preventDefault();
        let Name = this.state.Name
        let LastName = this.state.LastName
        let SecondLastName = this.state.SecondLastName
        let BirthDate = this.state.BirthDate
        let Gender = this.state.Gender

        let Email = this.state.Email
        let MainPhoneNumber = this.state.MainPhoneNumber
        //let SecondPhoneNumber = this.state.SecondPhoneNumber

        let Street = this.state.Street
        let InternalCode = this.state.InternalCode
        //let numeroExterior = this.state.numeroExterior
        let PostalCode = this.state.PostalCode
        let Suburb = this.state.Suburb
        let City = this.state.City
        let State = this.state.State
        let Country = this.state.Country
        //let ExtraInformation = this.state.ExtraInformation

        if (Name !== ""
            && LastName !== ""
            && SecondLastName !== ""
            && BirthDate !== ""
            && Gender !== ""
            && Email !== ""
            && MainPhoneNumber !== ""
           // && SecondPhoneNumber !== ""
            && Street !== ""
            && InternalCode !== ""
            && PostalCode !== ""
            && Suburb !== ""
            && City !== ""
            && State !== ""
            && Country !== ""
           // && ExtraInformation !== ""
        ) {
            this.context.addPatient(this.state)
        } else {
            alert('Todos los campos son requeridos');
        }
        //console.log(this.state);
    }
    render() {
        return (
            <Layout texto='PACIENTES' descripcion='Este es tu panel administrativo, aqui encontrarás todo lo referente a tus pacientes.'>

                <div >
                    <div className="pl-lg-4">
                        <div className=" p-3">
                            <div className="form-group">
                                <p>Datos del Paciente</p>
                                <hr />
                                <form onSubmit={this.handleSubmit}>
                                    <div className="row">
                                        <input name="docID" id="docID" value={this.state.docID} hidden onChange={this.handleChange} />
                                        <div className="col-xs-12 col-md-4">
                                            <div className="mb-3">
                                                <label className="form-label" htmlFor="nombreInput">
                                                    Nombre
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={this.state.Name}
                                                    onChange={this.handleChange}
                                                    name="Name"
                                                    id="Name"
                                                    required="required"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-md-4">
                                            <div className="mb-3">
                                                <label className="form-label" htmlFor="aPaternoInput">
                                                    Apellido Paterno
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={this.state.LastName}
                                                    onChange={this.handleChange}
                                                    name="LastName"
                                                    id="LastName"
                                                    required="required"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-md-4">
                                            <div className="mb-3">
                                                <label className="form-label" htmlFor="aMaternoInput">
                                                    Apellido materno
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={this.state.SecondLastName}
                                                    onChange={this.handleChange}
                                                    name="SecondLastName"
                                                    id="SecondLastName"
                                                    required="required"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-md-4">
                                            <div className="mb-3">
                                                <label className="form-label" htmlFor="fdnInput">
                                                    Fecha de nacimiento
                                                </label>
                                                <input
                                                    type="date"
                                                    className="form-control"
                                                    onChange={this.handleChange}
                                                    name="BirthDate"
                                                    id="BirthDate"
                                                    required="required"
                                                    value={this.state.BirthDate}
                                                />
                                            </div>

                                        </div>
                                        <div className="col-xs-12 col-md-4">
                                            <div className="mb-3">
                                                <label className="form-label" htmlFor="generoInput">
                                                    Género
                                                </label>
                                                <select className="form-control"
                                                    value={this.state.Gender}
                                                    onChange={this.handleChange}
                                                    name="Gender"
                                                    id="Gender"
                                                    required="required" >
                                                    <option value="">Elige una opción</option>
                                                    <option value="M">Masculino</option>
                                                    <option value="F">Femenino</option>
                                                </select>
                                            </div>
                                        </div>
                                        <p className="pt-3">Contact</p>
                                        <hr />
                                        <div className="col-xs-12 col-md-4">
                                            <div className="mb-3">
                                                <label className="form-label" htmlFor="emailInput">
                                                    Correo Electrónico
                                                </label>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    value={this.state.Email}
                                                    onChange={this.handleChange}
                                                    name="Email"
                                                    id="Email"
                                                    required="required"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-md-4">
                                            <div className="mb-3">
                                                <label className="form-label" htmlFor="telefonoInput">
                                                    Teléfono
                                                </label>
                                                <input
                                                    type="tel"
                                                    className="form-control"
                                                    value={this.state.MainPhoneNumber}
                                                    onChange={this.handleChange}
                                                    name="MainPhoneNumber"
                                                    id="MainPhoneNumber"
                                                    required="required"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-md-4">
                                            <div className="mb-3">
                                                <label className="form-label" htmlFor="telefonoAdicionalInput">
                                                    Teléfono Adicional
                                                </label>
                                                <input
                                                    type="tel"
                                                    className="form-control"
                                                    value={this.state.SecondPhoneNumber}
                                                    onChange={this.handleChange}
                                                    name="SecondPhoneNumber"
                                                    id="SecondPhoneNumber"
                                                />
                                            </div>
                                        </div>
                                        <p className="pt-3">Dirección</p>
                                        <hr />
                                        <div className="col-xs-12 col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label" htmlFor="calleInput">
                                                    Calle
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={this.state.Street}
                                                    onChange={this.handleChange}
                                                    name="Street"
                                                    id="Street"
                                                    required="required"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-md-2">
                                            <div className="mb-3">
                                                <label className="form-label" htmlFor="numeroInteriorInput">
                                                    Número Interior
                                                </label>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    value={this.state.InternalCode}
                                                    onChange={this.handleChange}
                                                    name="InternalCode"
                                                    id="InternalCode"
                                                    required="required"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-md-2">
                                            <div className="mb-3">
                                                <label className="form-label" htmlFor="numeroExteriorInput">
                                                    Número Exterior
                                                </label>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    value={this.state.ExternalCode}
                                                    onChange={this.handleChange}
                                                    name="ExternalCode"
                                                    id="ExternalCode"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-md-2">
                                            <div className="mb-3">
                                                <label className="form-label" htmlFor="cpInput">
                                                    Código Postal
                                                </label>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    value={this.state.PostalCode}
                                                    onChange={this.handleChange}
                                                    name="PostalCode"
                                                    id="PostalCode"
                                                    required="required"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label" htmlFor="coloniaInput">
                                                    Colonia
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={this.state.Suburb}
                                                    onChange={this.handleChange}
                                                    name="Suburb"
                                                    id="Suburb"
                                                    required="required"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label" htmlFor="ciudadInput">
                                                    Ciudad
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={this.state.City}
                                                    onChange={this.handleChange}
                                                    name="City"
                                                    id="City"
                                                    required="required"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label" htmlFor="estadoInput">
                                                    Estado
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={this.state.State}
                                                    onChange={this.handleChange}
                                                    name="State"
                                                    id="State"
                                                    required="required"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-md-6">
                                            <div className="mb-3">
                                                <label className="form-label" htmlFor="paisInput">
                                                    País
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={this.state.Country}
                                                    onChange={this.handleChange}
                                                    name="Country"
                                                    id="Country"
                                                    required="required"
                                                />
                                            </div>
                                        </div>

                                        <div className="col-xs-12 ">
                                            <div className="mb-3">
                                                <label className="form-label" htmlFor="informacionAdicionalInput">
                                                    Información Adicional del Domicilio
                                                </label>
                                                <textarea
                                                    type="text"
                                                    className="form-control"
                                                    value={this.state.ExtraInformation}
                                                    onChange={this.handleChange}
                                                    name="ExtraInformation"
                                                    id="ExtraInformation"
                                                ></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row  justify-content-end mb-4" style={{ textAlign: 'right' }}>
                                        <div className="col-xs-12 col-md-4">
                                            <input className="btn btn-primary" type="submit" value="Guardar" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>

                </div>
            </Layout>
        )
    }
}
