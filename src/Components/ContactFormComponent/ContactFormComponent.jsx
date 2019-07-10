import React, { Component } from 'react';
import './contact-form.css';

class ContactFormComponent extends Component {
    render() {
        return (
            <div className="col-5 contact-form">
                <div className="card">
                    <div className="card-body">
                        <form action="">
                            <div className="form-group">
                                <label htmlFor="nombre" className="font-weight-bolder">Nombre</label>
                                <input type="text" name="nombre" id="" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email" className="font-weight-bolder">Email</label>
                                <input type="email" name="email" className="form-control" />
                            </div>
                            <button type="submit" className="btn btn-success">Grabar</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default ContactFormComponent;