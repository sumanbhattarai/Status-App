import React , {useEffect} from 'react'
import {View , FlatList } from 'react-native'
import {Categories} from '../data/category'
import CategoryBox from '../components/CategoryBox'
import BannerAd from '../components/BannerAd'
import {loadFavStatus} from '../store/action/status'
import { useDispatch } from 'react-redux'

export default function(props){
    
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(loadFavStatus())
    }, [dispatch])

    const renderCategories = ( itemData )=> {
        return(
            <CategoryBox 
                data={itemData.item} 
                onClick={()=>{
                    props.navigation.navigate('Status', {
                        categoryId : itemData.item.id
                    })
                }}
            />
        )
    }
    return(
        <View style={{flex : 1}}>
            <BannerAd/>
            <FlatList
                data={Categories}
                renderItem={renderCategories}
                numColumns={2}
            />
        </View>
    )
}