import React, {useState, useEffect} from 'react';

const FormRegister = (props) => {
    const patientFields = {
        fullName: '',
        phone: '',
        email: '',
        address: ''
    };
    
    let [values, setValues] = useState(patientFields);
    
    useEffect(() => {
        if (props.currentId === '') {
            setValues({
                ...patientFields
            })
        } else {
            setValues({
                ...props.dataPatients[props.currentId]
            })
        }
    }, [props.currentId, props.dataPatients])

    const inputChanges = e => {
        let { name, value } = e.target
        
        setValues({
            ...values,
            [name]: value
        })
    }

    const submitChange = e => {
        e.preventDefault()
        props.addEdit(values)
    }

    return (
        <form autoComplete="off" onSubmit={submitChange}>
            <div className="form-group input-group">
                <div className="input-grou-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-user"></i>
                    </div>
                </div>

                <input className="form-control" placeholder="Name" name="fullName" value={values.fullName} onChange={inputChanges}></input>
            </div>
            
            <div className="row">
                <div className="form-group input-group col-md-6">
                    <div className="input-grou-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-mobile-alt"></i>
                        </div>
                    </div>

                    <input className="form-control" placeholder="Phone" name="phone" value={values.phone} onChange={inputChanges}></input>
                </div>

                <div className="form-group input-group col-md-6">
                    <div className="input-grou-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-envelope"></i>
                        </div>
                    </div>

                    <input className="form-control" placeholder="E-mail" name="email" value={values.email} onChange={inputChanges}></input>
                </div>
            </div>
            
            <div className="form-group input-group">
                <textarea className="form-control" placeholder="Address" name="address" value={values.address} onChange={inputChanges}></textarea>
            </div>

            <div className="form-group">
                <input type="submit" value={ props.currentId === '' ? 'Save' : 'Update' } className="btn btn-primary btn-block"></input>
            </div>
        </form>
    );
}

export default FormRegister;