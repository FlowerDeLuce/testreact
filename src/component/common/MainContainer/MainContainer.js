import React from 'react';
// import PropTypes from 'prop-types';
import { View, Text, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ButtonInfo from '../buttons/ButtonInfo/ButtonInfo';
import ButtonAbout from '../buttons/ButtonAbout/ButtonAbout';
import StatusBar from '../StatusBar/StatusBar';
import ButtonSymptoms from '../buttons/ButtonSymptoms/ButtonSymptoms';

import styles from './MainContainerStyles';

// loading =true
const MainContainer = ({
    type,
    loading,
    bgColor,
    handler,
    ...rest
}) => (
        <View style={styles.mainWrapper}>
            <StatusBar backgroundColor="#824ed2"
                barStyle="light-content" />
            <ScrollView>
                <LinearGradient
                    start={{ x: 0.1, y: 0.3 }} end={{ x: 0.23, y: 1 }}
                    locations={[0, 0.5, 0.9]}
                    colors={['#824ed2', '#f9f6fd']}
                    style={styles.linearGradient}
                    removeClippedSubviews={true}
                    >
                    <Text
                        style={styles.textReserved} >
                        2019 Phoenix Children's Hospital. All Rights Reserved.
                    </Text>

                    <Text
                        style={styles.text} >
                        Our Journey with Asthma
                    </Text>
                    <ButtonInfo text='Start' />
                    <ButtonAbout text='I can tell you what asthma is' />
                    <ButtonSymptoms text='I can tell you what asthma symptoms are' />
                    

                </LinearGradient>
            </ScrollView>
        </View>
    );

export default MainContainer;