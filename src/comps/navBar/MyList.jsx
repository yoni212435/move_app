import './MyList.css'
import Button from 'react-bootstrap/button'
import {useSetMainMovie} from '../../contexts/moviesContext'
import printErrorMessage from '../../printErrorMessage'
import {useDBFunction} from '../../contexts/DBContext'
import {useUpdateUser, useUser} from '../../contexts/userContext'
import {BiTrash} from 'react-icons/bi'
import {useState} from 'react'
import MyListItem from './MyListItem'

const MyList = ({}) => {
    const {myList} = useUser()
    const updateUser = useUpdateUser()
    const {removeMovie, overrideUser} = useDBFunction()

    const removeMovieFromMyList = movie => {
        removeMovie(movie)
            .catch(() => {
                console.log('update failed. trying to override')
                overrideUser({myList: myList.filter(_movie => _movie !== movie)})
                    .catch(e => printErrorMessage(e))
            })
        updateUser({myList: myList.filter(_movie => _movie !== movie)})
    }

    return (
        <div className="content">
            <div className="myList-container">
                {myList.map(
                    movie => <MyListItem movie={movie} deleteMovie={removeMovieFromMyList}/>
                )}
            </div>
        </div>
    )
}

export default MyList
