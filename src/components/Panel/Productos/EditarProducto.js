import React, { Component } from 'react'
import { myContext } from '../../../Context';
import Layout from '../../General/Layout/Layout'

export default class EditarProducto extends Component {
  static contextType = myContext;
  componentDidMount() {
    this.context.changePage('panel-productos');
  }
  constructor(props) {
    let prod = JSON.parse(localStorage.getItem('producto'));
    super(props);
    this.state = {
      ID: prod.ID,
      Batch: prod.Batch,
      Country: prod.Country,
      CreationDate: prod.CreationDate,
      ExpiryDate: prod.ExpiryDate,
      ExtraInformation: prod.ExtraInformation,
      MainActiveElement: prod.MainActiveElement,
      Maker: prod.Maker,
      Marketer: prod.Marketer,
      Name: prod.Name,
      Presentation: prod.Presentation,
      StorageType: prod.StorageType
    };

  }
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }
  handleSubmit = e => {
    e.preventDefault();

    let Batch = this.state.Batch
    let Country = this.state.Country
    let ExpiryDate = this.state.ExpiryDate
    //let ExtraInformation = this.state.ExtraInformation
    let MainActiveElement = this.state.MainActiveElement
    let Maker = this.state.Maker
    let Marketer = this.state.Marketer
    let Name = this.state.Name
    let Presentation = this.state.Presentation
    let StorageType = this.state.StorageType

    if (Batch !== ""
      && Country !== ""
      && ExpiryDate !== ""
     // && ExtraInformation !== ""
      && MainActiveElement !== ""
      && Maker !== ""
      && Marketer !== ""
      && Name !== ""
      && Presentation !== ""
      && StorageType !== ""
    ) {
      this.context.saveProduct(this.state)
    } else {
      alert('Todos los campos son requeridos');
    }
   }
  render() {
    return (
      <Layout>
          <div >
            <div className="pl-lg-4">
              <div className=" p-3">
                <div className="form-group">
                  <label className="form-control-label">Datos del Producto</label>
                  <form onSubmit={this.handleSubmit}>
                    <div className="row">
                      <div className="col-xs-12 col-md-4">
                        <div className="mb-3">
                          <label className="form-label">Nombre</label>
                          <input
                            type="text"
                            className="form-control"
                            name="Name"
                            id="Name"
                            value={this.state.Name || ''}
                            onChange={this.handleChange}
                            required="required"
                          />
                        </div>
                      </div>
                      <div className="col-xs-12 col-md-4">
                        <div className="mb-3">
                          <label className="form-label">Lote</label>
                          <input type="text"
                            className="form-control"
                            name="Batch"
                            id="Batch"
                            value={this.state.Batch}
                            onChange={this.handleChange}
                            required="required"
                          />
                        </div>
                      </div>
                      <div className="col-xs-12 col-md-4">
                        <div className="mb-3">
                          <label className="form-label">País de origen</label>
                          <input type="text"
                            className="form-control"
                            name="Country"
                            id="Country"
                            value={this.state.Country}
                            onChange={this.handleChange}
                            required="required"
                          />
                        </div>
                      </div>
                      <div className="col-xs-12 col-md-4">
                        <div className="mb-3">
                          <label className="form-label">Marca</label>
                          <input type="text"
                            className="form-control"
                            name="Maker"
                            id="Maker"
                            value={this.state.Maker}
                            onChange={this.handleChange}
                            required="required"
                          />
                        </div>
                      </div>
                      <div className="col-xs-12 col-md-4">
                        <div className="mb-3">
                          <label className="form-label">Fecha de caducidad</label>
                          <input type="date"
                            className="form-control"
                            name="ExpiryDate"
                            id="ExpiryDate"
                            value={this.state.ExpiryDate}
                            onChange={this.handleChange}
                            required="required"
                          />
                        </div>
                      </div>
                      <div className="col-xs-12 col-md-4">
                        <div className="mb-3">
                          <label className="form-label">Principio activo</label>
                          <input type="text"
                            className="form-control"
                            name="MainActiveElement"
                            id="MainActiveElement"
                            value={this.state.MainActiveElement}
                            onChange={this.handleChange}
                            required="required"
                          />
                        </div>
                      </div>
                      <div className="col-xs-12 col-md-4">
                        <div className="mb-3">
                          <label className="form-label">Tipo de almacenamiento</label>
                          <input type="text"
                            className="form-control"
                            name="StorageType"
                            id="StorageType"
                            value={this.state.StorageType}
                            onChange={this.handleChange}
                            required="required"
                          />
                        </div>
                      </div>
                      <div className="col-xs-12 col-md-4">
                        <div className="mb-3">
                          <label className="form-label">Comercializador</label>
                          <input type="text"
                            className="form-control"
                            name="Marketer"
                            id="Marketer"
                            value={this.state.Marketer}
                            onChange={this.handleChange}
                            required="required"
                          />
                        </div>
                      </div>
                      <div className="col-xs-12 col-md-4">
                        <div className="mb-3">
                          <label className="form-label">Presentación</label>
                          <input type="text"
                            className="form-control"
                            name="Presentation"
                            id="Presentation"
                            value={this.state.Presentation}
                            onChange={this.handleChange}
                            required="required"
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="mb-3">
                          <label className="form-label">Información Extra</label>
                          <textarea type="text"
                            className="form-control"
                            name="ExtraInformation"
                            id="ExtraInformation"
                            value={this.state.ExtraInformation}
                            onChange={this.handleChange}
                          ></textarea>

                        </div>
                      </div>
                    </div>
                    <div className="row  justify-content-end mb-4" style={{ textAlign: 'right' }}>
                      <div className="col-xs-12 col-md-4">
                        <input className="btn btn-primary" type="submit" value="Guardar" />
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
                      <label>Agrega imagen fontal del medicamento</label>
                      <input type="file" className="form-control" />
                    </div>
                  </form>
                </div>
              </div>
            </div>

          </div>
      </Layout>
    )
  }
}
