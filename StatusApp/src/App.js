import React , { useEffect} from 'react'
import BottomTabNavigation from './navigation/BottomTabNavigation'
import { createStore , combineReducers, applyMiddleware } from 'redux'
import { Provider  } from 'react-redux'
import ReduxThunk from 'redux-thunk'
import statusReducer from './store/reducer/status'
import { init } from './database/db'

// calling the init func from db
init().then(result=>{
  console.log('Initialized' , result)
  console.log(result.rows.length)
}).catch(error=>{
  console.log('Something went wrong.' , error)
})



const rootReducer = combineReducers({
  status  : statusReducer
})

const store = createStore( rootReducer , applyMiddleware(ReduxThunk) )
export default function(){
  return <Provider store={store}><BottomTabNavigation/></Provider>
}