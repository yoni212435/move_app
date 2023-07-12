import {createContext, useContext, useState} from "react"
import {app} from "../db/firebase"

const DBContext = createContext(null)

const useDB = () => useContext(DBContext)

const DBProvider = ({children, props}) => {
    // eslint-disable-next-line
    const [dB, setDB] = useState(props)

    return (
        <DBContext.Provider value={dB}>
            {children}
        </DBContext.Provider>
    )
}

export {DBProvider, useDB}