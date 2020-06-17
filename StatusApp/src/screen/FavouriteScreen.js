import React , {useEffect } from 'react'
import { FlatList} from 'react-native'
import { useSelector , useDispatch  } from 'react-redux'
import {loadFavStatus} from '../store/action/status'
import Status from '../components/StatusBox'

const renderFav = (itemData)=>{
    return <Status data={itemData.item} />
}
export default function(){
    const favStatus = useSelector(state=>state.status.favourite)

    const dispatch = useDispatch()
    useEffect(()=>{
      dispatch(loadFavStatus())
    }, [dispatch])
    return(
        <FlatList
            data={favStatus}
            renderItem={renderFav} 
        />
    )
}