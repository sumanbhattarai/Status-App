import React from 'react'
import {View , FlatList} from 'react-native'
import { Categories } from '../data/category'
import { useSelector } from 'react-redux'
import StatusBox from '../components/StatusBox'
import BannerAd from '../components/BannerAd'

const renderStatus = (itemData)=> {
    return <StatusBox data={itemData.item} />
}
export default function(props){
    const {categoryId} = props.route.params
    const selectedCategory = Categories.find(el=> el.id === categoryId )
    const selectedStatus = useSelector(state=> state.status.status.filter(el=> el.categoryId.indexOf(categoryId)>=0))

    props.navigation.setOptions({
        title : selectedCategory.title
    })
    return(
        <View>
            <BannerAd />
            <FlatList
                data={selectedStatus}
                renderItem={renderStatus}
            />
        </View>
    )
}