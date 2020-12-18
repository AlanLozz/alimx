import React, { Component } from 'react';
import Axios from 'axios';

export class FormSuccess extends Component {
    render() {
        const {values} = this.props;
        const {primerNombre, segundoNombre, apellidoPat, apellidoMat, dia, mes, anio, correo, celular} = values;
        const fechaNacimiento = `${anio}-${mes}-${dia}`;
        console.log(fechaNacimiento);
        const data = {
            nombre: primerNombre,
            segundoNombre,
            apellidoPat,
            apellidoMat,
            fechaNacimiento,
            correo,
            celular
        };
        const saveUser = async() => {
            await Axios.post('http://localhost:5000',data);
        }
        
        saveUser();
        return (
            <div className="alert alert-success">
                <strong>¡Tus datos fueron guardados exitosamente!</strong>
            </div>
        )
    }
}

export default FormSuccess
