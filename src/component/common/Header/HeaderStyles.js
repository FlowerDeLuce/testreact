import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    wrapperHeader: {
        position: 'absolute',
        top: 20,
        width: '100%',
        padding: 20,
        height: 79,
        shadowOpacity: 0.75,
        shadowRadius: 5,
        shadowColor: '#ffffff',
        shadowOffset: { height: 0, width: 0 },
        justifyContent: 'space-between',
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        zIndex: 100
    },
    imageLogo: {
        width: 99,
        height: 38,
        alignSelf: 'center'
    },
    imageEmily: {
        width: 105,
        height: 43,
        alignSelf: 'center'
    },
    button: {
        borderRadius: 18,
        alignSelf: 'center',
    },
});

export default styles;