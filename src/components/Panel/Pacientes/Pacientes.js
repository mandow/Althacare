import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { myContext } from '../../../Context';
import Layout from '../../General/Layout/Layout'

export default class Pacientes extends Component {
    static contextType = myContext;

    componentDidMount() {
        this.context.changePage('panel-pacientes')
        this.context.getPatients();
    }
    render() {
        const Pacientes = Object.keys(this.context.state.patients).map((element, i) => {
            const pat = this.context.state.patients[element]
            return (
                <tr key={pat.ID}>
                    <td> {pat.Name} {pat.LastName} {pat.SecondLastName}</td>
                    <td>{pat.Contact.Email}</td>
                    <td>{pat.Contact.MainPhoneNumber}</td>
                    <td>
                        <Link 
                        to={{
                            pathname: "/panel/editar-paciente",
                            search: `pacienteid=${pat.ID}`
                        }}>
                            <button className="btn btn-danger" onClick={
                                    (event) => {this.context.editPatient(pat.ID)}
                                }> Ver detalles</button>
                        </Link>
                    </td>
                </tr>

            )
        }
        )
        if (this.context.state.doctors !== []) {
        return (
            <Layout texto='PACIENTES' descripcion='Este es tu panel administrativo, aqui encontrarás todo lo referente a tus pacientes.'>
                    <div className="p-4">
                        <div className="mb-3 text-right">
                            <a href={`agregar-paciente`}>
                                <button className="btn btn-primary ">Agregar Paciente</button>
                            </a>
                        </div>
                        <div className="table-responsive">
                            <table className="table align-items-center table-flush">
                                <thead className="thead-light">
                                    <tr>
                                        <th scope="col" className="sort" data-sort="acciones">Nombre</th>
                                        <th scope="col" className="sort" data-sort="acciones">Email</th>
                                        <th scope="col" className="sort" data-sort="acciones">Teléfono</th>
                                        <th scope="col" className="sort" data-sort="acciones">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody className="list">
                                    {Pacientes}
                                </tbody>
                            </table>
                        </div>
                    </div>
               
            </Layout>
        )
    }else{
        return 'Cargando...'
    }
    }
}
