import React, { Component } from 'react'

export class FormContactDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.backStep();
    }
    render() {
        const { values, handleChange } = this.props;
        return (
            <>
                <React.Fragment>
                    <h5 className="card-title text-center">Datos de contacto</h5>
                    <input type="email" placeholder="Correo electronico" className="form-control form-group" onChange={handleChange('correo')} defaultValue={values.correo} />
                    <input type="tel" placeholder="Telefono Celular" className="form-control form-group" onChange={handleChange('celular')} defaultValue={values.celular} />
                    <button className="btn btn-outline-secondary btn-sm" onClick={this.back}>Anterior</button>
                    <button className="btn btn-info btn-sm float-right" onClick={this.continue}>Siguiente</button>
                </React.Fragment>
            </>
        )
    }
}

export default FormContactDetails;
