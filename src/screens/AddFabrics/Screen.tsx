import { StatusBar } from 'expo-status-bar';
import {
	StyleSheet,
	View,
	Text,
	TextInput,
	ScrollView,
	TouchableOpacity,
	FlatList,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button from '@/src/elements/Button';
import InputBoxStyles from '@/src/styles/google/inputBox';
import CapsuleButtonStyles from '@/src/styles/google/capsuleButton';
import globalStyles from '@/src/styles/globalStyles';
import { useState } from 'react';
import axios from 'axios';

export default function AddFabricsScreen() {
	const [brand, setBrand] = useState('');
	const apiUrl = process.env.EXPO_PUBLIC_API_URL;
	const navigation = useNavigation();

	const saveFabric = async () => {
		try {
			const response = await axios.post(apiUrl + '/api/fabric/upsert', {
				brand,
			});
			if (response.data.success) {
				console.log(response.data.message);
				navigation.goBack();
			}
		} catch (error) {
			console.error(error);
			this.errored = true;
		} finally {
			this.loading = false;
		}
	};

	const renderItemSeparator = () => {
		return <View style={styles.separator} />;
	};

	const renderItem = ({ item }) => (
		<View style={styles.row}>
			<Text style={styles.placeholder}>Brand</Text>
			<TextInput
				style={styles.input}
				placeholder="Enter Brand"
				value={brand}
				onChangeText={setBrand}
			/>
		</View>
	);

	return (
		<View style={styles.main}>
			<View>
				<FlatList
					style={styles.container}
					data={[{ _id: '1' }]}
					keyExtractor={item => item._id}
					renderItem={renderItem}
					ItemSeparatorComponent={renderItemSeparator}
				/>
			</View>
			<View style={[globalStyles.footer, styles.footer]}>
				<TouchableOpacity onPress={() => navigation.goBack()}>
					<Text style={styles.footerText}>Cancel</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={saveFabric}>
					<Text style={styles.footerText}>Save</Text>
				</TouchableOpacity>
			</View>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	main: {
		flex: 1,
		position: 'relative',
		overflow: 'scroll',
		paddingBottom: 83,
		backgroundColor: '#f8f8f8',
		paddingVertical: 20,
	},
	container: {
		backgroundColor: '#fff',
		borderRadius: 20,
		paddingHorizontal: 20,
		paddingVertical: 10,
		marginHorizontal: 10,
		marginVertical: 5,
	},
	row: {
		paddingVertical: 10,
	},
	placeholder: {
		fontFamily: 'Montserrat_500Medium',
		fontSize: 12,
		color: '#999',
	},
	input: {
		fontFamily: 'Montserrat_500Medium',
		fontSize: 16,
	},
	separator: {
		height: 1,
		backgroundColor: '#eee',
		width: '100%',
	},
	footer: {
		height: 54,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
	},
	footerText: {
		fontFamily: 'Montserrat_600SemiBold',
		fontSize: 16,
	},
});
