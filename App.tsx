import { Text } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/app/store';
import AppNavigator from './src/AppNavigator';
import { StatusBar } from 'expo-status-bar';
import {
	useFonts,
	Montserrat_300Light,
	Montserrat_400Regular,
	Montserrat_500Medium,
	Montserrat_600SemiBold,
	Montserrat_700Bold,
	Montserrat_800ExtraBold,
	Montserrat_900Black,
} from '@expo-google-fonts/montserrat';
import {
	Manrope_300Light,
	Manrope_400Regular,
	Manrope_500Medium,
	Manrope_600SemiBold,
	Manrope_700Bold,
} from '@expo-google-fonts/manrope';

const MainApp = () => {
	let [fontsLoaded, fontError] = useFonts({
		Montserrat_300Light,
		Montserrat_400Regular,
		Montserrat_500Medium,
		Montserrat_600SemiBold,
		Montserrat_700Bold,
		Montserrat_800ExtraBold,
		Montserrat_900Black,
		Manrope_300Light,
		Manrope_400Regular,
		Manrope_500Medium,
		Manrope_600SemiBold,
		Manrope_700Bold,
	});

	if (fontError) {
		console.error('Error loading fonts', fontError);
		return <Text>Error loading fonts.</Text>;
	}

	if (!fontsLoaded) {
		return <Text>Loading...</Text>; // You can replace this with any loading indicator you like
	}

	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<StatusBar style="auto" />
				<AppNavigator />
			</PersistGate>
		</Provider>
	);
};

export default MainApp;
