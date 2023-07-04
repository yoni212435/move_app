import './Details.css'
import {useAPIContext} from '../../contexts/APIContext'


export default function Details() {

    let {user} = useAPIContext()
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
