import React, { Component } from 'react'
import { myContext } from '../../../../Context';
export default class Producto extends Component {
    static contextType = myContext;

    render() {
        if (this.context.state.case.length !== 0) {
            const Producto = this.context.state.case.Product;
            console.log(Producto);
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
                            <label className="form-control-label">Datos del Producto</label>
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
                                                name="ProductName"
                                                value={Producto.Name}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-md-4">
                                        <div className="mb-3">
                                            <label className="form-label">
                                                Lote
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
                                                Pa??s de origen
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-md-4"><div className="mb-3">
                                        <label className="form-label">
                                            Marca
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
                                                Fecha de caducidad
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
                                                Principio activo
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
                                                Tipo de almacenamiento
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
                                                Comercializador
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
                                                Presentaci??n
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


                    <hr className="my-4" />
                    <div className="p-3">
                        <div className="bd-example mb-3">
                            <form>
                                <div className="form-group">
                                    <label >Agrega imagen fontal del medicamento</label>
                                    <input type="file" className="form-control" />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="p-3">
                        <div className="bd-example mb-3">
                            <form>
                                <div className="form-group">
                                    <label >Agrega imagen Trasera del medicamento</label>
                                    <input type="file" className="form-control" />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="p-3">
                        <div className="bd-example mb-3">
                            <form>
                                <div className="form-group">
                                    <label >Agrega imagen superior del medicamento</label>
                                    <input type="file" className="form-control"  />
                                </div>
                            </form>
                        </div>
                    </div><div className="p-3">
                        <div className="bd-example mb-3">
                            <form>
                                <div className="form-group">
                                    <label >Agrega imagen inferior del medicamento</label>
                                    <input type="file" className="form-control"  />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="p-3">
                        <div className="bd-example mb-3">
                            <form>
                                <div className="form-group">
                                    <label >Agrega imagen lateral izquierda del medicamento</label>
                                    <input type="file" className="form-control" />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="p-3">
                        <div className="bd-example mb-3">
                            <form>
                                <div className="form-group">
                                    <label>Agrega imagen lateral derecha del medicamento</label>
                                    <input type="file" className="form-control" />
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        )
    }else{
        return ('Cargando informaci??n...')
    }
    }
}
