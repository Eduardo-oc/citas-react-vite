import React, { useState, useEffect } from 'react';
import { Error } from './Error';

export const Formulario = ({patients ,setPatients, patient, setPatient}) => {

    const [name, setName] = useState("");
    const [owner, setOwner] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");
    const [symptom, setSymptom] = useState("");

    const [error, setError] = useState(false);

    useEffect(() => {
       if(Object.keys(patient).length > 0){
           setName(patient.name);
           setOwner(patient.owner);
           setEmail(patient.email);
           setDate(patient.date);
           setSymptom(patient.symptom);
       }
    }, [patient])

    const getId = () => {
        const rand = Math.random().toString(36).substr(2);
        const date = Date.now().toString(36);

        return rand + date;
    }
   
   const handleSubmit = (e) => {
    e.preventDefault();

    //Validamos formulario
    if([name, owner, email, date, symptom].includes("")){
        console.log("Hay al menos 1 campo vacio");

        setError(true);
    }else{
        console.log("Formulario enviado");
        setError(false);

        const objPatient = {
            name,
            owner,
            email,
            date,
            symptom
        }

        if(patient.id){
            objPatient.id = patient.id;

            const updatedPatients = patients.map((patientEdit) => patientEdit.id === patient.id 
            ? objPatient : patientEdit);

            setPatients(updatedPatients);
            setPatient({});

        } else {
            objPatient.id = getId();
            setPatients([...patients, objPatient]);
        }

        setName("");
        setOwner("");
        setSymptom("");
        setEmail("");
        setDate("");
    }
   }

    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3x1 text-center">Seguimiento pacientes</h2>
            <p className="text-xl mt-5 text-center mb-10">Añade pacientes y {''}
            <span className="text-indigo-600 font-bold">Administralos</span>
            </p>
            <form 
            className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
            onSubmit={e => handleSubmit(e)}
            >
                {error && 
                    <Error textError="Todos los campos son obligatorios"/>
                }
                <div className="mb-5">
                    <label htmlFor="pet" className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>

                    <input
                        id="pet"
                        type="text"
                        placeholder="Nombre de la Mascota"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={name}
                        name="pet"
                        onChange={(e) => setName(e.target.value)}
                    />
                    
                </div>
                <div className="mb-5">
                    <label htmlFor="owner" className="block text-gray-700 uppercase font-bold">Nombre Propietario</label>

                    <input
                        id="owner"
                        type="text"
                        placeholder="Nombre del Propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={owner}
                        onChange={(e) => setOwner(e.target.value)}
                    />
                    
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email</label>

                    <input
                        id="email"
                        type="email"
                        placeholder="Email Contacto"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    
                </div>
                <div className="mb-5">
                    <label htmlFor="date" className="block text-gray-700 uppercase font-bold">Fecha de Alta</label>

                    <input
                        id="date"
                        type="date"
                        className="border-2 w-full p-2 mt-2 rounded-md"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                    
                </div>
                <div className="mb-5">
                    <label htmlFor="symptom" className="block text-gray-700 uppercase font-bold">Sintomas</label>

                    <textarea
                        id="symptom"
                        placeholder="Describe los Sintomas"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={symptom}
                        onChange={(e) => setSymptom(e.target.value)}
                    />
                    
                </div>
                
                <input
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
                    value={patient.id ? "Editar paciente" : "Agregar paciente"}
                />
            </form>
        </div>
    )
}
