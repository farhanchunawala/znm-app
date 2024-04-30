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
			<Text style={styles.text}>Brand: {item.brand}</Text>
		</View>
	);

	return (
		<FlatList
			style={styles.main}
			data={items}
			keyExtractor={item => item._id}
			renderItem={renderItem}
		/>
	);
}

const styles = StyleSheet.create({
	main: {
		backgroundColor: '#fff',
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
	text: {
		fontSize: 16,
	},
});
