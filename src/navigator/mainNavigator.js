import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen3169188Navigator from '../features/BlankScreen3169188/navigator';
import BlankScreen2169184Navigator from '../features/BlankScreen2169184/navigator';
import BlankScreen1169183Navigator from '../features/BlankScreen1169183/navigator';
import BlankScreen0169181Navigator from '../features/BlankScreen0169181/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen3169188: { screen: BlankScreen3169188Navigator },
BlankScreen2169184: { screen: BlankScreen2169184Navigator },
BlankScreen1169183: { screen: BlankScreen1169183Navigator },
BlankScreen0169181: { screen: BlankScreen0169181Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
