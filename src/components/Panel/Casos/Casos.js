import React, { Component } from 'react'
import Layout from '../../General/Layout/Layout';
import { myContext } from '../../../Context';

export default class Casos extends Component {
    static contextType = myContext;

    componentDidMount(){
        var IDUSER= '-Me22VqDHJhyDoCn53Ly';
        this.context.checkCases(IDUSER);
    }
    render() {
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
                   
                   
                    </tbody>
                </table>
            </div>
            </div>
        </Layout>
        )
    }
}
