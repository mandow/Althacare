import React, { Component } from 'react';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database'
// Create a context

const firebaseConfig = {
  apiKey: "AIzaSyD-2ADhgMux5YEkDJ_grTTLUBcwW3k5a5U",
  authDomain: "althacare-8ffea.firebaseapp.com",
  databaseURL: "https://althacare-dev.firebaseio.com/",
  projectId: "althacare-8ffea",
  storageBucket: "althacare-8ffea.appspot.com",
  messagingSenderId: "279218096608",
  appId: "1:279218096608:web:c13bc50cab6c5085db8385",
  measurementId: "G-C773S8WPW7"
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
    isLoading: true
  }



  componentDidMount() {
  }

  //Login FIREBSE
  checkLogin = () => {
    var email = "armando.alvarado@althacare.com";
    var password = "123456";
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
      isLoading: false
    });
  }
  chargedComponent = (page) => {
    this.setState({
      page: page
    });
  }



  render() {
    return (
      <myContext.Provider value={{
        checkLogin: this.checkLogin,
        checkCases: this.checkCases,
        state: this.state,
        editCase: this.editCase,
        changePage: this.changePage,
        getCase: this.getCase,
        chargedComponent: this.chargedComponent
      }}>
        {this.props.children}
      </myContext.Provider>
    )
  }
}