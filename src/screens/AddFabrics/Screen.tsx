import { StatusBar } from 'expo-status-bar';
import {
	StyleSheet,
	View,
	Text,
	TextInput,
	ScrollView,
	TouchableOpacity,
} from 'react-native';
import Button from '@/src/components/elements/Button';
import CapsuleButtonStyles from '@/src/components/elements/styles/GoogleContacts/CapsuleButton';

export default function AddFabricsScreen() {
	return (
		<View style={styles.main}>
			<TextInput style={styles.input} placeholder='Enter Brand' />
			<Button
				styles={CapsuleButtonStyles}
				containerStyle={styles.button}
				text="Save"
				onPress={() => navigation.navigate('AddFabrics')}
			/>
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
		padding: 20,
	},
	input: {
		height: 55,
		borderColor: 'hsl(220, 36%, 42%)',
		borderWidth: 1.6,
		borderRadius: 4,
		paddingHorizontal: 16,
		fontSize: 16,
		fontFamily: 'Montserrat_500Medium',
	},
	button: {
		marginLeft: 'auto',
		marginRight: 'auto',
	},
});
