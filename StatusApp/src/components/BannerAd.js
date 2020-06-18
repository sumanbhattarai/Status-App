import React , {useState} from 'react'
import { View } from 'react-native'
import { BannerAd, BannerAdSize, TestIds  } from '@react-native-firebase/admob';

const adUnitId = __DEV__ ? TestIds.BANNER : "ca-app-pub-6760161415189290~2275052893";

export default function(){
    const [ adLoad , setAdLoad]  = useState(false)

    const handleAdOpened = ()=>{
        console.log('Ad opened')
        setAdLoad(true)
    }
    const handleAdFailed = ()=>{
        console.log('ad failed to open')
        setAdLoad(false)
    }
    return(
        <View style={ adLoad ? {}: {height : 0} }>
                <BannerAd 
                    unitId={adUnitId}
                    size={BannerAdSize.SMART_BANNER}
                    onAdLoaded={handleAdOpened}
                    onAdFailedToLoad={handleAdFailed}
                />
        </View> 
    )
}