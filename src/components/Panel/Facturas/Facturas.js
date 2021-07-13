import React, { Component } from 'react'
import Layout from '../../General/Layout/Layout'
import { myContext } from '../../../Context';
export default class Facturas extends Component {
    static contextType = myContext;

    componentDidMount() {
        this.context.changePage('panel-facturas')
    }
    render() {
        return (
            <Layout texto='FACTURAS' descripcion='Este es tu panel administrativo, aqui encontrarás todo lo referente a tus facturas.'>
                
                <div className="p-3">
                        <div className="bd-example mb-3">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlFile1">Agrega imagen del factura</label>
                                    <input type="file" className="form-control" id="exampleFormControlFile1" />
                                </div>
                                <div className="mb-3 mt-3 text-right">
                    
                        <button className="btn btn-primary " data-bs-toggle="modal" data-bs-target="#staticBackdrop">Agregar factura</button>

                </div>
                            </form>
                        </div>
                    </div>
                <div className="p-3">
                <hr/>
                No existen facturas agregadas.

                </div>
            </Layout>
        )
    }
}
