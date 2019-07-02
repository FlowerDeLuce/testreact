import React from 'react';
// import PropTypes from 'prop-types';
import { View, Text, ScrollView } from 'react-native';
import StatusBar from '../StatusBar/StatusBar';

import styles from './QuestionContentStyle';

// loading =true
const MainContainer = ({
    type,
    loading,
    bgColor,
    handler,
    ...rest
}) => (
        <View style={styles.mainWrapper}>
            <StatusBar backgroundColor="#2e4ff3"
                barStyle="light-content" />
            <ScrollView>
                <Text style={styles.title}>
                    I can tell you what asthma is
                </Text>
                <Text style={styles.content}>
                    Facilisis at vero eros et accumsan et iusto dignisim qui blandit praesent luptatum zzril
                    delenit augue duis dolore te feugait nulla facilisi.Duis autem vel 
                    eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum 
                    dolore eu feugiat nulla facilisis at vero eros et iusto odio dignissim qui blandit praesent. 
                    Duis autem vel eum iriure dolor in hendrerit in ulputate velit esse molestie consequat,
                    vel illum dolore eu feugiat nulla facilisis at vero eros et
                    accumsan et iusto odio dignissim qui blandit
                    praesent. Velit esse molestie consequat, vel illum dolore vulputate velit esse molestie
                    consequat, vel illum molestie consequat, vel illum. Duis autem vel eum iriure dolor in 
                    hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat 
                    nulla facilisis at vero eros et.accumsan et iusto odio dignissim qui blandit praesent.
                    Facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent
                    luptatum zzril delenit augue.
                </Text>
            </ScrollView>
        </View>
    );

export default MainContainer;