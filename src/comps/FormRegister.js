import React, {useState} from 'react';

const FormRegister = () => {
    const patientFields = {
        fullName: '',
        phone: '',
        email: '',
        address: ''
    };
    
    let { values, setValues } = useState(patientFields);

    const inputChange = e => {
        let { fullName, value } = e.target
        
        setValues({
            ...values,
            [fullName]: value
        })
    }

    const submitChange = e => {
        e.preventDefault()
    }

    return (
        <fom autoComplete="off" onSubmit="{submitChange}">
            <div className="form-group input-group">
                <div className="input-grou-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-user"></i>
                    </div>
                </div>

                <input className="form-control" placeholder="Fullname" name="fullName" value={values.fullName} onChange={inputChange}></input>
            </div>
            <div className="row">
                <div className="form-group input-group col-md-6">
                    <div className="input-grou-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-mobile-alt"></i>
                        </div>
                    </div>

                    <input className="form-control" placeholder="Phone" name="phone" value={values.phone} onChange={inputChange}></input>
                </div>

                <div className="form-group input-group col-md-6">
                    <div className="input-grou-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-envelope"></i>
                        </div>
                    </div>

                    <input className="form-control" placeholder="E-mail" name="email" value={values.email} onChange={inputChange}></input>
                </div>
            </div>
            <div className="form-group input-group">
                <div className="input-grou-prepend">

                </div>

                <textarea className="form-control" placeholder="Address" name="address" value={values.address} onChange={inputChange}></textarea>
            </div>
        </fom>
    );
}

export default FormRegister;