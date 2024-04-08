import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
// import { GestureHandlerRootView } from "react-native-gesture-handler";
// import * as MediaLibrary from 'expo-media-library';
// import { captureRef } from 'react-native-view-shot';
// import domtoimage from 'dom-to-image';

import TabNav from '../features/TabNav';
import ProfileDashboard from '../features/ProfileDashboard';
import Categories from '../features/Categories';
import PrimeCards from '../features/PrimeCards';
import OffersDashboard from '../features/OffersDashboard';
import DietPlan from '../features/DietPlan';
import UpgradeElite from '../features/UpgradeElite';
import Disclaimer from '../features/Disclaimer';
import SponsorShip from '../features/SponsorShip';

export default function HomeScreen() {
	return (
		<View style={styles.main}>
			<ScrollView>
				<ProfileDashboard />
				<Categories />
				<PrimeCards />
				<OffersDashboard />
				<DietPlan />
				<UpgradeElite />
				<SponsorShip />
				<Disclaimer />
			</ScrollView>
			<TabNav />
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	main: {
		flex: 1,
		overflow: 'scroll',
		paddingBottom: 83,
		backgroundColor: '#f8f8f8',
	},
});
