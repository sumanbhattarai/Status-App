import React from 'react'
import { View , Text , StyleSheet , TouchableOpacity } from 'react-native'
import {Color , Font} from '../constants/default'

export default function (props){
    return(
        <TouchableOpacity activeOpacity={0.6} 
            style={styles.categoryBox}
            onPress={props.onClick}
            style={{...styles.categoryBox}}
        >
            <View>
                <Text style={styles.title}>{props.data.title}</Text>
            </View>
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    categoryBox: {
        flex : 1,
        height : 200,
        backgroundColor : Color.primary,
        margin : 20 ,
        borderTopRightRadius : 50,
        borderBottomLeftRadius : 50,
        justifyContent : 'center' ,
        alignItems : 'center',
        shadowColor : Color.primary,
        shadowOffset : {
            width : 0 ,
            height : 2
        },
        shadowOpacity : 0.26,
        shadowRadius : 6,
        elevation : 8,
      },
      title : {
          fontFamily : Font.primary,
          color : 'black'
      }
})
   