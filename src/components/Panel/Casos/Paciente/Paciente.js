import React, { Component } from 'react'

export default class Paciente extends Component {
    render() {
        return (
            <div>
                <div className="row  justify-content-end" style={{ textAlign: 'right' }}>
                    <div className="col-xs-12 col-md-4">
                        <button className="btn btn-primary">Guardar</button>
                    </div>
                </div>
                <hr className="my-4" />
                <div className="pl-lg-4">
                    <div className=" p-3">
                        <div className="form-group">
                            <label className="form-control-label">Datos del Paciente</label>
                            <form>
                                <div className="row">
                                    <div className="col-xs-12 col-md-4">
                                        <div className="mb-3">
                                            <label className="form-label">
                                                Nombre
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-md-4">
                                        <div className="mb-3">
                                            <label className="form-label">
                                                Apellido Paterno
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-md-4">
                                        <div className="mb-3">
                                            <label className="form-label">
                                                Apellido materno
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-md-4"><div className="mb-3">
                                        <label className="form-label">
                                            Fecha de nacimiento
                                        </label>
                                        <input
                                            type="date"
                                            className="form-control"
                                        />
                                    </div>
                                    </div>
                                    <div className="col-xs-12 col-md-4">
                                        <div className="mb-3">
                                            <label className="form-label">
                                                Género
                                            </label>
                                            <select className="form-control"
                                            >
                                                <option>Elige una opción</option>
                                                <option>Masculino</option>
                                                <option>Femenino</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-md-4">
                                        <div className="mb-3">
                                            <label className="form-label">
                                                Especialidad
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>


        )
    }
}
