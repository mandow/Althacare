import React, { Component } from 'react'
import { myContext } from '../../../Context'
import Layout from '../../General/Layout/Layout'

const date = new Date();
var anio = date.getFullYear();
var mes = date.getMonth() + 1;
var dia = date.getDate();
var hora = date.getHours();
var minuto = date.getMinutes();
var segundo = date.getSeconds();
var dateValue = dia + '/' + mes + '/' + anio + ' - ' + hora + ':' + minuto + ':' + segundo;

let AllData = JSON.parse(localStorage.getItem('AllData'));
let patients = AllData.PATIENTS
let doctors = AllData.DOCTORS
let products = AllData.PRODUCTS

export default class AgregarCaso extends Component {
    static contextType = myContext;

    componentDidMount() {
        this.context.changePage('panel-casos');
    }
    constructor(props) {
        super(props);
        this.state = {
            "CreatedBy": "",

            "DeliveryEmail": "",
            "DeliveryMainPhoneNumber": "",
            "DeliverySecondPhoneNumber": "",
            "DeliveryLastName": "",
            "DeliveryCity": "",
            "DeliveryCountry": "",
            "DeliveryExternalCode": "",
            "DeliveryExtraInformation": "",
            "DeliveryInternalCode": "",
            "DeliveryPostalCode": "",
            "DeliveryState": "",
            "DeliveryStreet": "",
            "DeliverySuburb": "",
            "DeliveryName": "",
            "DeliverySecondLastName": "",

            "DoctorBirthDate": "",
            "DoctorCompany": "",
            "DoctorEmail": "",
            "DoctorMainPhoneNumber": "",
            "DoctorSecondPhoneNumber": "",
            "DoctorGender": "",
            "DoctorID": "",
            "DoctorLastName": "",
            "DoctorCity": "",
            "DoctorCountry": "",
            "DoctorExternalCode": "",
            "DoctorExtraInformation": "",
            "DoctorInternalCode": "",
            "DoctorPostalCode": "",
            "DoctorState": "",
            "DoctorStreet": "",
            "DoctorSuburb": "",
            "DoctorName": "",
            "DoctorProfessionalKey": "",
            "DoctorSecondLastName": "",
            "DoctorSpeciality": "",
            "DoctorSpecialityKey": "",

            "EndDate": "",

            "ExpedientDescription": "",
            "ExpedientMedicalReportDate": dateValue,
            "ExpedientMedicalReviewDate": "",

            "PatientBirthDate": "",
            "PatientEmail": "",
            "PatientMainPhoneNumber": "",
            "PatientSecondPhoneNumber": "",
            "PatientGender": "",
            "PatientID": "",
            "PatientLastName": "",
            "PatientCity": "",
            "PatientCountry": "",
            "PatientExternalCode": "",
            "PatientExtraInformation": "",
            "PatientInternalCode": "",
            "PatientPostalCode": "",
            "PatientState": "",
            "PatientStreet": "",
            "PatientSuburb": "",
            "PatientName": "",
            "PatientSecondLastName": "",

            "ProductBatch": "",
            "ProductCountry": "",
            "ProductCreationDate": "",
            "ProductExpiryDate": "",
            "ProductExtraInformation": "",
            "ProductID": "",
            "ProductMainActiveElement": "",
            "ProductMaker": "",
            "ProductMarketer": "",
            "ProductName": "",
            "ProductPresentation": "",
            "ProductStorageType": "",
            "Progress": "",
            "Status": "OPEN",
        };

    }


    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });

        if (name === 'ProductID') {
            let addPro = AllData.PRODUCTS[value];

            this.setState({ ['ProductBatch']: addPro.Batch });
            this.setState({ ['ProductCountry']: addPro.Country });
            this.setState({ ['ProductCreationDate']: addPro.CreationDate });
            this.setState({ ['ProductExpiryDate']: addPro.ExpiryDate });
            this.setState({ ['ProductExtraInformation']: addPro.ExtraInformation });
            this.setState({ ['ProductID']: addPro.ID });
            this.setState({ ['ProductMainActiveElement']: addPro.MainActiveElement });
            this.setState({ ['ProductMaker']: addPro.Maker });
            this.setState({ ['ProductMarketer']: addPro.Marketer });
            this.setState({ ['ProductName']: addPro.Name });
            this.setState({ ['ProductPresentation']: addPro.Presentation });
            this.setState({ ['ProductStorageType']: addPro.StorageType });

            const ResProducto = `<div className="p-3" mt-2>
             </br>
             <p>Nombre: `+ addPro.Name + `</br>
             Lote: `+ addPro.Batch + `</br>
             Pais de origen: `+ addPro.Country + `</br>
             Marca: `+ addPro.Maker + `</br>
             Fecha de caducidad: `+ addPro.ExpiryDate + `</br>
             Principio activo: `+ addPro.MainActiveElement + `</br>
             Presentacion: `+ addPro.Presentation + `</br>
             Anotaciones extra: `+ addPro.ExtraInformation + `</br>
             </div>`;

            document.getElementById("ResProducto").innerHTML = ResProducto;
        }

        if (name === 'DoctorID') {
            let addDoc = AllData.DOCTORS[value];

            this.setState({ ['DoctorBirthDate']: addDoc.BirthDate });
            this.setState({ ['DoctorCompany']: addDoc.Company });
            this.setState({ ['DoctorEmail']: addDoc.Contact.Email });
            this.setState({ ['DoctorMainPhoneNumber']: addDoc.Contact.MainPhoneNumber });
            this.setState({ ['DoctorSecondPhoneNumber']: addDoc.Contact.SecondPhoneNumber });
            this.setState({ ['DoctorGender']: addDoc.Gender });
            this.setState({ ['DoctorID']: addDoc.ID });
            this.setState({ ['DoctorLastName']: addDoc.LastName });
            this.setState({ ['DoctorCity']: addDoc.Location.City });
            this.setState({ ['DoctorCountry']: addDoc.Location.Country });
            this.setState({ ['DoctorExternalCode']: addDoc.Location.ExternalCode });
            this.setState({ ['DoctorExtraInformation']: addDoc.Location.ExtraInformation });
            this.setState({ ['DoctorInternalCode']: addDoc.Location.InternalCode });
            this.setState({ ['DoctorPostalCode']: addDoc.Location.PostalCode });
            this.setState({ ['DoctorState']: addDoc.Location.State });
            this.setState({ ['DoctorStreet']: addDoc.Location.Street });
            this.setState({ ['DoctorSuburb']: addDoc.Location.Suburb });
            this.setState({ ['DoctorName']: addDoc.Name });
            this.setState({ ['DoctorProfessionalKey']: addDoc.ProfessionalKey });
            this.setState({ ['DoctorSecondLastName']: addDoc.SecondLastName });
            this.setState({ ['DoctorSpeciality']: addDoc.Speciality });
            this.setState({ ['DoctorSpecialityKey']: addDoc.SpecialityKey });

            const ResDoctor = `<div className="p-3" mt-2>
             </br>
             <p>Nombre: `+ addDoc.Name + ` ` + addDoc.LastName + ` ` + addDoc.SecondLastName + `</br>
             Especialidad: `+ addDoc.Speciality + `</br>
             Cedula Profesional: `+ addDoc.ProfessionalKey + `</br>
             Correo Electronico: `+ addDoc.Contact.Email + `</br>
             Telefono: `+ addDoc.Contact.MainPhoneNumber + `</br>
             Direccion: `+ addDoc.Location.Street + ` #` + addDoc.Location.InternalCode + `, ` + addDoc.Location.City + `, ` + addDoc.Location.State + `, ` + addDoc.Location.Country + `<p>
             </div>`;

            document.getElementById("ResDoctor").innerHTML = ResDoctor;
        }

        if (name === 'PatientID') {
            let addP = AllData.PATIENTS[value];

            this.setState({ ['PatientBirthDate']: addP.BirthDate });
            this.setState({ ['PatientEmail']: addP.Contact.Email });
            this.setState({ ['PatientMainPhoneNumber']: addP.Contact.MainPhoneNumber });
            this.setState({ ['PatientSecondPhoneNumber']: addP.Contact.SecondPhoneNumber });
            this.setState({ ['PatientGender']: addP.Gender });
            this.setState({ ['PatientID']: addP.ID });
            this.setState({ ['PatientLastName']: addP.LastName });
            this.setState({ ['PatientCity']: addP.Location.City });
            this.setState({ ['PatientCountry']: addP.Location.Country });
            this.setState({ ['PatientExternalCode']: addP.Location.ExternalCode });
            this.setState({ ['PatientExtraInformation']: addP.Location.ExtraInformation });
            this.setState({ ['PatientInternalCode']: addP.Location.InternalCode });
            this.setState({ ['PatientPostalCode']: addP.Location.PostalCode });
            this.setState({ ['PatientState']: addP.Location.State });
            this.setState({ ['PatientStreet']: addP.Location.Street });
            this.setState({ ['PatientSuburb']: addP.Location.Suburb });
            this.setState({ ['PatientName']: addP.Name });
            this.setState({ ['PatientSecondLastName']: addP.SecondLastName });

            const ResPaciente = `<div className="p-3" mt-2>
             </br>
             <p>Nombre: `+ addP.Name + ` ` + addP.LastName + ` ` + addP.SecondLastName + `</br>
             Correo Electronico: `+ addP.Contact.Email + `</br>
             Telefono: `+ addP.Contact.MainPhoneNumber + `</br>
             Direccion: `+ addP.Location.Street + ` #` + addP.Location.InternalCode + `, ` + addP.Location.City + `, ` + addP.Location.State + `, ` + addP.Location.Country + `<p>
             </div>`;

            document.getElementById("resPaciente").innerHTML = ResPaciente;
        }

        //console.log(this.state);
    }

    handleSubmit = e => {
        e.preventDefault();

        console.log(this.state)

        let ExpedientDescription = this.state.ExpedientDescription;
        let ExpedientMedicalReportDate = this.state.ExpedientMedicalReportDate;
        let ExpedientMedicalReviewDate = this.state.ExpedientMedicalReviewDate;
        let ProductID = this.state.ProductID;
        let PatientID = this.state.PatientID;
        let DoctorID = this.state.DoctorID;

        if (ExpedientDescription !== ""
            && ExpedientMedicalReportDate !== ""
            && ExpedientMedicalReviewDate !== ""
            && ProductID !== ""
            && PatientID !== ""
            && DoctorID !== ""
        ) {
            //this.context.addPatient(this.state)
            console.log(this.state)
        } else {
            alert('Todos los campos son requeridos');
        }
        //console.log(this.state);
    }


    render() {
        if (AllData !== []) {
            const Pacientes = Object.keys(patients).map((element, i) => {
                const pac = patients[element]
                return (<option key={pac.ID} value={pac.ID} >{pac.Name} {pac.LastName} {pac.SecondLastName}</option>)
            });
            const Doctores = Object.keys(doctors).map((element, i) => {
                const doc = doctors[element]
                return (<option key={doc.ID} value={doc.ID} >{doc.Name} {doc.LastName} {doc.SecondLastName}</option>)
            });
            const Productos = Object.keys(products).map((element, i) => {
                const prod = products[element]
                return (<option key={prod.ID} value={prod.ID} >{prod.Name} {prod.Maker} {prod.MainActiveElement}  {prod.Model}</option>)
            });
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
                        <div className="col-xs-12 col-md-9 card p-3" >
                            <div className="tab-content" id="v-pills-tabContent">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="row  justify-content-end mb-4" style={{ textAlign: 'right' }}>
                                        <div className="col-xs-12 col-md-4">
                                            <input className="btn btn-primary" type="submit" value="Guardar" />
                                        </div>
                                    </div>
                                    <hr className="my-4" />
                                    <div className="tab-pane fade show active" id="v-expediente" role="tabpanel" aria-labelledby="v-expediente-tab">
                                        <div className="pl-lg-4" style={{ height: '40vh', overflowY: 'auto' }}>
                                            <div className=" p-3">
                                                <div className="form-group">
                                                    <label className="form-control-label">Fecha de expedicion de receta médica </label>
                                                    <input required="required" type="date" className="form-control" value={this.state.ExpedientMedicalReviewDate} name="ExpedientMedicalReviewDate" onChange={this.handleChange} />
                                                </div>
                                            </div>
                                            <div className=" p-3">
                                                <div className="form-group">
                                                    <label className="form-control-label">Diagnóstico</label>
                                                    <textarea
                                                        placeholder="Agrega aqui el expediente"
                                                        className="form-control"
                                                        value={this.state.ExpedientDescription}
                                                        onChange={this.handleChange}
                                                        name="ExpedientDescription"
                                                        id="ExpedientDescription"
                                                        rows={6}
                                                        required="required"
                                                    ></textarea>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="tab-pane fade" id="v-producto" role="tabpanel" aria-labelledby="v-producto-tab">
                                        <div className="pl-lg-4">
                                            <div className=" p-3">
                                                <div className="form-group">
                                                    <label className="form-control-label">Datos del Producto</label>
                                                    <select required="required"
                                                        className="form-control"
                                                        name="ProductID"
                                                        onChange={this.handleChange}
                                                        value={this.state.ProductID}
                                                        required
                                                    >
                                                        <option value="">Elige un producto de tu lista...</option>
                                                        {Productos}
                                                    </select>
                                                    <div id="ResProducto"></div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="tab-pane fade" id="v-doctor" role="tabpanel" aria-labelledby="v-doctor-tab">
                                        <div className="pl-lg-4">
                                            <div className=" p-3">
                                                <div className="form-group">
                                                    <label className="form-control-label">Datos del Doctor</label>
                                                    <select required="required"
                                                        className="form-control"
                                                        name="DoctorID"
                                                        onChange={this.handleChange}
                                                        value={this.state.DoctorID}
                                                        required
                                                    >
                                                        <option value="">Elige un paciente de tu lista...</option>
                                                        {Doctores}
                                                    </select>
                                                    <div id="ResDoctor"></div>
                                                </div>
                                            </div>
                                        </div>



                                    </div>
                                    <div className="tab-pane fade" id="v-paciente" role="tabpanel" aria-labelledby="v-paciente-tab">
                                        <div className="pl-lg-4">
                                            <div className=" p-3">
                                                <div className="form-group">
                                                    <label className="form-control-label">Datos del Paciente</label>
                                                    <select required="required"
                                                        className="form-control"
                                                        name="PatientID"
                                                        onChange={this.handleChange}
                                                        value={this.state.PatientID}
                                                        required
                                                    >
                                                        <option value="">Elige un paciente de tu lista...</option>
                                                        {Pacientes}
                                                    </select>
                                                    <div id="resPaciente"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="v-importacion" role="tabpanel" aria-labelledby="v-importacion-tab">
                                    <div className="form-group">
                                                    <label className="form-control-label">Datos de exportacion</label>
                                                   
                                        <div className="p-3">
                                            <div className="mb-3">
                                                <div className="form-group">
                                                    <label >Agregar imagenes</label>
                                                    <input type="file" className="form-control" id="AgrearExpedienteImg" />
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="v-entrega" role="tabpanel" aria-labelledby="v-entrega-tab">
                                        <div className="pl-lg-4" style={{ height: '40vh', overflowY: 'auto' }}>
                                        <div className="p-3">
                                                <div className="mb-1">
                                                    <div className="form-group">
                                                        <label >Agrega imagen de alguna Identificación Oficial</label>
                                                        <input type="file" className="form-control" id="AgrearExpedienteImg" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className=" p-3">
                                                <div className="form-group">
                                                    <div className="row">
                                                        <div className="col-xs-12 col-md-12">
                                                            <div className="mb-3">
                                                                <label className="form-label" htmlFor="nombreInput">
                                                                    Nombre
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    value={this.state.DeliveryName}
                                                                    onChange={this.handleChange}
                                                                    name="DeliveryName"
                                                                    id="DeliveryName"
                                                                    required="required"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-xs-12 col-md-12">
                                                            <div className="mb-3">
                                                                <label className="form-label" htmlFor="aPaternoInput">
                                                                    Apellido Paterno
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    value={this.state.DeliveryLastName}
                                                                    onChange={this.handleChange}
                                                                    name="DeliveryLastName"
                                                                    id="DeliveryLastName"
                                                                    required="required"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-xs-12 col-md-12">
                                                            <div className="mb-3">
                                                                <label className="form-label" htmlFor="aMaternoInput">
                                                                    Apellido materno
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    value={this.state.DeliverySecondLastName}
                                                                    onChange={this.handleChange}
                                                                    name="DeliverySecondLastName"
                                                                    id="DeliverySecondLastName"
                                                                    required="required"
                                                                />
                                                            </div>
                                                        </div>
                                                        <p className="pt-3">Contact</p>
                                                        <hr />
                                                        <div className="col-xs-12 col-md-12">
                                                            <div className="mb-3">
                                                                <label className="form-label" htmlFor="emailInput">
                                                                    Correo Electrónico
                                                                </label>
                                                                <input
                                                                    type="email"
                                                                    className="form-control"
                                                                    value={this.state.DeliveryEmail}
                                                                    onChange={this.handleChange}
                                                                    name="DeliveryEmail"
                                                                    id="DeliveryEmail"
                                                                    required="required"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-xs-12 col-md-6">
                                                            <div className="mb-3">
                                                                <label className="form-label" htmlFor="telefonoInput">
                                                                    Teléfono
                                                                </label>
                                                                <input
                                                                    type="tel"
                                                                    className="form-control"
                                                                    value={this.state.DeliveryMainPhoneNumber}
                                                                    onChange={this.handleChange}
                                                                    name="DeliveryMainPhoneNumber"
                                                                    id="DeliveryMainPhoneNumber"
                                                                    required="required"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-xs-12 col-md-6">
                                                            <div className="mb-3">
                                                                <label className="form-label" htmlFor="DeliverySecondPhoneNumber">
                                                                    Teléfono Adicional
                                                                </label>
                                                                <input
                                                                    type="tel"
                                                                    className="form-control"
                                                                    value={this.state.DeliverySecondPhoneNumber}
                                                                    onChange={this.handleChange}
                                                                    name="DeliverySecondPhoneNumber"
                                                                    id="DeliverySecondPhoneNumber"
                                                                />
                                                            </div>
                                                        </div>
                                                        <p className="pt-3">Dirección</p>
                                                        <hr />
                                                        <div className="col-xs-12 col-md-8">
                                                            <div className="mb-3">
                                                                <label className="form-label" htmlFor="calleInput">
                                                                    Calle
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    value={this.state.DeliveryStreet}
                                                                    onChange={this.handleChange}
                                                                    name="DeliveryStreet"
                                                                    id="DeliveryStreet"
                                                                    required="required"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-xs-12 col-md-4">
                                                            <div className="mb-3">
                                                                <label className="form-label" htmlFor="numeroInteriorInput">
                                                                    Número Interior
                                                                </label>
                                                                <input
                                                                    type="number"
                                                                    className="form-control"
                                                                    value={this.state.DeliveryInternalCode}
                                                                    onChange={this.handleChange}
                                                                    name="DeliveryInternalCode"
                                                                    id="DeliveryInternalCode"
                                                                    required="required"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-xs-12 col-md-6">
                                                            <div className="mb-3">
                                                                <label className="form-label" htmlFor="numeroExteriorInput">
                                                                    Número Exterior
                                                                </label>
                                                                <input
                                                                    type="number"
                                                                    className="form-control"
                                                                    value={this.state.DeliveryExternalCode}
                                                                    onChange={this.handleChange}
                                                                    name="DeliveryExternalCode"
                                                                    id="DeliveryExternalCode"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-xs-12 col-md-6">
                                                            <div className="mb-3">
                                                                <label className="form-label" htmlFor="cpInput">
                                                                    Código Postal
                                                                </label>
                                                                <input
                                                                    type="number"
                                                                    className="form-control"
                                                                    value={this.state.DeliveryPostalCode}
                                                                    onChange={this.handleChange}
                                                                    name="DeliveryPostalCode"
                                                                    id="DeliveryPostalCode"
                                                                    required="required"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-xs-12 col-md-12">
                                                            <div className="mb-3">
                                                                <label className="form-label" htmlFor="coloniaInput">
                                                                    Colonia
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    value={this.state.DeliverySuburb}
                                                                    onChange={this.handleChange}
                                                                    name="DeliverySuburb"
                                                                    id="DeliverySuburb"
                                                                    required="required"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-xs-12 col-md-12">
                                                            <div className="mb-3">
                                                                <label className="form-label" htmlFor="ciudadInput">
                                                                    Ciudad
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    value={this.state.DeliveryCity}
                                                                    onChange={this.handleChange}
                                                                    name="DeliveryCity"
                                                                    id="DeliveryCity"
                                                                    required="required"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-xs-12 col-md-12">
                                                            <div className="mb-3">
                                                                <label className="form-label" htmlFor="estadoInput">
                                                                    Estado
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    value={this.state.DeliveryState}
                                                                    onChange={this.handleChange}
                                                                    name="DeliveryState"
                                                                    id="DeliveryState"
                                                                    required="required"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-xs-12 col-md-12">
                                                            <div className="mb-3">
                                                                <label className="form-label" htmlFor="paisInput">
                                                                    País
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    value={this.state.DeliveryCountry}
                                                                    onChange={this.handleChange}
                                                                    name="DeliveryCountry"
                                                                    id="DeliveryCountry"
                                                                    required="required"
                                                                />
                                                            </div>
                                                        </div>

                                                        <div className="col-xs-12 ">
                                                            <div className="mb-3">
                                                                <label className="form-label" htmlFor="informacionAdicionalInput">
                                                                    Información Adicional del Domicilio
                                                                </label>
                                                                <textarea
                                                                    type="text"
                                                                    className="form-control"
                                                                    value={this.state.DeliveryExtraInformation}
                                                                    onChange={this.handleChange}
                                                                    name="DeliveryExtraInformation"
                                                                    id="DeliveryExtraInformation"
                                                                ></textarea>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                    <div className="d-xs-none col-md-1"></div>

                </Layout>
            )
        } else {
            return 'Cargando...';
        }
    }
}
