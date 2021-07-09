import React, { Component } from 'react';
//import axios from 'axios';
import firebase from 'firebase/app';
import "firebase/auth";
// Create a context

const firebaseConfig = {
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
    usuario: '',
    page: 'landing'
  }


  componentDidMount() {
    //console.log(firebaseConfig);
  }
  checkLogin = () =>{

      var email = "mando.lml@gmail.com";
      var password = "123456";
       
firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          // Signed in
          //var AccesoUser = userCredential.user;
           alert('Acceso Correcto');
           this.setState({
            usuario: userCredential.user
          });
          window.location.href = "panel/";
        })
        .catch((error) => {
              alert('Permiso denegado');
        });
        
        
  
}
consulta = () =>{}




  render() {
    return (
      <myContext.Provider value=
      {{ state: this.state, checkLogin: this.checkLogin,  }}>
        {this.props.children}
      </myContext.Provider>
    )
  }
}