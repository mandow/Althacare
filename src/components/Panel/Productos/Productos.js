import React, { Component } from 'react'
import { myContext } from '../../../Context';
import Layout from '../../General/Layout/Layout'
export default class Productos extends Component {
    static contextType = myContext;

    componentDidMount() {
        this.context.changePage('panel-productos')
    }
    render() {
        return (
            <Layout texto='PRODUCTOS' descripcion='Este es tu panel administrativo, aqui encontrarás todo lo referente a tus medicamentos.'>
                Productos
            </Layout>
        )
    }
}
