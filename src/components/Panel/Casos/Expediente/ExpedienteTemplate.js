import React, { Component } from 'react'
import ModalBlock from '../../../General/ModalBlock'

export default class ExpedienteTemplate extends Component {
    render() {
        return (
            <div>
                
            <div className="card text-center p-3">
                <div className="">
                    <div className="">
                        <h3 className="card-title text-uppercase text-muted mb-0">{this.props.nombreExpediente}</h3>
                    </div>
                    <div className=" text-center">
                        <div className="icon icon-shape rounded-circle shadow" style={{width: '5rem', height: '5rem'}}> 
                        <img src=''  style={{maxWidth:'100%'}} className="m-auto" alt="imagen archivo"/>
                        </div>
                    </div>
                </div>
                <p className="mt-3 mb-0 text-sm">
                    <span className="text-nowrap">
                        <button className="btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Ver Documento</button>
                    </span>
                </p>
            </div>

            <ModalBlock contenido="hola">
                <iframe src={this.props.url} style={{height: '60vh', width: '100%'}} title="Iframe Example" />
            </ModalBlock>
        </div>
        )
    }
}
