import { useNavigation } from '@react-navigation/native';
import {
	TouchableOpacity,
	StyleSheet,
	Text,
	View,
	Image,
	ActivityIndicator,
	FlatList,
} from 'react-native';
import { Svg, Path } from 'react-native-svg';
import * as Contacts from 'expo-contacts';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ProfileDashboard() {
	const navigation = useNavigation();

	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					// 'http://192.168.194.86:3000/api/user',
					'http://192.168.1.47:3000/api/user',
				);
				setUsers(response.data); // assuming the data array contains the user data
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

	const renderItem = ({ item }) => (
		<View style={styles.listItem}>
			<Text style={styles.name}>
				User Name: {item.name ? item.name.firstName : item.firstName}
			</Text>
		</View>
	);

	return (
		<View style={styles.main}>
			<FlatList
				style={styles.list}
				data={users}
				keyExtractor={item => item._id}
				renderItem={renderItem}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	main: {
		backgroundColor: '#fff',
	},
	list: {
		paddingHorizontal: 24,
		paddingTop: 8,
		paddingBottom: 16,
	},
	listItem: {
		flexDirection: 'row',
		paddingHorizontal: 0,
		paddingVertical: 16,
		borderBottomColor: '#E5EDEE',
		borderBottomWidth: 1,
	},
	id: {
		fontSize: 16,
	},
	name: {
		fontSize: 16,
	},
});
