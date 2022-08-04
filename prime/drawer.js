import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabBottom from './tab';
import Favourite from './favourite';
import Savedmovies from './saved';
import { Image,StyleSheet } from 'react-native';

const Drawer = createDrawerNavigator();
function sidedrawer() {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                
                >
                <Drawer.Screen
                
                 
                component={TabBottom} name="Welcome"/>
                <Drawer.Screen 
                 
                component={Savedmovies} name="saved videos" />
                <Drawer.Screen 
                  
                component={Favourite} name="favourite videos" />
                
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default sidedrawer