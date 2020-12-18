import React, { Component } from 'react';
import FormNameDetails from './partials/FormNameDetails';
import FormBirthdayDetails from './partials/FormBirthdayDetails';
import FormContactDetails from './partials/FormContactDetails';
import FormConfirm from './partials/FormConfirm';
import FormSuccess from './partials/FormSuccess'

export class index extends Component {
    state ={
        step: 1,
        primerNombre:'',
        segundoNombre:'',
        apellidoPat:'',
        apellidoMat:'',
        dia:'',
        mes:'',
        anio:'',
        correo:'',
        celular:''
    }

    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        })
    }

    backStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        })
    };

    handleChange = input => e => {
        this.setState({[input] : e.target.value});
    }

    render() {
        const { step } = this.state;
        const { primerNombre, segundoNombre, apellidoPat, apellidoMat, dia, mes, anio, correo, celular } = this.state;
        const values = {primerNombre, segundoNombre, apellidoPat, apellidoMat, dia, mes, anio, correo, celular};
        
        switch(step){
            case 1:
                return(<FormNameDetails nextStep={this.nextStep} handleChange={this.handleChange} values={values} />);
            case 2:
                return(<FormBirthdayDetails nextStep={this.nextStep} backStep={this.backStep} handleChange={this.handleChange} values={values} />);
            case 3:
                return(<FormContactDetails nextStep={this.nextStep} backStep={this.backStep} handleChange={this.handleChange} values={values}/>);
            case 4:
                return(<FormConfirm nextStep={this.nextStep} backStep={this.backStep} values={values}/>);
            case 5:
                return(<FormSuccess values={values} />);
            default:
        }
    }
}

export default index
