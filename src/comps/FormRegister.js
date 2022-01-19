import React, {useState} from 'react';

const FormRegister = () => {
    const patientFields = {
        fullName: '',
        phone: '',
        email: '',
        address: ''
    };
    
    let { values, setValues } = useState(patientFields);

    return (
        <h1>FormRegister</h1>
    );
}

export default FormRegister;