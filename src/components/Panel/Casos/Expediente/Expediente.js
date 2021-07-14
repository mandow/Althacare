import React, { Component } from 'react'
import { myContext } from '../../../../Context';
export default class Expediente extends Component {
    static contextType = myContext;
    render() {

        if (this.context.state.case.length !== 0) {
            const Expediente = this.context.state.case.Expedient;
            return (<div>
                 <div className="row  justify-content-end" style={{ textAlign: 'right' }}>
                    <div className="col-xs-12 col-md-4">
                        <button className="btn btn-primary">Guardar</button>
                    </div>
                </div>
                <hr className="my-4" />
                <div className="pl-lg-4">
                    <div className=" p-3"><div className="form-group">
                        <label className="form-control-label">Diagnóstico</label>
                        <textarea rows={10} className="form-control" placeholder="Agrega aqui el expediente" value={Expediente.Description} name="Expediente" />
                    </div>
                    </div>
                    <div className="p-3">
                        <div className="bd-example mb-3">
                            <form>
                                <div className="form-group">
                                    <label >Agrega imagen de alguna Identificación Oficial</label>
                                    <input type="file" className="form-control" id="AgrearExpedienteImg" />
                                </div>
                            </form>
                        </div>

                    </div>

                </div>
            </div>)
        } else {
            return ('Cargando información...')
        }
    }
}
