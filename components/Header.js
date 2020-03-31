import React from 'react';
import {StyleSheet, Text, View, Dimensions, Platform} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

export default function Header({ navigation, title }) {
    const openMenu = () =>{
        navigation.openDrawer();
    }
    return(
            <MaterialIcons name='menu' size={28} onPress={openMenu} style={styles.icon} />
    );
}

const styles = StyleSheet.create({
    header: {
        width: Dimensions.get('window').width,
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        fontFamily: 'quicksand-bold',
        fontSize: 20,
        color: '#fff',
        letterSpacing: 0.5
    },
    icon: {
        position: 'absolute',
        color: '#fff',
        ...Platform.select({
            ios: {
                left: 16
            },
            android: {
                left: 16
            }
        }),
    }
});