import Home from './pages/home';
import Contact from './pages/contact';

import { createStackNavigator } from 'react-navigation';

const StackNavigator = createStackNavigator({
  Home: Home,
  Contact: Contact
});

export default { StackNavigator };