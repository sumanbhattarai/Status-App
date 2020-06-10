import React from 'react'
import { View , Text , StyleSheet , TouchableOpacity , Dimensions } from 'react-native'
import {Color } from '../constants/default'
import { Heading } from './CustomComponents'

export default function (props){
    return(
        <TouchableOpacity activeOpacity={0.6} 
            style={styles.categoryBox}
            onPress={props.onClick}
            style={{...styles.categoryBox}}
        >
            <View>
                <Heading style={styles.title} color={Color.white}>{props.data.title}</Heading>
            </View>
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    categoryBox: {
        flex : 1,
        height : Dimensions.get('window').height/3.3,
        borderLeftWidth : 5,
        borderColor : Color.primary,
        backgroundColor :'#235880',
        margin : 20 ,
        borderTopRightRadius : 50,
        borderBottomLeftRadius : 50,
        justifyContent : 'center' ,
        alignItems : 'center',
        shadowColor : 'black',
        shadowOffset : {
            width : 0 ,
            height : 2
        },
        shadowOpacity : 0.26,
        shadowRadius : 6,
        elevation : 8,
        paddingHorizontal : 10
      },
      title : {
          textAlign : 'center'
      }
})
   