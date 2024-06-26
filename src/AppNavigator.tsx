import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';

import { RootState } from './app/store';
import Header from './components/Header';
import LoginScreen from './features/login/LoginScreen';
import Contacts from './screens/Contacts/Screen';
import AddContacts from './screens/AddContacts/Screen';
import Fabrics from './screens/Fabrics/Screen';
import AddFabrics from './screens/AddFabrics/Screen';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import ProfileEditScreen from './screens/ProfileEditScreen';
import ServicesScreen from './screens/ServicesScreen';
import HealthLockerScreen from './screens/HealthLockerScreen';
import ResourcesScreen from './screens/ResourcesScreen';
import MembershipBenefits from './screens/MembershipBenefits';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
	// const loginStatus = useSelector((state) => state.login.status);
	console.log(useSelector(state => state.login.login));

	const loginStatus = useSelector(
		(state: RootState) => state.login.login === 'loggedIn',
	);
	// const loginStatus = useSelector(state => state.login === 'loggedIn');

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<NavigationContainer>
				<Stack.Navigator
					// initialRouteName={loginStatus ? 'Home' : 'Login'}>
					initialRouteName="Fabrics">
					<Stack.Screen
						name="Login"
						component={LoginScreen}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name="Home"
						component={HomeScreen}
						options={{ header: Header }}
					/>
					<Stack.Screen
						name="Contacts"
						component={Contacts}
						options={{ header: Header }}
					/>
					<Stack.Screen
						name="AddContacts"
						component={AddContacts}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name="Fabrics"
						component={Fabrics}
						options={{ header: Header }}
					/>
					<Stack.Screen
						name="AddFabrics"
						component={AddFabrics}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name="Profile"
						component={ProfileScreen}
						options={{ header: Header }}
					/>
					<Stack.Screen
						name="ProfileEdit"
						component={ProfileEditScreen}
						options={{ header: Header }}
					/>
					<Stack.Screen
						name="Services"
						component={ServicesScreen}
						options={{ header: Header }}
					/>
					<Stack.Screen
						name="HealthLocker"
						component={HealthLockerScreen}
						options={{ header: Header }}
					/>
					<Stack.Screen
						name="Resources"
						component={ResourcesScreen}
						options={{ header: Header }}
					/>
					<Stack.Screen
						name="Membership"
						component={MembershipBenefits}
						options={{ header: Header }}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</SafeAreaView>
	);
};

export default AppNavigator;
