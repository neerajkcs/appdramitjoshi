import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export function DrawerContent(props) {
    return(
        <View style={{flex: 1}}>
            <DrawerContentScrollView { ...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={styles.userMainInfo}>
                            <Image
                                source={require('../assets/images/dramitjoshi.png')}
                                style={styles.userImage}
                            />
                            <View style={styles.userMainInfoInner}>
                                <Title>Dr. Amit Joshi</Title>
                                <Caption>Diabetologist & Sexologist</Caption>
                            </View>
                        </View>
                        <View style={styles.userDetailInfo}>
                            <View style={styles.userDetailRow}>
                                <Icon 
                                    name="email-variant"
                                    size={20}
                                    style={styles.userDetailIcon}
                                />
                                <Caption style={styles.userDetailText}>info@dramitjoshi.com</Caption>
                            </View>
                            <View style={styles.userDetailRow}>
                                <Icon 
                                    name="phone"
                                    size={20}
                                    style={styles.userDetailIcon}
                                />
                                <Caption style={styles.userDetailText}>+91-9660013000 </Caption>
                            </View>
                            <View style={styles.userDetailRow}>
                                <Icon 
                                    name="hospital-marker"
                                    size={20}
                                    style={styles.userDetailIcon}
                                />
                                <Caption style={styles.userDetailText}>C-369, 80 Feet Road, Mahesh Nagar, Jaipur</Caption>
                            </View>
                            
                        </View>
                    </View>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon 
                                    name="home-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Home"
                            onPress={() => {props.navigation.navigate('Home')}}
                        />
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon 
                                    name="information-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="About"
                            onPress={() => {props.navigation.navigate('About')}}
                        />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({color, size}) => (
                        <Icon 
                            name="youtube"
                            color={color}
                            size={size}
                        />
                    )}
                    label=""
                    onPress={() => {}}
                    style={styles.socialIcon}
                />
                <DrawerItem
                    icon={({color, size}) => (
                        <Icon 
                            name="facebook"
                            color={color}
                            size={size}
                        />
                    )}
                    label=""
                    onPress={() => {}}
                    style={styles.socialIcon}
                />
                <DrawerItem
                    icon={({color, size}) => (
                        <Icon 
                            name="twitter"
                            color={color}
                            size={size}
                        />
                    )}
                    label=""
                    onPress={() => {}}
                    style={styles.socialIcon}
                />
                <DrawerItem
                    icon={({color, size}) => (
                        <Icon 
                            name="web"
                            color={color}
                            size={size}
                        />
                    )}
                    label=""
                    onPress={() => {}}
                    style={styles.socialIcon}
                />
            </Drawer.Section>
        </View>
    )
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1
    },
    userMainInfo: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    userMainInfoInner: {
        alignItems: 'center',
        flex: 1,
    },
    userImage: {
        width: 80,
        height: 80
    },
    userDetailRow: {
        flexDirection: 'row',
        paddingHorizontal: 16,
        alignItems: 'flex-start',
        marginVertical: 5,
    },
    userDetailIcon: {
        marginRight: 5
    },
    userDetailText: {
        lineHeight: 16
    },
    bottomDrawerSection: {
        flexDirection: 'row',
    },
    socialIcon: {
        width: 40,
        justifyContent: 'center'
    }
})