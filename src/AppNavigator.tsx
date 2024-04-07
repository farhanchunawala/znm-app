import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RootState } from './app/store';
// import Header from './features/Header';
import LoginScreen from './features/login/LoginScreen';
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
		<NavigationContainer>
			<Stack.Navigator initialRouteName={loginStatus ? 'Home' : 'Login'}>
				{/* <Stack.Screen
					name="Home"
					component={HomeScreen}
					options={{ header: () => <Header /> }}
				/> */}
				<Stack.Screen
					name="Login"
					component={LoginScreen}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="Home"
					component={HomeScreen}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="Profile"
					component={ProfileScreen}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="ProfileEdit"
					component={ProfileEditScreen}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="Services"
					component={ServicesScreen}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="HealthLocker"
					component={HealthLockerScreen}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="Resources"
					component={ResourcesScreen}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="Membership"
					component={MembershipBenefits}
					options={{ headerShown: false }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default AppNavigator;
