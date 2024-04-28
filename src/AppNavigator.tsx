import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';

import { RootState } from './app/store';
import Header from './features/Header';
import LoginScreen from './features/login/LoginScreen';
import ContactsScreen from './screens/ContactsScreen/ContactsScreen';
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
					initialRouteName='Contacts'>
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
						component={ContactsScreen}
						options={{ header: Header }}
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
