import React, { Component } from 'react'
import Login from '../components/Login/Login'
import { myContext } from '../Context';
//import firebase from 'firebase';
/*
const nameRef = firebase.database().ref().child("USERS").child("CASES");
console.log(nameRef);
let url= 'USERS/CASES/-Me1c7v3YiBo-LForfCW';
firebase.database().ref(url).set({
}, (error) => {
  if (error) {
    console.log(error);
  } else {
    alert('Delated successfully! ')
  }
});
*/

export default class login extends Component {
    static contextType = myContext;

    render() {
        return (
            <div>
              <Login/>
            </div>
        )
    }
}
