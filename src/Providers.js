import React from "react";
import { useSelector } from "react-redux";

const Providers = () => {
    const {providers} = useSelector(state => state)
    console.log('providers: ',providers)

    return (
        <ul>
            {
                providers?.map(provider => {
                    return (
                        <div key = {provider.id} className = 'patientCard'>
                        <li key = {provider.id} className = 'container'>
                            <strong>Name:</strong> {provider.name} {<br/>}
                            <strong>Specialty:</strong> {provider.specialty} {<br/>} {<br/>}
                            <strong>Bio:</strong> {provider.about}
                        </li>
                        <hr/>
                        </div>
                    )
                })
            }
        </ul>
    )
}

export default Providers
