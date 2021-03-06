import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    wrapperButtonAbout: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 20,
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        width: '85%',
        height: 140,
        borderRadius: 25,
        borderWidth: 5,
        borderStyle: 'solid',
        borderColor: '#ff2f92',       
        backgroundColor: '#ce0f6a',
    },
    buttonAbout: {
        color: '#ffffff',
        fontFamily: 'MFT',
        fontSize: 31,
        alignSelf: 'center',
        paddingLeft: '15%',
        paddingRight: '15%',
        textAlign: 'center',
        fontWeight: '400',
    },
});

export default styles;