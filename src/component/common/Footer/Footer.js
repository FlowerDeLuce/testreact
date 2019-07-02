import React from 'react';
import PropTypes from 'prop-types';
import { View, Image,TouchableOpacity, Text} from 'react-native';
// import FastImage from 'react-native-fast-image';

import styles from './FooterStyle';
// loading =true
const Footer = ({
    type,
    loading,
    bgColor,
    handler,
    ...rest
}) => (
        <View style={styles.wrapperFooter}>
            <TouchableOpacity style={styles.wrapperButtonYellow}>
                <Image
                    style={styles.imageHome}
                    source={require('../../../images/home.png')} />
                <Text style={[styles.footerText, {color: '#824ed2'}]}>
                    Home
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.wrapperButtonYellow}>
                <Image
                    style={styles.imageLogo}
                    source={require('../../../images/how_use.png')} />
                <Text style={styles.footerText}>
                    How Use
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.wrapperButtonYellow}>
                <Image
                    style={styles.imageLogo}
                    source={require('../../../images/info.png')} />
                <Text style={styles.footerText}>
                    Info
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.wrapperButtonYellow}>
                <Image
                    style={styles.imageLogo}
                    source={require('../../../images/profile.png')} />
                <Text style={styles.footerText}>
                    Profile
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.wrapperButtonYellow}>
                <Image
                    style={styles.footerLogo}
                    source={require('../../../images/cox.png')} />
            </TouchableOpacity>

        </View>
    );

export default Footer;