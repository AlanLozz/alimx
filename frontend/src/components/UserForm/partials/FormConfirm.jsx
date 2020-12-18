import React, { Component } from 'react'

export class FormConfirm extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.backStep();
    }
    render() {
        const { values } = this.props;
        const nombreCompleto = `${values.primerNombre} ${values.segundoNombre} ${values.apellidoPat} ${values.apellidoMat}`;
        const fechaNacimiento = `${values.dia}/${values.mes}/${values.anio}`;
        return (
            <>
                <h5 className="card-title text-center">Verifica tus datos</h5>
                <div className="alert alert-warning text-center">
                    <p><strong>Nombre: </strong>{nombreCompleto}</p>
                    <p><strong>Fecha de nacimiento: </strong>{fechaNacimiento}</p>
                    <p><strong>Correo Electronico: </strong>{values.correo}</p>
                    <p><strong>Telefono Celular: </strong>{values.celular}</p>
                </div>
                <button className="btn btn-outline-secondary btn-sm" onClick={this.back}>Anterior</button>
                <button className="btn btn-info btn-sm float-right" onClick={this.continue}>Siguiente</button>
            </>
        )
    }
}

export default FormConfirm;
