import React from 'react';
import { Patient } from './Patient';

export const PatientList = ({patients, setPatient, deletePatient}) => {

    return (
        <div className="md:w-1/2 lg:w-3/5 ml-5 md:h-screen overflow-y-scroll">
            {patients && patients.length != 0 ? (
                <>
                <h2 className="font-black text-3x1 text-center">Listado pacientes</h2>
                <p className="text-xl mt-5 text-center mb-10">Admimistra tus {''}
                    <span className="text-indigo-600 font-bold">Pacientes y citas {''}</span>
                </p>

                { patients.map((patient) => (
                    <Patient
                    setPatient={setPatient}
                    key={patient.id}
                    patient={patient}
                    deletePatient={deletePatient}
                />
                ))}
                </>
            ) : (
                <>
                <h2 className="font-black text-3x1 text-center">No hay pacientes</h2>
                <p className="text-xl mt-5 text-center mb-10">Comienza agregando pacientes {''}
                    <span className="text-indigo-600 font-bold">Y apareceran en este lugar {''}</span>
                </p>
                </>
            )}  
        </div>
    )
}
