import { StatusCollection } from '../../data/status'
import { ADD_FAV_STATUS , LOAD_FAV_STATUS  , DELETE_FAV_STATUS } from '../action/status'
import FavStatus from '../../model/favStatus'

const initialState=  {
    status : StatusCollection,
    favourite : []
}

const statusReducer = ( state = initialState , action)=> {
    switch(action.type){
        case ADD_FAV_STATUS : 
            const newFav = new FavStatus ( action.data.id , action.data.status)
            console.log('reducer')
            return {
                ...state,
                favourite : state.favourite.concat(newFav)
            }
        case LOAD_FAV_STATUS : 
            return {
                ...state ,
                favourite : action.favStatus
            }
        case DELETE_FAV_STATUS : {
            const updatedFav = state.favourite.filter(el=> el.id !== action.id)
            return {
                ...state ,
                favourite : updatedFav
            }
        }
        default : 
            return state
    }
}

export default statusReducer