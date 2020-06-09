import React from 'react'
import {View , Text, Button , FlatList} from 'react-native'
import {Categories} from '../data/category'
import CategoryBox from '../components/CategoryBox'


const renderCategories = ( itemData )=> {
    return(
        <CategoryBox data={itemData.item} />
    )
}
export default function(props){
    console.log(Categories)
    return(
        <View>
            <FlatList
                data={Categories}
                renderItem={renderCategories}
                numColumns={2}
            />
        </View>
    )
}