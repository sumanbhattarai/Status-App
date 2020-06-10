import React from 'react'
import { Text , View , StyleSheet } from 'react-native'
import { Font , Color } from '../constants/default'
import { RFPercentage  } from 'react-native-responsive-fontsize'

const Heading = props => {
    return <Text style={{ ...styles.heading , ...props.style , color : props.color}}> {props.children} </Text>
}

const NormalText = props => {
    return <Text style={{...styles.normalText , ...style.props , color : props.color}}> {props.children} </Text>
}

const SmallText = props => {
    return <Text style={{...styles.smallText , ...styles.props , color : props.color}}> {props.children} </Text>
}

export { Heading , NormalText  , SmallText }

const styles = StyleSheet.create({
    heading : {
        fontSize : RFPercentage(2.2),
        fontFamily : Font.primary,
        fontWeight  : 'bold',
        color : Color.black
    },
    normalText : {
        fontSize : RFPercentage(1.5),
        fontFamily : Font.primary ,
        fontWeight : 'normal',
        color : Color.black
    },
    normalText : {
        fontSize : RFPercentage(1),
        fontFamily : Font.primary,
        color : Color.black
    }
})

