
import * as React from 'react';
import { View, Text } from 'react-native';
// import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../containers/Home/index'
import DetailScreen from '../containers/Details/index';

const Stack = createStackNavigator();

// const BottomTabNavigator = createMaterialBottomTabNavigator(
//     {
//         Home: {
//             screen: Home,
//         }
//     }, {
//         initialRouteName : 'Home',
//         activeColor: '#303856'
//     })

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
                 <Stack.Screen options={{ headerShown: false }} name="Detail" component={DetailScreen} /> 
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;