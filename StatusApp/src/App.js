import React from 'react'
import BottomTabNavigation from './navigation/BottomTabNavigation'
import { createStore , combineReducers } from 'redux'
import { Provider  } from 'react-redux'
import statusReducer from './store/reducer/status'

const rootReducer = combineReducers({
  status  : statusReducer
})

const store = createStore( rootReducer )
export default function(){
  return <Provider store={store}><BottomTabNavigation/></Provider>
}