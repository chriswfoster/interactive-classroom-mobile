
import {createStackNavigator, createAppContainer, createBottomTabNavigator} from 'react-navigation';
import Test from '../Components/Test'
import SignIn from '../Components/SignIn'
import Home from '../Components/Home';

const TabNavigator = createBottomTabNavigator({
    Home: Home,
    Test: Test,
    'Sign In': SignIn,
})
export default createAppContainer(TabNavigator);