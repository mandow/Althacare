import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Layout from '../../General/Layout/Layout';
const datos = [
    {Id: 1, Caso: 2073, Estado: 'EN CURSO', Paciente: 'Maria Fernanda Moreno Viveros', Doctor: 'Luis Antonio Moreno Mejia', Medicamento: 'ENTRECTINIB', FechaApertura: '19/5/2021 16:1:11', FechaCulminacion: '19/5/2021 16:1:11' },
    { Id: 2, Caso: 2074, Estado: 'EN CURSO', Paciente: 'Maria Fernanda Moreno Viveros', Doctor: 'Luis Antonio Moreno Mejia', Medicamento: 'ENTRECTINIB', FechaApertura: '19/5/2021 16:1:11', FechaCulminacion: '19/5/2021 16:1:11' },
    { Id: 3, Caso: 2075, Estado: 'EN CURSO', Paciente: 'Maria Fernanda Moreno Viveros', Doctor: 'Luis Antonio Moreno Mejia', Medicamento: 'ENTRECTINIB', FechaApertura: '19/5/2021 16:1:11', FechaCulminacion: '19/5/2021 16:1:11' },
    { Id: 4, Caso: 2076, Estado: 'EN CURSO', Paciente: 'Maria Fernanda Moreno Viveros', Doctor: 'Luis Antonio Moreno Mejia', Medicamento: 'ENTRECTINIB', FechaApertura: '19/5/2021 16:1:11', FechaCulminacion: '19/5/2021 16:1:11' },
    { Id: 5, Caso: 2077, Estado: 'EN CURSO', Paciente: 'Maria Fernanda Moreno Viveros', Doctor: 'Luis Antonio Moreno Mejia', Medicamento: 'ENTRECTINIB', FechaApertura: '19/5/2021 16:1:11', FechaCulminacion: '19/5/2021 16:1:11' }
];
const ContenidoMap = datos.map((datos) =>
    <tr key={datos.Id}>
        <td>
            <span className="  mr-4">
                <span className="status">{datos.Caso}</span>
            </span>
        </td>
        <td>
            <span className="  mr-4">
                <span className="status">{datos.Estado}</span>
            </span>
        </td>
        <td>
            <span className="  mr-4">
                <span className="status">{datos.Paciente}</span>
            </span>
        </td>
        <td>
            <span className="  mr-4">
                <span className="status">{datos.Doctor}</span>
            </span>
        </td>
        <td>
            <span className="  mr-4">
                <span className="status">{datos.Medicamento}</span>
            </span>
        </td>
        <td>
            <span className="  mr-4">
                <i className="bg-warning" />
                <span className="status">{datos.FechaApertura}</span>
            </span>
        </td>
        <td>
            <span className="  mr-4">
                <i className="bg-primary" />
                <span className="status">{datos.FechaCulminacion}</span>
            </span>
        </td>
        <td>
          <p className="mb-2">
              <Link to='editar-caso'>
          <button className="btn btn-block btn-sm btn-primary">Ver Caso</button>

              </Link> 
             </p>
        </td>
    </tr>
);
export default class Casos extends Component {
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
                        {ContenidoMap}
                    </tbody>
                </table>
            </div>
            </div>
        </Layout>
        )
    }
}
