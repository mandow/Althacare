import React, { Component } from 'react'
export default class Expediente extends Component {
    render(props) {
        return (
            <div>
                <div className="row  justify-content-end" style={{textAlign:'right'}}>
                    <div className="col-xs-12 col-md-4">
                        <button className="btn btn-primary">Guardar</button>
                    </div>
                </div>
                <hr className="my-4" />
                <div className="pl-lg-4">
                    <div className=" p-3"><div className="form-group">
                        <label className="form-control-label">Diagnóstico</label>
                        <textarea rows={10} className="form-control" placeholder="Agrega aqui el expediente" />
                    </div>
                    </div>
                    <div className="p-3">
                    <div className="bd-example mb-3">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlFile1">Agrega imagen de alguna Identificación Oficial</label>
                                    <input type="file" className="form-control" id="exampleFormControlFile1" />
                                </div>
                            </form>
                        </div>
                        <div className="bd-example mb-3">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlFile2">Agrega imagen del comprobante de domicilio</label>
                                    <input type="file" className="form-control" id="exampleFormControlFile2" />
                                </div>
                            </form>
                        </div>
                        

                    </div>

                </div>

            </div>
        )
    }
}
