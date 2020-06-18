import React  from 'react'
import {View , FlatList } from 'react-native'
import {Categories} from '../data/category'
import CategoryBox from '../components/CategoryBox'
import BannerAd from '../components/BannerAd'

export default function(props){
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
        <View>
            <BannerAd/>
            <FlatList
                data={Categories}
                renderItem={renderCategories}
                numColumns={2}
            />
        </View>
    )
}