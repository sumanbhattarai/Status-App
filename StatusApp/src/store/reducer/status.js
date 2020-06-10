import { StatusCollection } from '../../data/status'

const initialState=  {
    status : StatusCollection,
    favourite : []
}

const statusReducer = ( state = initialState , action)=> {
    return state
}

export default statusReducer