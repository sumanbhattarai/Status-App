
import { InterstitialAd, AdEventType } from '@react-native-firebase/admob';

const InterstitialObj = {
    showInterstitialAd : () => {
        // Create a new instance
        const interstitialAd = InterstitialAd.createForAdRequest('ca-app-pub-6760161415189290/2967249669');
    
        // Add event handlers
        interstitialAd.onAdEvent((type, error) => {
            if (type === AdEventType.LOADED) {
                interstitialAd.show();
            }
        });
    
        // Load a new advert
        interstitialAd.load();
    }
}

export default InterstitialObj