import React from 'react'
import {View , Text, Button , FlatList} from 'react-native'
import {Categories} from '../data/category'
import CategoryBox from '../components/CategoryBox'


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
            <FlatList
                data={Categories}
                renderItem={renderCategories}
                numColumns={2}
            />
        </View>
    )
}