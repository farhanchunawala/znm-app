import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/app/store';
import { StatusBar } from 'expo-status-bar';
import AppNavigator from './src/AppNavigator';

const MainApp = () => (
	<Provider store={store}>
		<StatusBar style="auto" />
		<AppNavigator />
	</Provider>
);

export default MainApp;
