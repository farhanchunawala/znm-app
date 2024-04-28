import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import * as ImagePicker from 'expo-image-picker';
// import { GestureHandlerRootView } from "react-native-gesture-handler";
// import * as MediaLibrary from 'expo-media-library';
// import { captureRef } from 'react-native-view-shot';
// import domtoimage from 'dom-to-image';

import TabNav from '../../components/TabNav';
import ContactsList from './ContactsList';
import AddButton from '@/src/components/elements/AddButton';

export default function ContactsScreen() {
	const navigation = useNavigation();

	return (
		<View style={styles.main}>
			<ContactsList />
			<AddButton
				styleProps={styles.addButton}
				onPress={() => navigation.navigate('AddContacts')}
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
