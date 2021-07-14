import React, { Component } from 'react'
import { myContext } from '../../../Context';
import Layout from '../../General/Layout/Layout'

export default class Pacientes extends Component {
    static contextType = myContext;

    componentDidMount() {
        this.context.changePage('panel-pacientes')
    }
    render() {
        return (
            <Layout texto='PACIENTES' descripcion='Este es tu panel administrativo, aqui encontrarás todo lo referente a tus pacientes.'>
                Pacientes
            </Layout>
        )
    }
}
