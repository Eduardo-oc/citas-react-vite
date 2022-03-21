import React from 'react';

export const Patient = ({patient, setPatient, deletePatient}) => {

    const {name, owner, email, date, symptom, id} = patient;

    const handleDelete = () => {
        const resp = confirm("¿Esta seguro que quiere eliminar a este paciente?");

        if(resp){
            deletePatient(id);
        }
    }

    return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl mx-5">
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
            <span className="font-normal normal-case">{name}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
            <span className="font-normal normal-case">{owner}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
            <span className="font-normal normal-case">{email}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha de Alta: {''}
            <span className="font-normal normal-case">{date}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {''}
            <span className="font-normal normal-case">{symptom}
            </span>
        </p>
        <div className="flex justify-between mt-10">
            <button
                type="button"
                className="bg-indigo-600 py-2 px-10 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all rounded-md"
                onClick={() => setPatient(patient)}
            >Editar</button>

            <button
                type="button"
                className="bg-red-600 py-2 px-10 text-white uppercase font-bold hover:bg-red-700 cursor-pointer transition-all rounded-md"
                onClick={handleDelete}
            >Eliminar</button>
        </div>

    </div>
    )
}
