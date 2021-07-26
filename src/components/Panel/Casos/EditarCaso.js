import React, { Component } from 'react'
import Layout from '../../General/Layout/Layout'
import queryString from 'query-string'

    var AllData = JSON.parse(localStorage.getItem('AllData'));

export default class EditarCaso extends Component {

componentDidMount() {
    var editdoctor = queryString.parseUrl(this.props.location.search);
   const caseidID= editdoctor.query.caseid;
   //console.log(caseidID)
   this.setState({ ['aidi']:caseidID })
}
constructor(props) {
    super(props);
    this.state = {
        aidi:''
    }
}
    render() {
        if(this.state !== []){
let casos = AllData.CASES[this.state.aidi]
console.log(casos)
            return (
                <Layout>
                    <div className="container">
                        <h1>REPORTE DE CASO MEDICO</h1>
                        <hr/>
                        <div>
                            <b>Expediente</b>
                            <b>Datos del Paceinte</b>
                            <p>
                            Nombre: 
                            </p>
                            <b>Datos del Paceinte</b>
                            <p> </p>
    
                            <b>Datos del Doctor</b>
                            <p> </p>
    
                            <b>Datos del Producto</b>
                            <p> </p>
    
                            <b>Datos de la exportacion</b>
                            <p> </p>
    
                            <b>Datos de la entrega</b>
                            <p> </p>
    
    
                        </div>
                    </div>
                </Layout>
            )
        }else{
            return 'Cargando informacion...'
        }
       
    }
}
