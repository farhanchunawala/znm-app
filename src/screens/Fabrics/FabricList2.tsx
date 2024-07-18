import { useNavigation } from '@react-navigation/native';
import {
	TouchableOpacity,
	StyleSheet,
	Text,
	View,
	Image,
	FlatList,
	ListRenderItem,
} from 'react-native';
import * as Contacts from 'expo-contacts';
import { MaterialIcons } from '@expo/vector-icons';

interface FabricItem {
	_id: string;
	fabricId: string;
	name?: {
		brand: string;
	};
}

interface FabricListProps {
	items: FabricItem[];
}

const FabricList: React.FC<FabricListProps> = ({ items }) => {
	const navigation = useNavigation();

	const renderItem: ListRenderItem<FabricItem> = ({ item }) => (
		<View style={styles.row}>
			<Text style={styles.cell}>{item.fabricId}</Text>
			<Text style={styles.cell}>{item.name?.brand}</Text>
			<MaterialIcons name="edit" size={20} color="black" />
			<MaterialIcons name="delete" size={20} color="black" />
		</View>
	);

	return (
		<>
			{/* <View style={styles.header}>
				<Text style={styles.cell}>ID</Text>
				<Text style={styles.cell}>name</Text>
				<Text style={styles.cell}>surname</Text>
				<Text style={styles.cell}>mobile no</Text>
			</View> */}
			<FlatList
				style={styles.table}
				data={items}
				keyExtractor={item => item._id}
				renderItem={renderItem}
			/>
		</>
	);
};

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
	// icon: {
	// 	borderColor: 'black',
	// 	borderWidth: 1,
	// 	borderRadius: 4,
	// 	padding: 4,
	// },
});

export default FabricList;
