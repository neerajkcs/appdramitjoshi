import React from 'react';
import {Stylesheet, Text, View} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

export default function Header() {
    return(
        <View style={styles.header}>
            <View>
                <Text style={styles.headerText}>Fixed Header Text</Text>
            </View>
        </View>
    );
}

const style = Stylesheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1
    }
});