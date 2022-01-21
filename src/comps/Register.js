import React, {useState, useEffect} from 'react';
import FormRegister from './FormRegister';
import firebaseDB from '../database/firebase';

const Register = () => {

    let [dataPatients, setDataPatients] = useState({})

    let [currentId, setCurrentId] = useState('')

    useEffect(() => {
        firebaseDB.child('Patients').on('value', currentDB => {
            if (currentDB.val() != null) {
                setDataPatients({
                    ...currentDB.val()
                })
            } else {
                setDataPatients({})
            }
        })
    }, [])

    const addEdit = obj => {
        if (currentId === '') {
            firebaseDB.child('Patients').push(
                obj,
                error => {
                    if (error) {
                        console.log(error);
                    } else {
                        setCurrentId('')
                    }
                }
            )
        } else {
            firebaseDB.child(`Patients/${currentId}`).set(
                obj,
                error => {
                    if (error) {
                        console.log(error);
                    } else {
                        setCurrentId('')
                    }
                }
            )
        }
    }

    const deletePatient = key => {
        if (window.confirm('Are you sure you want to delete this patient?')) {
            firebaseDB.child(`Patients/${key}`).remove(
                error => {
                    if (error) {
                        console.log(error);
                    }
                }
            );
        }
    }

    return (
        <div>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Patient Register</h1>
                </div>
            </div>

            <div className="row">
                <div className="col-md-5">
                    <FormRegister {...({addEdit, currentId, dataPatients})} />
                </div>
                <div>
                    <div className="col-md-7">
                        <table className="table table-borderless table-stripped">
                            <thead className="thead-light">
                                <tr>
                                    <td>Name</td>
                                    <td>Phone</td>
                                    <td>E-mail</td>
                                    <td>Actions</td>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    Object.keys(dataPatients).map(id => {
                                        return <tr key={id}>
                                            <td> {dataPatients[id].fullName} </td>
                                            <td> {dataPatients[id].phone} </td>
                                            <td> {dataPatients[id].email} </td>

                                            <td>
                                                <button className="btn btn-primary" onClick={ () => { setCurrentId(id) }}>
                                                    <i className="fas fa-pencil-alt"></i>
                                                </button>

                                                <button className="btn btn-danger" onClick={() => deletePatient(id) }>
                                                    <i className="fas fa-trash-alt"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;