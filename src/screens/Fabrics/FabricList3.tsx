import { useNavigation } from '@react-navigation/native';
import {
	TouchableOpacity,
	StyleSheet,
	Text,
	View,
	Image,
	FlatList,
} from 'react-native';
import * as Contacts from 'expo-contacts';

export default function FabricList({ items }) {
	const navigation = useNavigation();

	const renderItem = ({ item }) => (
		<View style={styles.listItem}>
			<Text style={styles.text}>
				{item._id} {item.brand}
			</Text>
		</View>
	);

	// return (
	// 	<FlatList
	// 		style={styles.main}
	// 		data={items}
	// 		keyExtractor={item => item._id}
	// 		renderItem={renderItem}
	// 	/>
	// );

	return (
		<View style={styles.container}>
			{/* <Text>welcome to fabric ocean</Text> */}
			<View style={styles.header}>
				<Text style={styles.cell}>ID</Text>
				<Text style={styles.cell}>name</Text>
				<Text style={styles.cell}>surname</Text>
				<Text style={styles.cell}>mobile no</Text>
				{/* <Text style={styles.cell}>mobile no</Text> */}
			</View>
			<View style={styles.table}>
				<View style={styles.row}>
					<Text style={styles.cell}>00786</Text>
					<Text style={styles.cell}>furqan</Text>
					<Text style={styles.cell}>chunawala</Text>
					<Text style={styles.cell}>8291782197</Text>
				</View>
				<View style={styles.row}>
					<Text style={styles.cell}>00786</Text>
					<Text style={styles.cell}>furqan</Text>
					<Text style={styles.cell}>chunawala</Text>
					<Text style={styles.cell}>8291782197</Text>
				</View>
			</View>

		</View>
	);
}

// const styles = StyleSheet.create({
// 	main: {
// 		backgroundColor: '#fff',
// 		paddingHorizontal: 24,
// 		paddingTop: 8,
// 		paddingBottom: 16,
// 	},
// 	listItem: {
// 		flexDirection: 'row',
// 		paddingHorizontal: 0,
// 		paddingVertical: 16,
// 		borderBottomColor: '#E5EDEE',
// 		borderBottomWidth: 1,
// 	},
// 	text: {
// 		fontSize: 16,
// 	},
// });

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F9F9F9',
		paddingTop: 32,
	},
	header: {
		height: 34,
		backgroundColor: '#FCC300B2',
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-evenly',
	},
	cell: {},
	table: {
		paddingTop: 8,
	},
	row: {
		height: 34,
		backgroundColor: '#fff',
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		borderRadius: 8,
		marginHorizontal: 16,
		marginVertical: 4,
	},
});
