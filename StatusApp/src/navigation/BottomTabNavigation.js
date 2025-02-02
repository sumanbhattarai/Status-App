import 'react-native-gesture-handler';
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBoxes , faStar } from '@fortawesome/free-solid-svg-icons'
import { Font , Color } from '../constants/default'
import StackNavigation from './StackNavigation'
import FavouriteStackNavigation from './FavouriteStackNavigation';


const BottomTab = createBottomTabNavigator()
export default function(){
    return(
        <SafeAreaProvider>
            <NavigationContainer>
                <BottomTab.Navigator
                    tabBarOptions={{
                        activeTintColor : Color.primary,
                        labelStyle : {
                            fontFamily :  Font.primary,
                            paddingBottom : 5
                        }
                    }}
                    
                >
                    <BottomTab.Screen 
                        name="Category" 
                        component={StackNavigation}
                        options={{
                            tabBarIcon:({color , size})=> <FontAwesomeIcon icon={faBoxes} color={color} size={size} />
                        }} 
                    />
                    <BottomTab.Screen 
                        name="Favourite" 
                        component={FavouriteStackNavigation} 
                        options={{
                            tabBarIcon : ({color ,size})=> <FontAwesomeIcon icon={ faStar } color={color} size={size} />
                        }}
                    />
                </BottomTab.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    )
}