import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    mainWrapper: {
        // flex: 1,
        display: 'flex',
        // overflow: 'visible'

    },
    linearGradient: {
        minWidth: "100%",
        minHeight: 800,
        borderRadius: 5
    },
    textReserved: {
        fontFamily: 'SF',
        fontWeight: '400',
        fontSize: 12,
        color: '#ffffff',
        marginTop: 90,
        textAlign: 'center',
        opacity: 0.5,
        paddingLeft: '7%',
        paddingRight: '7%'
    },
    text: {
        fontFamily: 'MFT',
        fontSize: 35,
        color: '#fff',
        marginTop: 15,
        textAlign: 'center',        
        paddingLeft: '7%',
        paddingRight: '7%',
        fontWeight: '400',
    }
});

export default styles;