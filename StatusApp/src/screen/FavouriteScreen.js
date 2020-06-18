import React , {useEffect } from 'react'
import { FlatList , View} from 'react-native'
import { useSelector , useDispatch  } from 'react-redux'
import {loadFavStatus} from '../store/action/status'
import Status from '../components/StatusBox'
import BannerAd from '../components/BannerAd'
import { NormalText } from '../components/CustomComponents'

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
        <View>
            <BannerAd/>
            { 
                favStatus.length >0 ? (
                    <FlatList
                        data={favStatus}
                        renderItem={renderFav} 
                    />
                ):(
                    <View style={{ justifyContent : 'center' , alignItems : 'center', height : '90%' }}>
                        <NormalText>No favourite yet. Please add some.</NormalText>
                    </View>
                )
            }
        </View>
    )
}