import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Layout from '../../General/Layout/Layout';
import { myContext } from '../../../Context';

export default class Doctores extends Component {
    static contextType = myContext;

    componentDidMount() {
        this.context.changePage('panel-doctores');
        this.context.getDoctors();
        console.log( this.context.state)
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
