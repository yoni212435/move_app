import React, {useContext} from 'react'
import {APIContext} from '../../App'
import './Details.css'


export default function Details() {

    let {user} = useContext(APIContext)
// user.email


    return (

        <div className="all_detiles">
            <div className="sun_detiles">

                <div className="">
                    <h1>your details</h1>
                </div>

                <div>
                    <h3>{user?.email}</h3>
                </div>

            </div>
        </div>
    )
}
