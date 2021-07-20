import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { myContext } from '../../../Context';
import Layout from '../../General/Layout/Layout'
export default class Productos extends Component {
    static contextType = myContext;

    componentDidMount() {
        this.context.changePage('panel-productos')
        this.context.getProducts();
    }
    render() {
        const Productos = Object.keys(this.context.state.products).map((element, i) => {
            const prod = this.context.state.products[element]
            return (
                <tr key={prod.ID}>
                    <td> {prod.ID}</td>
                    <td>{prod.Name}</td>
                    <td>{prod.Country}</td>
                    <td>{prod.MainActiveElement}</td>
                    <td>
                        <Link
                        to={{
                            pathname: "/panel/editar-producto",
                            search: `productoid=${prod.ID}`
                        }}>
                            <button className="btn btn-danger" onClick={
                                    (event) => {this.context.editProduct(prod.ID)}
                                }> Ver detalles</button>
                        </Link>
                    </td>
                </tr>

            )
        }
        )
        if (this.context.state.products !== []) {
        return (
            <Layout texto='PRODUCTOS' descripcion='Este es tu panel administrativo, aqui encontrarás todo lo referente a tus medicamentos.'>
                 <div className="p-4">
                        <div className="mb-3 text-right">
                            <a href={`agregar-producto`}>
                                <button className="btn btn-primary ">Agregar Producto</button>
                            </a>
                        </div>
                        <div className="table-responsive">
                            <table className="table align-items-center table-flush">
                                <thead className="thead-light">
                                    <tr>
                                        <th scope="col" className="sort" data-sort="acciones">ID</th>
                                        <th scope="col" className="sort" data-sort="acciones">Nombre</th>
                                        <th scope="col" className="sort" data-sort="acciones">Pais</th>
                                        <th scope="col" className="sort" data-sort="acciones">Principio Activo</th>
                                        <th scope="col" className="sort" data-sort="acciones">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody className="list">
                                    {Productos}
                                </tbody>
                            </table>
                        </div>
                    </div>
               
            </Layout>
        )
    }else{
        return 'Cargando...'
    }
    }
}
