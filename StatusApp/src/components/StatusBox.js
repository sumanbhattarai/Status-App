import React , {useState} from 'react'
import { View , Text , StyleSheet , TouchableOpacity} from 'react-native'
import { NormalText } from './CustomComponents'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCopy , faStar } from '@fortawesome/free-regular-svg-icons'
import { faCopy as faCopySolid , faStar as faStarSolid} from '@fortawesome/free-solid-svg-icons'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { Color } from '../constants/default'

export default function(props){
    const [ isStarClick , setStarClick] = useState(false)
    const [ isCopyClick , setCopyClick] = useState(false)

    const handleCopyClick = ()=> {
        setCopyClick(true)
    }
    const handleStarClick = ()=> {
        setStarClick(state=> !state)
        
    }
    return(
        <View style={styles.statusBox}>
            <View style={styles.iconBox }>
                <TouchableOpacity
                    style={styles.copy}
                    onPress={handleCopyClick}
                >
                    <FontAwesomeIcon 
                        icon={ isCopyClick ? faCopySolid :  faCopy} 
                        color={ isCopyClick ? Color.primary : Color.black} 
                        size={RFPercentage(3)}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.star}
                    onPress={handleStarClick}
                >
                    <FontAwesomeIcon 
                        icon={ isStarClick ? faStarSolid : faStar} 
                        color={ isStarClick ? Color.primary :  Color.black} 
                        size={RFPercentage(3)}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.contentBox}>
                    <NormalText color={Color.black}>{props.data.status}</NormalText>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    statusBox : {
        margin : 20 ,
        // borderWidth : 1 ,
        // borderColor : 'red'
    },
    iconBox : {
        flexDirection  : 'row-reverse',
        paddingRight : 20 ,
        marginBottom : 20
    },
    star : {
        marginRight : 20
    },
    contentBox  : {
        // borderWidth : 1 , 
        // borderColor  : 'blue',
        backgroundColor : Color.white,
        padding : 30,
        borderTopLeftRadius : 70,
        borderBottomRightRadius : 70,
        shadowColor : 'black',
        shadowOffset : {
            width : 0 ,
            height : 2
        },
        shadowOpacity : 0.26,
        shadowRadius : 6,
        elevation : 8
    }
})