import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
// import { GestureHandlerRootView } from "react-native-gesture-handler";
// import * as MediaLibrary from 'expo-media-library';
// import { captureRef } from 'react-native-view-shot';
// import domtoimage from 'dom-to-image';

import Header from '../components/Header';
import TabNav from '../components/TabNav';
import WorkInProgress from '../features/WorkInProgress';

export default function HealthLockerScreen() {
	return (
		<View style={styles.main}>
			<ScrollView>
				<Header />
				<WorkInProgress />
			</ScrollView>
			<TabNav />
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	main: {
		flex: 1,
		paddingTop: 34,
		overflow: 'scroll',
		backgroundColor: '#F8F8F8',
		height: '100%',
	},
});
