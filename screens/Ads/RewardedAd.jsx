import React from 'react'
import { TestIds, RewardedAd, RewardedAdEventType } from 'react-native-google-mobile-ads';

const adUnitIdR = __DEV__ ? TestIds.REWARDED : 'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy';

const rewarded = RewardedAd.createForAdRequest(adUnitIdR, {
    requestNonPersonalizedAdsOnly: true,
    keywords: ['fashion', 'clothing'],
});
const RewardedAd = () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const unsubscribeLoaded = rewarded.addAdEventListener(RewardedAdEventType.LOADED, () => {
            setLoaded(true);
        });
        const unsubscribeEarned = rewarded.addAdEventListener(
            RewardedAdEventType.EARNED_REWARD,
            reward => {
                console.log('User earned reward of ', reward);
            },
        );
        rewarded.load();
        return () => {
            unsubscribeLoaded();
            unsubscribeEarned();
        };
    }, []);
    
    if (!loaded) {
        return null;
    }
}

export default RewardedAd