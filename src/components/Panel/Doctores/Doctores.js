import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Layout from '../../General/Layout/Layout';
import { myContext } from '../../../Context';

export default class Doctores extends Component {
    static contextType = myContext;

    componentDidMount() {
        this.context.changePage('panel-doctores');
        this.context.getDoctors();
        localStorage.setItem('doctor','');
    }
    
    render() {
        //console.log( this.context.state.doctors)
        const Doctores = Object.keys(this.context.state.doctors).map((element, i) => {
            const doctor = this.context.state.doctors[element]
            return (
                <tr key={doctor.ID}>
                    <td> {doctor.Name} {doctor.LastName} {doctor.SecondLastName}</td>
                    <td>{doctor.Contact.Email}</td>
                    <td>{doctor.Contact.MainPhoneNumber}</td>
                    <td>{doctor.Speciality}</td>
                    <td>{doctor.SpecialityKey}</td>
                    <td>{doctor.ProfessionalKey}</td>
                    <td>
                        <Link 
                        to={{
                            pathname: "/panel/editar-doctor",
                            search: `doctorid=${doctor.ID}`
                        }}>
                            <button className="btn btn-danger" onClick={
                                    (event) => {this.context.editDoctor(doctor)}
                                }> Ver detalles</button>
                        </Link>
                    </td>
                </tr>

            )
        }
        )
        if (this.context.state.doctors !== []) {
            return (
                <Layout texto='DOCTORES' descripcion='Este es tu panel administrativo, aqui encontrarás todo lo referente a tus médicos.'>
                    <div className="p-4">
                        <div className="mb-3 text-right">
                            <a href={`agregar-doctor`}>
                                <button className="btn btn-primary ">Agregar Doctor</button>
                            </a>
                        </div>
                        <div className="table-responsive">
                            <table className="table align-items-center table-flush">
                                <thead className="thead-light">
                                    <tr>
                                        <th scope="col" className="sort" data-sort="acciones">Doctor</th>
                                        <th scope="col" className="sort" data-sort="acciones">Email</th>
                                        <th scope="col" className="sort" data-sort="acciones">Teléfono</th>
                                        <th scope="col" className="sort" data-sort="acciones">Especialidad</th>
                                        <th scope="col" className="sort" data-sort="acciones">Cédula P.</th>
                                        <th scope="col" className="sort" data-sort="acciones">Cédula E.</th>
                                        <th scope="col" className="sort" data-sort="acciones">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody className="list">
                                    {Doctores}
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
