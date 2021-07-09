import React, { Component } from 'react'
import Layout from '../../General/Layout/Layout'
import Doctor from './Doctor/Doctor'
import Entrega from './Entrega/Entrega'
import Expediente from './Expediente/Expediente'
import Exportacion from './Exportacion/Exportacion'
import Paciente from './Paciente/Paciente'
import Producto from './Producto/Producto'

export default class AgregarCaso extends Component {
    render() {
        return (
            <Layout texto='AGREGAR CASO' descripcion='Aquí podrás agregar un caso nuevo.'>
                <div className="row p-4">
                        <div className="col-xs-12 col-md-2">
                    <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <button className=" mb-2 btn-danger btn-sm p-2 border border-1 active" id="v-expediente-tab" data-bs-toggle="pill" data-bs-target="#v-expediente" type="button" role="tab" aria-controls="v-expediente" aria-selected="true">Expediente</button>
                        <button className=" mb-2 btn-danger btn-sm p-2 border border-1" id="v-producto-tab" data-bs-toggle="pill" data-bs-target="#v-producto" type="button" role="tab" aria-controls="v-producto" aria-selected="false">Poducto</button>
                        <button className=" mb-2 btn-danger btn-sm p-2 border border-1" id="v-doctor-tab" data-bs-toggle="pill" data-bs-target="#v-doctor" type="button" role="tab" aria-controls="v-doctor" aria-selected="false" >Doctor</button>
                        <button className=" mb-2 btn-danger btn-sm p-2 border border-1" id="v-paciente-tab" data-bs-toggle="pill" data-bs-target="#v-paciente" type="button" role="tab" aria-controls="v-paciente" aria-selected="false" >Paciente</button>
                        <button className=" mb-2 btn-danger btn-sm p-2 border border-1" id="v-importacion-tab" data-bs-toggle="pill" data-bs-target="#v-importacion" type="button" role="tab" aria-controls="v-importacion" aria-selected="false">Exportación</button>
                        <button className=" mb-2 btn-danger btn-sm p-2 border border-1" id="v-entrega-tab" data-bs-toggle="pill" data-bs-target="#v-entrega" type="button" role="tab" aria-controls="v-entrega" aria-selected="false">Entrega</button>
                    </div>
                </div>
                <div className="col-xs-12 col-md-9 card p-3" style={{height:'50vh', overflowY:'auto'}}>
                    <div className="tab-content" id="v-pills-tabContent">
                        <div className="tab-pane fade show active" id="v-expediente" role="tabpanel" aria-labelledby="v-expediente-tab">
                            <Expediente/>
                        </div>
                        <div className="tab-pane fade" id="v-producto" role="tabpanel" aria-labelledby="v-producto-tab">
                          <Producto/>
                        </div>
                        <div className="tab-pane fade" id="v-doctor" role="tabpanel" aria-labelledby="v-doctor-tab">
                            <Doctor/>
                        </div>
                        <div className="tab-pane fade" id="v-paciente" role="tabpanel" aria-labelledby="v-paciente-tab">
                           <Paciente/>
                        </div>
                        <div className="tab-pane fade" id="v-importacion" role="tabpanel" aria-labelledby="v-importacion-tab">
                          <Exportacion/>
                        </div>
                        <div className="tab-pane fade" id="v-entrega" role="tabpanel" aria-labelledby="v-entrega-tab">
                            <Entrega/>
                        </div>
                    </div>
                </div>
             
                </div>
               <div className="d-xs-none col-md-1"></div>

            </Layout>
        )
    }
}
