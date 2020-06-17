import { insertStatus , getFavStatus , deleteFavStatus } from '../../database/db'
export const ADD_FAV_STATUS = 'ADD_FAV_STATUS'
export const LOAD_FAV_STATUS = 'LOAD_FAV_STATUS'
export const DELETE_FAV_STATUS = 'DELETE_FAV_STATUS'

export const addFav = (id , status)=>{
    console.log('in dispatching...')
    return dispatch =>{
        insertStatus(id , status)
            .then(result=>{
                console.log('inserted' , result)
                dispatch({
                    type : ADD_FAV_STATUS ,
                    data : {
                        id : id ,
                        status : status
                    }
                })
            })
            .catch(error=>{
                console.log('Error inserting')
            })
    }
}

export const loadFavStatus = ()=>{
    console.log('loading fav...')
    return dispatch=>{
        getFavStatus()
            .then(result=>{
                let temp = [];
                for (let i = 0; i < result.rows.length; ++i) {
                    temp.push(result.rows.item(i));
                }
                dispatch({
                    type : LOAD_FAV_STATUS,
                    favStatus : temp
                })
            })
            .catch(error=>{
                console.log('Error loading.')
            })
    }
}

export const deleteFav = id => {
    return dispatch=>{
        deleteFavStatus(id)
            .then(result=>{
                return dispatch({
                    type : DELETE_FAV_STATUS,
                    id : id
                })
            })
            .catch(error=>{
                console.log('Error deleting')
            })
    }
}