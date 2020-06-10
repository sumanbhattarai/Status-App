import React from 'react'
import {View , Text} from 'react-native'
import { Categories } from '../data/category'
import { useSelector } from 'react-redux'

export default function(props){
    const {categoryId} = props.route.params
    const selectedCategory = Categories.find(el=> el.id === categoryId )
    // const selectedStatus = useSelector(state=> state.status.status[0])


    props.navigation.setOptions({
        title : selectedCategory.title
    })
    return(
        <View>
            <Text>{selectedCategory.title}</Text>
        </View>
    )
}