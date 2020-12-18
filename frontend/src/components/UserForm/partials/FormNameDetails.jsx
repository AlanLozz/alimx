import React, { Component } from 'react';

export class FormNameDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        const { values, handleChange } = this.props;
        return (
            <div className="faded">
                <React.Fragment>
                    <h5 className="card-title text-center">¿Cuál es tu nombre?</h5>
                    <input type="text" placeholder="Nombre" className="form-control form-group" onChange={handleChange('primerNombre')} defaultValue={values.primerNombre} required={true} />
                    <input type="text" placeholder="Segundo Nombre" className="form-control form-group" onChange={handleChange('segundoNombre')} defaultValue={values.segundoNombre} required={true} />
                    <input type="text" placeholder="Apellido Paterno" className="form-control form-group" onChange={handleChange('apellidoPat')} defaultValue={values.apellidoPat} required={true} />
                    <input type="text" placeholder="Apellido Materno" className="form-control form-group" onChange={handleChange('apellidoMat')} defaultValue={values.apellidoMat} required={true} />
                    <button className="btn btn-info btn-sm float-right" onClick={this.continue}>Siguiente</button>
                </React.Fragment>
            </div>
        )
    }
}

export default FormNameDetails;
