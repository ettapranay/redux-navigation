import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Bollywood from './bollywood';
import Hollywood from './Hollywood';
import { Image,StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();
function TabBottom() {
    return (
        <Tab.Navigator
            initialRouteName="Home">
            <Tab.Screen
            options={{
                headerShown: false,
                tabBarIcon: () => (
                    <Image source={require('../assets/movies.png')} style={ styles.icon } />
                )
            }}
                name="Hollywood" component={Hollywood}
            />
            <Tab.Screen
             options={{
                headerShown: false,
                tabBarIcon: () => (
                    <Image source={require('../assets/movies1.png')} style={styles.icon} />
                )
            }}
                name="Bollywood"
                component={Bollywood} />
        </Tab.Navigator>
    )
}
const styles = StyleSheet.create({
    icon:{
        height: 30, width: 40
    }
})
export default TabBottom