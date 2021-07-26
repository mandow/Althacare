import React, { Component } from 'react';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database'
// Create a context

const firebaseConfig = {
  //ALTACARE
  /* apiKey: "AIzaSyD-2ADhgMux5YEkDJ_grTTLUBcwW3k5a5U",
  authDomain: "althacare-8ffea.firebaseapp.com",
  databaseURL: "https://althacare-dev.firebaseio.com/",
  projectId: "althacare-8ffea",
  storageBucket: "althacare-8ffea.appspot.com",
  messagingSenderId: "279218096608",
  appId: "1:279218096608:web:c13bc50cab6c5085db8385",
  measurementId: "G-C773S8WPW7"*/
  //PRUEBAS
  apiKey: "AIzaSyDAzXgpD9_t0xOn8qjAQoHbjeYIAUQgTT4",
  authDomain: "althacare-c4bbc.firebaseapp.com",
  databaseURL: "https://althacare-c4bbc-default-rtdb.firebaseio.com",
  projectId: "althacare-c4bbc",
  storageBucket: "althacare-c4bbc.appspot.com",
  messagingSenderId: "1018347193310",
  appId: "1:1018347193310:web:766bffb9e417fb07f4934f",
  measurementId: "G-47G129CMYF"
};

firebase.initializeApp(firebaseConfig);

const date = new Date();
var anio = date.getFullYear();
var mes = date.getMonth() + 1;
var dia = date.getDate();
var hora = date.getHours();
var minuto = date.getMinutes();
var segundo = date.getSeconds();
//let prodID = dia + '' + mes + '' + anio + '' + hora + '' + minuto + '' + segundo;
var dateID = dia + '' + mes + '' + anio + '' + hora + '' + minuto + '' + segundo;
var dateValue = dia + '/' + mes + '/' + anio + ' - ' + hora + ':' + minuto + ':' + segundo;
export const myContext = React.createContext();

// Create a provider component
export class MyProvider extends Component {

  state = {
    cases: [],
    editcase: '',
    usuario: '',
    page: '',
    AllData: [],
    case: [],
    patients: [],
    doctors: [],
    doctor: [],
    products: [],
  }
  //Cambiar nombre de pagina
  changePage = (page) => {
    this.setState({
      page: page
    });
  }

  //Login FIREBSE
  checkLogin = (param) => {

    var email = param.UserLogin;
    var password = param.passwordLogin;
    //var email = "armando.alvarado@althacare.com";
    //var password = "123456";
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        //var AccesoUser = userCredential.user;
        alert('Acceso Correcto');
        this.setState({
          usuario: userCredential.user,
          page: 'panel-inicio'
        })
        window.location.href = "panel/";
      })
      .catch((error) => {
        alert('Permiso denegado');
      });
  }

  cargarTodo = () => {

    const dbRef = firebase.database().ref('ROCHE');
    dbRef.get().then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        localStorage.setItem('AllData', JSON.stringify(data));        
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });



  }

  addCase = (cas) => {
    firebase.database().ref('ROCHE/PATIENTS/' + dateID).set(
    {
    "CreatedBy" : "dyland1209apple@gmail.com",
    "CreationDate" : dateID,
    "Delivery" : {
      "Contact" : {
        "Email" : "",
        "MainPhoneNumber" : "",
        "SecondPhoneNumber" : ""
      },
      "LastName" : "",
      "Location" : {
        "City" : "",
        "Country" : "",
        "ExternalCode" : "",
        "ExtraInformation" : "",
        "InternalCode" : "",
        "PostalCode" : "",
        "State" : "",
        "Street" : "",
        "Suburb" : ""
      },
      "Name" : "",
      "SecondLastName" : ""
    },
    "Doctor" : {
      "BirthDate" : "21/7/2021",
      "Company" : "ALTHACARE",
      "Contact" : {
        "Email" : "dr.house@example.com",
        "MainPhoneNumber" : "4321231233",
        "SecondPhoneNumber" : "4321231234"
      },
      "Gender" : "M",
      "ID" : "217202182434",
      "LastName" : "Mendez",
      "Location" : {
        "City" : "Monterrey",
        "Country" : "Mexico",
        "ExternalCode" : "123",
        "ExtraInformation" : "Red house",
        "InternalCode" : "123",
        "PostalCode" : "123456",
        "State" : "Nuevo León",
        "Street" : "Av Benito Juarez",
        "Suburb" : "Monterrey"
      },
      "Name" : "Oswaldo",
      "ProfessionalKey" : "123ASD456",
      "SecondLastName" : "Grapping",
      "Speciality" : "ODONTOLOGIA",
      "SpecialityKey" : "123ASD456"
    },
    "EndDate" : "",
    "Expedient" : {
      "Description" : "",
      "MedicalReportDate" : "",
      "MedicalReviewDate" : ""
    },
    "ID" : "2272021143933",
    "Patient" : {
      "BirthDate" : "31/7/2021",
      "Contact" : {
        "Email" : "ejemple@gmail.com",
        "MainPhoneNumber" : "9981231234",
        "SecondPhoneNumber" : "8994561231"
      },
      "Gender" : "F",
      "ID" : "2172021124911",
      "LastName" : "Carlos",
      "Location" : {
        "City" : "Monterrey",
        "Country" : "Mexico",
        "ExternalCode" : "123",
        "ExtraInformation" : "Tengo hambre",
        "InternalCode" : "123",
        "PostalCode" : "6152",
        "State" : "Nuevo Leon",
        "Street" : "Av.Benito Juarez",
        "Suburb" : "Apodaca"
      },
      "Name" : "Alberto",
      "SecondLastName" : "Jacome"
    },
    "Product" : {
      "Batch" : "123",
      "Country" : "Mexico",
      "CreationDate" : "21/7/2021",
      "ExpiryDate" : "7/21/2021",
      "ExtraInformation" : "Refrigeración especial necesaria",
      "ID" : "2172021114021",
      "MainActiveElement" : "AXR-091",
      "Maker" : "UM S.A. de C.V.",
      "Marketer" : "PO S.A de C.V.",
      "Name" : "TRACTINIB",
      "Presentation" : "BOX",
      "StorageType" : "SECO"
    },
    "Progress" : "0",
    "Status" : "OPEN",
    "UpdateDate" : dateID
  }
  , (error) => {
    if (error) {
      alert('No se logró guardar la información');
    } else {
      alert('Datos guardados correctamente!');
      window.location.href = "/panel/cases";

    }
  });
  }
  getCases = (cas) => {
    const dbRef = firebase.database().ref('ROCHE');
    dbRef.child('CASES').get().then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        this.setState({
          cases: data
        });
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  }
  getCase = (caseid) => {
    const dbRef = firebase.database().ref('ROCHE');
    dbRef.child('CASES/' + caseid).get().then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();

        this.setState({
          case: data
        });
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  }
  editCase = (cas) => {
    let estado =cas;
    localStorage.setItem('caso', JSON.stringify(estado));
  }
  saveCase = (cas) => {
  }



  addPatient = (pat) => {
    firebase.database().ref('ROCHE/PATIENTS/' + dateID).set({
      "BirthDate": pat.BirthDate,
      "Contact": {
        "Email": pat.Email,
        "MainPhoneNumber": pat.MainPhoneNumber,
        "SecondPhoneNumber": pat.SecondPhoneNumber
      },
      "Gender": pat.Gender,
      "ID": dateID,
      "LastName": pat.LastName,
      "Location": {
        "City": pat.City,
        "Country": pat.Country,
        "ExternalCode": pat.ExternalCode,
        "ExtraInformation": pat.ExtraInformation,
        "InternalCode": pat.InternalCode,
        "PostalCode": pat.PostalCode,
        "State": pat.State,
        "Street": pat.Street,
        "Suburb": pat.Suburb
      },
      "Name": pat.Name,
      "SecondLastName": pat.SecondLastName
    }
      , (error) => {
        if (error) {
          alert('No se logró guardar la información');
        } else {
          alert('Datos guardados correctamente!');
          window.location.href = "/panel/pacientes";

        }
      });
  }
  getPatients = () => {
    const dbRef = firebase.database().ref('ROCHE');
    dbRef.child('PATIENTS').get().then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        this.setState({
          patients: data
        });
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  }
  getPatient = (patientid) => {
  }
  editPatient = (pat) => {
    let estado = {
      ID: pat.ID,
      Name: pat.Name,
      LastName: pat.LastName,
      SecondLastName: pat.SecondLastName,
      BirthDate: pat.BirthDate,
      Gender: pat.Gender,
      Email: pat.Contact.Email,
      MainPhoneNumber: pat.Contact.MainPhoneNumber,
      SecondPhoneNumber: pat.Contact.SecondPhoneNumber,
      Street: pat.Location.Street,
      InternalCode: pat.Location.InternalCode,
      ExternalCode: pat.Location.ExternalCode,
      PostalCode: pat.Location.PostalCode,
      Suburb: pat.Location.Suburb,
      City: pat.Location.City,
      State: pat.Location.State,
      Country: pat.Location.Country,
      ExtraInformation: pat.Location.ExtraInformation,
    }
    localStorage.setItem('paciente', JSON.stringify(estado));
  }
  savePatient = (pat) => {
    firebase.database().ref('ROCHE/PATIENTS/' + pat.ID).set({
      "BirthDate": pat.BirthDate,
      "Contact": {
        "Email": pat.Email,
        "MainPhoneNumber": pat.MainPhoneNumber,
        "SecondPhoneNumber": pat.SecondPhoneNumber
      },
      "Gender": pat.Gender,
      "ID": pat.ID,
      "LastName": pat.LastName,
      "Location": {
        "City": pat.City,
        "Country": pat.Country,
        "ExternalCode": pat.ExternalCode,
        "ExtraInformation": pat.ExtraInformation,
        "InternalCode": pat.InternalCode,
        "PostalCode": pat.PostalCode,
        "State": pat.State,
        "Street": pat.Street,
        "Suburb": pat.Suburb
      },
      "Name": pat.Name,
      "SecondLastName": pat.SecondLastName
    }
      , (error) => {
        if (error) {
          alert('No se logró guardar la información');
        } else {
          alert('Datos guardados correctamente!');
          window.location.href = "/panel/pacientes";

        }
      });
  }


  addDoctor = (doc) => {
    firebase.database().ref('ROCHE/DOCTORS/' + dateID).set({
      "BirthDate": doc.fdn,
      "Company": '',
      "Contact": {
        "Email": doc.email,
        "MainPhoneNumber": doc.telefono,
        "SecondPhoneNumber": doc.telefonoAdicional
      },
      "ID": dateID,
      "LastName": doc.aPaterno,
      "Location": {
        "City": doc.ciudad,
        "Country": doc.pais,
        "ExternalCode": doc.numeroExterior,
        "ExtraInformation": doc.informacionAdicional,
        "InternalCode": doc.numeroInterior,
        "PostalCode": doc.cp,
        "State": doc.estado,
        "Street": doc.calle,
        "Suburb": doc.colonia
      },
      "Name": doc.nombre,
      "ProfessionalKey": doc.cedulaProfesional,
      "SecondLastName": doc.aMaterno,
      "Speciality": doc.especialidad,
      "SpecialityKey": doc.cedulaEspecialidad,
      "Gender": doc.genero
    }
      , (error) => {
        if (error) {
          alert('No se logró guardar la información');
        } else {
          alert('Datos guardados correctamente!');
          window.location.href = "/panel/doctores";

        }
      });
  }
  getDoctors = () => {
    const dbRef = firebase.database().ref('ROCHE');
    dbRef.child('DOCTORS').get().then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        this.setState({
          doctors: data
        });
        //console.log(data);
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  }
  getDoctor = (doctorid) => {
    const dbRef = firebase.database().ref('ROCHE');
    dbRef.child('DOCTORS/' + doctorid).get().then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();

        this.setState({
          doctor: data
        });
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  }
  editDoctor = (doc) => {
    let estado = {
      ID: doc.ID,
      nombre: doc.Name,
      aPaterno: doc.LastName,
      aMaterno: doc.SecondLastName,
      fdn: doc.BirthDate,
      genero: doc.Gender,
      especialidad: doc.Speciality,
      cedulaProfesional: doc.ProfessionalKey,
      cedulaEspecialidad: doc.SpecialityKey,
      email: doc.Contact.Email,
      telefono: doc.Contact.MainPhoneNumber,
      telefonoAdicional: doc.Contact.SecondPhoneNumber,
      calle: doc.Location.Street,
      numeroInterior: doc.Location.InternalCode,
      numeroExterior: doc.Location.ExternalCode,
      cp: doc.Location.PostalCode,
      colonia: doc.Location.Suburb,
      ciudad: doc.Location.City,
      estado: doc.Location.State,
      pais: doc.Location.Country,
      informacionAdicional: doc.Location.ExtraInformation
    }
    localStorage.setItem('doctor', JSON.stringify(estado));
  }
  saveDoctor = (doc) => {

    firebase.database().ref('ROCHE/DOCTORS/' + doc.ID).set({
      "BirthDate": doc.fdn,
      "Company": '',
      "Contact": {
        "Email": doc.email,
        "MainPhoneNumber": doc.telefono,
        "SecondPhoneNumber": doc.telefonoAdicional
      },
      "ID": doc.ID,
      "LastName": doc.aPaterno,
      "Location": {
        "City": doc.ciudad,
        "Country": doc.pais,
        "ExternalCode": doc.numeroExterior,
        "ExtraInformation": doc.informacionAdicional,
        "InternalCode": doc.numeroInterior,
        "PostalCode": doc.cp,
        "State": doc.estado,
        "Street": doc.calle,
        "Suburb": doc.colonia
      },
      "Name": doc.nombre,
      "ProfessionalKey": doc.cedulaProfesional,
      "SecondLastName": doc.aMaterno,
      "Speciality": doc.especialidad,
      "SpecialityKey": doc.cedulaEspecialidad,
      "Gender": doc.genero
    }
      , (error) => {
        if (error) {
          alert('No se logró guardar la información');
        } else {
          alert('Datos guardados correctamente!');
          window.location.href = "/panel/doctores";

        }
      });
  }



  addProduct = (prod) => {
    firebase.database().ref('ROCHE/PRODUCTS/' + dateID).set({
      "Batch": prod.Batch,
      "Country": prod.Country,
      "CreationDate": dateID,
      "ExpiryDate": prod.ExpiryDate,
      "ExtraInformation": prod.ExtraInformation,
      "ID": dateID,
      "MainActiveElement": prod.MainActiveElement,
      "Maker": prod.Maker,
      "Marketer": prod.Marketer,
      "Name": prod.Name,
      "Presentation": prod.Presentation,
      "StorageType": prod.StorageType
    }
      , (error) => {
        if (error) {
          alert('No se logró guardar la información');
        } else {
          alert('Datos guardados correctamente!');
          window.location.href = "/panel/productos";

        }
      });
  }
  getProducts = () => {
    const dbRef = firebase.database().ref('ROCHE');
    dbRef.child('PRODUCTS').get().then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        this.setState({
          products: data
        });
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  }
  getProduct = (prod) => {
  }
  editProduct = (prod) => {
    let estado = {
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
    }
    localStorage.setItem('producto', JSON.stringify(estado));
  }
  saveProduct = (prod) => {
    firebase.database().ref('ROCHE/PRODUCTS/' + prod.ID).set({
      "Batch": prod.Batch,
      "Country": prod.Country,
      "CreationDate": prod.CreationDate,
      "ExpiryDate": prod.ExpiryDate,
      "ExtraInformation": prod.ExtraInformation,
      "ID": prod.ID,
      "MainActiveElement": prod.MainActiveElement,
      "Maker": prod.Maker,
      "Marketer": prod.Marketer,
      "Name": prod.Name,
      "Presentation": prod.Presentation,
      "StorageType": prod.StorageType
    }
      , (error) => {
        if (error) {
          alert('No se logró guardar la información');
        } else {
          alert('Datos guardados correctamente!');
          window.location.href = "/panel/productos";

        }
      });
  }

  render() {
    return (
      <myContext.Provider value={{
        state: this.state,
        changePage: this.changePage,
        checkLogin: this.checkLogin,
        getCases: this.getCases,
        getCase: this.getCase,
        editCase: this.editCase,
        saveCase: this.saveCase,
        addPatient: this.addPatient,
        getPatients: this.getPatients,
        getPatient: this.getPatient,
        editPatient: this.editPatient,
        savePatient: this.savePatient,
        addDoctor: this.addDoctor,
        getDoctors: this.getDoctors,
        getDoctor: this.getDoctor,
        editDoctor: this.editDoctor,
        saveDoctor: this.saveDoctor,
        addProduct: this.addProduct,
        getProducts: this.getProducts,
        getProduct: this.getProduct,
        editProduct: this.editProduct,
        saveProduct: this.saveProduct,
        cargarTodo: this.cargarTodo
      }}>
        {this.props.children}
      </myContext.Provider>
    )
  }
}