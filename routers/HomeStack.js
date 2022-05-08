import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'

import Home from '../screens/Home'
import Rampa from '../screens/Rampa'
import Senzors from '../screens/Senzors'
import Battery from '../screens/Battery'
import LightsIMG from '../screens/LightsIMG'

const screens = { 

    Home: {
        screen: Home,
        navigationOptions: {
            title: 'Home',
            headerShown: false,
        }
    },

    Rampa: {
        screen: Rampa,
        navigationOptions: {
            title: 'Rampa',
        }
    },

    Senzors: {
        screen: Senzors,
        navigationOptions: {
        }
    },

    Battery: {
        screen: Battery,
        navigationOptions: {
            title: 'Rolety',
        }
    },

    LightsIMG: {
        screen: LightsIMG,
        navigationOptions: {
            title: 'Osvetlenie',
        }
    },

    
};


const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);