import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchPatients } from "./store";

const Patients = () => {
  const { patients } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <>
    {console.log('Debug-Patients: ',patients)}
    </>
    //     <ul>
    //         {
    //             patients.map(pt => {
    //                 return (
    //                     <li key = {pt.id} >
    //                         Name: {pt.name} {<br/>} Age: {pt.age}
    //                     </li>
    //                 )
    //             })
    //         }
    //     </ul>
    // )
  );
};

export default Patients;
