import React , {useState} from 'react'
import { View } from 'react-native'
import { BannerAd, BannerAdSize  } from '@react-native-firebase/admob';

export default function(){
    const [ adLoad , setAdLoad]  = useState(false)

    const handleAdOpened = ()=>{
        console.log('Ad opened')
        setAdLoad(true)
    }
    const handleAdFailed = (e)=>{
        console.log('ad failed to open' , e)
        setAdLoad(false)
    }
    return(
        <View style={ adLoad ? {}: {height : 0} }>
                <BannerAd 
                    unitId="ca-app-pub-6760161415189290/1827071154"
                    size={BannerAdSize.SMART_BANNER}
                    onAdLoaded={handleAdOpened}
                    onAdFailedToLoad={(e)=>handleAdFailed(e)}
                />
        </View> 
    )
}