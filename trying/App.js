import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SignIn from './components/SignIn.js';
import SignUp from './components/SignUp.js';
import Rooms from './components/Rooms.js';
import Messages from './components/Messages.js';

const RootNavigator = createStackNavigator(
  {
    SignIn: { name: 'SignIn', screen: SignIn },
    SignUp: { name: 'SignUp', screen: SignUp },
    Rooms: { name: 'Rooms', screen: Rooms },
    Messages: { name: 'Messages', screen: Messages}
  },
  { 
    headerMode: 'screen' 
  }
);

export default createAppContainer(RootNavigator);
