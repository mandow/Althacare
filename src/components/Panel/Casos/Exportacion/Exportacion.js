import React, { Component } from 'react'

export default class Exportacion extends Component {
    render() {
        return (
            <div>
                <div className="p-3">
                        <div className="bd-example mb-3">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlFile1">Agrega imagen del documento</label>
                                    <input type="file" className="form-control" id="exampleFormControlFile1" />
                                </div>
                            </form>
                        </div>
                    </div>
            </div>
        )
    }
}
