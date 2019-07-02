import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    wrapperFooter: {
        display: 'flex',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 60,
        shadowOpacity: 0.75,
        paddingLeft:'5%',
        paddingRight: '5%',
        shadowRadius: 5,
        alignItems: 'center',
        shadowColor: '#ffffff',
        shadowOffset: { height: 0, width: 0 },
        justifyContent: 'space-between',
        alignContent: 'center',
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        zIndex: 100,
    },
    footerText: {
        borderRadius: 18,
        alignSelf: 'center',
        fontFamily:'SF',
        fontSize:10,
        color: '#c2c2c2',
        fontWeight: '500',
        alignSelf: 'center',
    },
    imageLogo: {
        width: 26,
        height: 26,
        alignSelf: 'center',
    },
    footerLogo: {
        width: 64,
        height: 39,
        alignSelf: 'center',
    },
    imageHome: {
        width: 28,
        height: 26,
        alignSelf: 'center',
       
    }
});

export default styles;