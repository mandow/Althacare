import React, { Component } from 'react'

export default class Entrega extends Component {
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
                        <label className="form-control-label">Datos quien recibe</label>
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
                            
                             </div>
                        </form>
                    </div>
                </div>
                

            </div>
        </div>


        )
    }
}
