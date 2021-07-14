import React, { Component } from 'react'
import { myContext } from '../../../Context';
import Layout from '../../General/Layout/Layout'
export default class Doctores extends Component {
    static contextType = myContext;

    componentDidMount() {
        this.context.changePage('panel-doctores')
    }
    render() {
        return (
            <Layout texto='DOCTORES' descripcion='Este es tu panel administrativo, aqui encontrarás todo lo referente a tus doctores.'>
                Doctores
            </Layout>
        )
    }
}
