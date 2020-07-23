import React , { useEffect } from 'react'
import BottomTabNavigation from './navigation/BottomTabNavigation'
import { createStore , combineReducers, applyMiddleware } from 'redux'
import { Provider  } from 'react-redux'
import ReduxThunk from 'redux-thunk'
import statusReducer from './store/reducer/status'
import { init } from './database/db'
import admob, { MaxAdContentRating } from '@react-native-firebase/admob'
import SplashScreen from 'react-native-splash-screen'

// calling the init func from db
init().then(result=>{
  console.log('Initialized' , result)
  console.log(result.rows.length)
}).catch(error=>{
  console.log('Something went wrong.' , error)
})

admob()
  .setRequestConfiguration({
    // Update all future requests suitable for parental guidance
    maxAdContentRating: MaxAdContentRating.PG,

    // Indicates that you want your content treated as child-directed for purposes of COPPA.
    tagForChildDirectedTreatment: true,

    // Indicates that you want the ad request to be handled in a
    // manner suitable for users under the age of consent.
    tagForUnderAgeOfConsent: true,
  })
  .then(() => {
    // Request config successfully set!
  });






const rootReducer = combineReducers({
  status  : statusReducer
})

const store = createStore( rootReducer , applyMiddleware(ReduxThunk) )
export default function(){
  useEffect(()=>{
    setTimeout(()=>{
      SplashScreen.hide()
    },500)
  },[])
  return <Provider store={store}><BottomTabNavigation/></Provider>
}