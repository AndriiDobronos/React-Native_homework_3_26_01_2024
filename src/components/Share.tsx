import React from 'react';
import {Alert, Share, View, Button} from 'react-native';

const ShareLink = ({link}) => {
    const onShare = async () => {
        try {
            const result = await Share.share({
                message:
                `${link}`
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error: any) {
            Alert.alert(error.message);
        }
    };
    return (
        <View style={{marginTop: 15,marginHorizontal:24}}>
            <Button onPress={onShare} title="Share" color="grey"/>
        </View>
    );
};

export default ShareLink;