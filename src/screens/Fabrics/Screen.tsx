import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AddButtonStyles from '@/src/styles/google/addButton';
// import * as ImagePicker from 'expo-image-picker';
// import { GestureHandlerRootView } from "react-native-gesture-handler";
// import * as MediaLibrary from 'expo-media-library';
// import { captureRef } from 'react-native-view-shot';
// import domtoimage from 'dom-to-image';

import TabNav from '../../components/TabNav';
import FabricList from './FabricList';
import FabricList2 from './FabricList2';
import Button from '@/src/elements/Button';
import axios from 'axios';
import { useState, useEffect } from 'react';

interface Fabric {
	id: number;
	name: string;
	// Add other properties as per your API response
}

export default function FabricsScreen() {
	const apiUrl = process.env.EXPO_PUBLIC_API_URL;
	const navigation = useNavigation();

	const [fabrics, setFabrics] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get<Fabric[]>(
					`${apiUrl}/api/fabric`,
				);
				setFabrics(response.data); // assuming the data array contains the user data
				setLoading(false);
			} catch (err) {
				setError(err.message);
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	if (loading) {
		return <ActivityIndicator size="large" />;
	}

	if (error) {
		return <Text>Error: {error}</Text>;
	}

	return (
		<View style={styles.main}>
			<FabricList2 items={fabrics} />
			<Button
				styles={AddButtonStyles}
				containerStyle={styles.addButton}
				text="+"
				onPress={() => navigation.navigate('AddFabrics')}
			/>
			<TabNav />
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	main: {
		position: 'relative',
		flex: 1,
		overflow: 'scroll',
		paddingBottom: 83,
		backgroundColor: '#f8f8f8',
	},
	addButton: {
		position: 'absolute',
		bottom: 100,
		right: 24,
		zIndex: 5,
	},
});
