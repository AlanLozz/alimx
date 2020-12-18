import React, { Component } from 'react'

export class FormBirthdayDetails extends Component {
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
                    <h5 className="card-title text-center">¿Cuál es tu fecha de nacimiento?</h5>
                    <input type="number" placeholder="Día" className="form-control form-group" onChange={handleChange('dia')} defaultValue={values.dia} />
                    <select onChange={handleChange('mes')} defaultValue={values.mes} className="form-control form-group" >
                        <option value="01">Enero</option>
                        <option value="02">Febrero</option>
                        <option value="03">Marzo</option>
                        <option value="04">Abril</option>
                        <option value="05">Mayo</option>
                        <option value="06">Junio</option>
                        <option value="07">Julio</option>
                        <option value="08">Agosto</option>
                        <option value="09">Septiembre</option>
                        <option value="10">Octubre</option>
                        <option value="11">Noviembre</option>
                        <option value="12">Diciembre</option>
                    </select>
                    <input type="number" placeholder="Año" className="form-control form-group" onChange={handleChange('anio')} defaultValue={values.anio} />
                    <button className="btn btn-outline-secondary btn-sm" onClick={this.back}>Anterior</button>
                    <button className="btn btn-info btn-sm float-right" onClick={this.continue}>Siguiente</button>
                </React.Fragment>
            </>
        )
    }
}

export default FormBirthdayDetails;
