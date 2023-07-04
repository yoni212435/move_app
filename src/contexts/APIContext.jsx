import {createContext, useContext} from "react"

const APIContext = createContext(null)

const useAPIContext = () => useContext(APIContext)

const APIProvider = ({children, props}) => {
    return (
        <APIContext.Provider value={props}>
            {children}
        </APIContext.Provider>
    )
}

export {APIProvider, useAPIContext}