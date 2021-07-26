import React, { Component } from 'react'
import { myContext } from '../../../Context';
import Layout from '../../General/Layout/Layout'
//import queryString from 'query-string'

export default class EditarDoctor extends Component {
    static contextType = myContext;

    componentDidMount() {
        this.context.changePage('panel-doctores');
        //var editdoctor = queryString.parseUrl(this.props.location.search);
        //var doctorid = editdoctor.query.doctorid;
        //this.context.getDoctor(doctorid);
    }
    constructor(props) {
        let doc = JSON.parse(localStorage.getItem('doctor'));
        super(props);
        this.state = {
            ID: doc.ID,
            nombre: doc.nombre,
            aPaterno: doc.aPaterno,
            aMaterno: doc.aMaterno,
            fdn: doc.fdn,
            genero: doc.genero,
            especialidad: doc.especialidad,
            cedulaProfesional: doc.cedulaProfesional,
            cedulaEspecialidad: doc.cedulaEspecialidad,
            email: doc.email,
            telefono: doc.telefono,
            telefonoAdicional: doc.telefonoAdicional,
            calle: doc.calle,
            numeroInterior: doc.numeroInterior,
            numeroExterior: doc.numeroExterior,
            cp: doc.cp,
            colonia: doc.colonia,
            ciudad: doc.ciudad,
            estado: doc.estado,
            pais: doc.pais,
            informacionAdicional: doc.informacionAdicional
        };
    }
    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit = e => {
        e.preventDefault();

        let nombre = this.state.nombre
        let aPaterno = this.state.aPaterno
        let aMaterno = this.state.aMaterno
        let fdn = this.state.fdn
        let genero = this.state.genero
        let especialidad = this.state.especialidad
        let cedulaProfesional = this.state.cedulaProfesional
        let cedulaEspecialidad = this.state.cedulaEspecialidad

        let email = this.state.email
        let telefono = this.state.email
        let telefonoAdicional = this.state.email

        let calle = this.state.calle
        let numeroInterior = this.state.numeroInterior
        //let numeroExterior = this.state.numeroExterior
        let cp = this.state.cp
        let colonia = this.state.colonia
        let ciudad = this.state.ciudad
        let estado = this.state.estado
        let pais = this.state.pais
       // let informacionAdicional = this.state.informacionAdicional

        if (
            nombre !== ""
            && aPaterno !== ""
            && aMaterno !== ""
            && fdn !== ""
            && genero !== ""
            && especialidad !== ""
            && cedulaProfesional !== ""
            && cedulaEspecialidad !== ""
            && email !== ""
            && telefono !== ""
            && telefonoAdicional !== ""
            && calle !== ""
            && numeroInterior !== ""
            && cp !== ""
            && colonia !== ""
            && ciudad !== ""
            && estado !== ""
            && pais !== ""
          //  && informacionAdicional !== ""
        ) {
        this.context.saveDoctor(this.state)
           //console.log(this.state)
        } else {
            alert('Todos los campos son requeridos');
        }
        //console.log(this.state);
    }
    render() {
        //console.log('context', this.context.state)
        if (this.state !== []) {
                return (
                    <Layout texto='DOCTORES' descripcion='Este es tu panel administrativo, aqui encontrarás todo lo referente a tus doctores.'>
                        <div>
                            <div className="pl-lg-4">
                                <div className=" p-3">
                                    <div className="form-group">
                                        <p>Datos del Doctor {this.state.Name}</p>
                                        <hr />
                                        <form onSubmit={this.handleSubmit}>
                                            <div className="row">
                                                <input name="docID" id="docID" value={this.state.ID} hidden onChange={this.handleChange} />
                                                <div className="col-xs-12 col-md-4">
                                                    <div className="mb-3">
                                                        <label className="form-label" htmlFor="nombreInput">
                                                            Nombre
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            value={this.state.nombre}
                                                            onChange={this.handleChange}
                                                            name="nombre"
                                                            id="nombre"
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
                                                            value={this.state.aPaterno}
                                                            onChange={this.handleChange}
                                                            name="aPaterno"
                                                            id="aPaterno"
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
                                                            value={this.state.aMaterno}
                                                            onChange={this.handleChange}
                                                            name="aMaterno"
                                                            id="aMaterno"
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
                                                            name="fdn"
                                                            id="fdn"
                                                            required="required"
                                                            value={this.state.fdn}
                                                        />
                                                    </div>

                                                </div>
                                                <div className="col-xs-12 col-md-4">
                                                    <div className="mb-3">
                                                        <label className="form-label" htmlFor="generoInput">
                                                            Género
                                                        </label>
                                                        <select className="form-control"
                                                            onChange={this.handleChange}
                                                            value={this.state.genero}
                                                            name="genero"
                                                            id="genero"
                                                            required="required" >
                                                            <option >Elige una opción</option>
                                                            <option value="M" { ...this.state.genero === 'M' ? 'selected' : '' }>Masculino</option>
                                                            <option value="F" { ...this.state.genero === 'F' ? 'selected' : '' }>Femenino</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-xs-12 col-md-4">
                                                    <div className="mb-3">
                                                        <label className="form-label" htmlFor="especialidadInput">
                                                            Especialidad
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            value={this.state.especialidad}
                                                            onChange={this.handleChange}
                                                            name="especialidad"
                                                            id="especialidad"
                                                            required="required"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-xs-12 col-md-4">
                                                    <div className="mb-3">
                                                        <label className="form-label" htmlFor="cedulaProfesionalInput">
                                                            Cédula Profesional
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            value={this.state.cedulaProfesional}
                                                            onChange={this.handleChange}
                                                            name="cedulaProfesional"
                                                            id="cedulaProfesional"
                                                            required="required"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-xs-12 col-md-4">
                                                    <div className="mb-3">
                                                        <label className="form-label" htmlFor="cedulaEspecialidadInput">
                                                            Cédula de la Especialidad
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            value={this.state.cedulaEspecialidad}
                                                            onChange={this.handleChange}
                                                            name="cedulaEspecialidad"
                                                            id="cedulaEspecialidad"
                                                            required="required"
                                                        />
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
                                                            value={this.state.email}
                                                            onChange={this.handleChange}
                                                            name="email"
                                                            id="email"
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
                                                            value={this.state.telefono}
                                                            onChange={this.handleChange}
                                                            name="telefono"
                                                            id="telefono"
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
                                                            value={this.state.telefonoAdicional}
                                                            onChange={this.handleChange}
                                                            name="telefonoAdicional"
                                                            id="telefonoAdicional"
                                                            required="required"
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
                                                            value={this.state.calle}
                                                            onChange={this.handleChange}
                                                            name="calle"
                                                            id="calle"
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
                                                            value={this.state.numeroInterior}
                                                            onChange={this.handleChange}
                                                            name="numeroInterior"
                                                            id="numeroInterior"
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
                                                            value={this.state.numeroExterior}
                                                            onChange={this.handleChange}
                                                            name="numeroExterior"
                                                            id="numeroExterior"
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
                                                            value={this.state.cp}
                                                            onChange={this.handleChange}
                                                            name="cp"
                                                            id="cp"
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
                                                            value={this.state.colonia}
                                                            onChange={this.handleChange}
                                                            name="colonia"
                                                            id="colonia"
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
                                                            value={this.state.ciudad}
                                                            onChange={this.handleChange}
                                                            name="ciudad"
                                                            id="ciudad"
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
                                                            value={this.state.estado}
                                                            onChange={this.handleChange}
                                                            name="estado"
                                                            id="estado"
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
                                                            value={this.state.pais}
                                                            onChange={this.handleChange}
                                                            name="pais"
                                                            id="pais"
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
                                                            className="form-control"
                                                            value={this.state.informacionAdicional}
                                                            onChange={this.handleChange}
                                                            name="informacionAdicional"
                                                            id="informacionAdicional"
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
            

        } else {
            return (<p>Cargando...</p>)
        }
    }
}