import { createMaterialTopTabNavigator, createStackNavigator, createSwitchNavigator } from 'react-navigation';
import React from 'react';
import { Dimensions } from 'react-native';

import * as routNames from './navConstants';
import HomeScreen from '../component/screen/HomeScreen/HomeScreen';
import QuestionScreen from '../component/screen/QuestionScreen/QuestionScreen';

/*

const HomeTabNav = ({ nav, initialRoute }) => {
    const Tabs = createMaterialTopTabNavigator({
        [routNames.TEACH_BACK]: TransferNavigateToPage(MyPlanTabScreen, nav),
        [routNames.RESOURCES]: TransferNavigateToPage(WorkoutsTabScreen, nav),
        [routNames.MY_NOTES]: TransferNavigateToPage(CalendarScreen, nav),
    }, {
            backBehavior: 'none',
            tabBarOptions: {
                activeTintColor: '#9dc4a9',
                inactiveTintColor: '#bbbbc4',
                upperCaseLabel: false,
                pressColor: '#9dc4a9',
                indicatorStyle: {
                    backgroundColor: '#9dc4a9',
                    height: 3,
                },
                labelStyle: {
                    fontSize: 14,
                    fontFamily: 'Lato',
                },
                allowFontScaling: false,
                style: {
                    backgroundColor: '#ffffff',
                    shadowOpacity: 0,
                    shadowOffset: {
                        height: 0,
                        width: 0,
                    },
                    shadowRadius: 0,
                    elevation: 0,
                    borderBottomWidth: 1,
                    borderBottomColor: '#dbdbdb',
                },
            },
            // navigationOptions: {tabBarOnPress: () => console.log('tabBarOnPress')},
            initialRouteName: initialRoute || routNames.TEACH_BACK,
            lazy: true,
        });
    return <Tabs />;
};
*/
const userNav = createStackNavigator({
    [routNames.HOMESCREEN]: HomeScreen,
    [routNames.HOW_USE]: QuestionScreen,
    /*[routNames.INFO]: InfoScreen,
    [routNames.PROFILE]: ProfileScreen,
    [routNames.START]: StartScreen,
    [routNames.TELL_WHAT]: TellWhatScreen,
    [routNames.TELL_SYMPTOMS]: TellSymptomsScreen,*/

},
{
        initialRouteName: routNames.HOMESCREEN,
    },
 {
        navigationOptions: {
            headerStyle: {
                shadowOpacity: 0,
                shadowOffset: {
                    height: 0,
                    width: 0,
                },
                shadowRadius: 0,
                elevation: 0,
            },
        },
    });

const MainNavigator = createSwitchNavigator({
    [routNames.MAINSCREEN]: userNav

}, {
        initialRouteName: routNames.MAINSCREEN,
    });

//export { HomeTabNav };
export default MainNavigator;
