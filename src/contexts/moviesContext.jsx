import {createContext, useContext, useState} from "react"

const MoviesContext = createContext(null)
const MainMovieContext = createContext(null)
const SetMainMovieContext = createContext(null)


const useMovies = () => useContext(MoviesContext)
const useMainMovie = () => useContext(MainMovieContext)
const useSetMainMovie = () => useContext(SetMainMovieContext)


const MoviesProvider = ({children, props}) => {
    const [data] = useState(props.data)
    const [mainMovie, setMainMovie] = useState(props.mainMovie || data[0])

    return (
        <MoviesContext.Provider value={data}>
            <MainMovieContext.Provider value={mainMovie}>
                <SetMainMovieContext.Provider value={setMainMovie}>
                    {children}
                </SetMainMovieContext.Provider>
            </MainMovieContext.Provider>
        </MoviesContext.Provider>
    )
}

export {MoviesProvider, useMovies, useMainMovie, useSetMainMovie}