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

export const myContext = React.createContext();

// Create a provider component
export class MyProvider extends Component {

  state = {
    cases: [],
    editcase: '',
    usuario: '',
    page: '',
    case: [],
    patients: [],
    doctors: [],
    products: [],
  }
  componentDidMount() {
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

  checkCases = () => {
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

  editCase = (CasoID) => {
    this.setState({
      editcase: CasoID
    });
  }

  changePage = (page) => {
    this.setState({
      page: page
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
  editPatient= () => {
   
    
  }
  

  addDoctor = (doc) => {
    const date = new Date();
    var anio = date.getFullYear();
    var mes = date.getMonth() + 1;
    var dia = date.getDate();
    var hora = date.getHours();
    var minuto = date.getMinutes();
    var segundo = date.getSeconds();
    let doctorID = dia + '' + mes + '' + anio + '' + hora + '' + minuto + '' + segundo;
   // console.log(doc);
   if(doc.docID !== ''){
    var docID=doc.docID;
   }else{
   var docID= doctorID;
   }
   firebase.database().ref('ROCHE/DOCTORS/' + docID).set({
      "BirthDate": doc.fdn,
      "Company": '',
      "Contact": {
        "Email": doc.email,
        "MainPhoneNumber": doc.telefono,
        "SecondPhoneNumber": doc.telefonoAdicional
      },
      "ID": docID,
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
  editProduct = () => {}

  render() {
    return (
      <myContext.Provider value={{
        state: this.state,
        changePage: this.changePage,
        checkLogin: this.checkLogin,
        checkCases: this.checkCases,
        getCase: this.getCase,
        editCase: this.editCase,
        addPatient: this.addPatient,
        getPatients: this.getPatients,
        getPatient:this.getPatient,
        editPatient:this.editPatient,
        addDoctor: this.addDoctor,
        getDoctors:this.getDoctors,
        editDoctor:this.editDoctor,
        addProduct:this.addProduct,
        getProducts:this.getProducts,
        getProduct: this.getProduct,
        editProduct:this.editProduct
      }}>
        {this.props.children}
      </myContext.Provider>
    )
  }
}