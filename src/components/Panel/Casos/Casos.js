import React, { Component } from 'react'
import Layout from '../../General/Layout/Layout';
import { myContext } from '../../../Context';
import { Link } from 'react-router-dom';

export default class Casos extends Component {
    static contextType = myContext;

    componentDidMount() {
        this.context.changePage('panel-casos')
        var IDUSER = '';
        this.context.checkCases(IDUSER);
        console.log(this.context.state);
    }
    render() {

        const Casos = Object.keys(this.context.state.cases).map((element, i) => {
            const caso = this.context.state.cases[element]
            return (
                <tr key={caso.ID}>
                    <td> {caso.ID}</td>
                    <td> {caso.Status}</td>
                    <td> {caso.Patient.Name}</td>
                    <td> {caso.Doctor.Name}</td>
                    <td> {caso.Product.Name}</td>
                    <td> {caso.CreationDate}</td>
                    <td> {caso.EndDate}</td>
                    <td>
                        <Link 
                        to={{
                            pathname: "/panel/editar-caso",
                            search: `caseid=${caso.ID}`
                        }}>
                            <button className="btn btn-danger" onClick={
                                    (event) => {this.context.editCase(caso.ID)}
                                }> Ver detalles</button>
                        </Link>
                    </td>
                </tr>

            )
        }
        )
        return (
            <Layout texto='CASOS' descripcion='Este es tu panel administrativo, aqui encontrarás todo lo referente a tus casos.'>
                <div className="p-4">
                    <div className="mb-3 text-right">
                        <a href={`agregar-caso`}>
                            <button className="btn btn-primary ">Agregar Caso</button>
                        </a>
                    </div>
                    <div className="table-responsive">
                        <table className="table align-items-center table-flush">
                            <thead className="thead-light">
                                <tr>
                                    <th scope="col" className="sort" data-sort="caso">Caso</th>
                                    <th scope="col" className="sort" data-sort="estado">Estado</th>
                                    <th scope="col" className="sort" data-sort="paciente">Paciente</th>
                                    <th scope="col" className="sort" data-sort="doctor">Doctor</th>
                                    <th scope="col" className="sort" data-sort="medicamento">Medicamento</th>
                                    <th scope="col" className="sort" data-sort="apertura">Apertura</th>
                                    <th scope="col" className="sort" data-sort="culminacion">Culminación</th>
                                    <th scope="col" className="sort" data-sort="acciones">Acciones</th>
                                </tr>
                            </thead>
                            <tbody className="list">
                                {Casos}
                            </tbody>
                        </table>
                    </div>
                </div>
            </Layout>
        )
    }
}
