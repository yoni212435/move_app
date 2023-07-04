import {createContext, useContext, useState} from "react"

const MovieDataContext = createContext(null)
const SetMovieDataContext = createContext(null)

const useMovieData = () => useContext(MovieDataContext)
const useSetMovieData = () => useContext(SetMovieDataContext)

const MovieDataProvider = ({children, props}) => {
    const [data, setData] = useState(props.data)

    return (
        <MovieDataContext.Provider value={{data}}>
            <SetMovieDataContext.Provider value={{setData}}>
                {children}
            </SetMovieDataContext.Provider>
        </MovieDataContext.Provider>
    )
}

export {MovieDataProvider, useMovieData, useSetMovieData}