import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchPatients } from "./store";

const Patients = () => {
  const { patients } = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(patients);

  //Always put a ? in a array.map thing, ie: (array)?.map

  return (
        <ul>
            {
                patients?.map(pt => {
                    return (
                      <div key={pt.id} className='patientCard'>
                        <li key = {pt.id} className = 'container'>
                            <strong>Name:</strong> {pt.name} {<br/>}
                            <strong>Age:</strong> {pt.age} {<br/>}{<br/>}
                            <strong>History of Present Illness:</strong> {pt.HPI} {<br/>}{<br/>}
                            <strong>Medical history:</strong> {pt.hx} <br/>
                        </li>
                        <hr/>
                      </div>
                    )
                })
            }
        </ul>
    )
};

export default Patients;
