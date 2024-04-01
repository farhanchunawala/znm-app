import { StyleSheet, Text, View } from 'react-native';

export default function Disclaimer() {
	return (
		<View style={styles.disclaimer}>
			<Text style={styles.disclaimerHead}>Disclaimers</Text>
			<Text style={styles.disclaimerText}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
				eiusmod tempor incididunt ut labore et dolore magna aliqua.
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	disclaimer: {
		marginVertical: 10,
		paddingHorizontal: 26,
		paddingBottom: 14,
		paddingTop: 20,
		height: 93,
		backgroundColor: '#fff',
	},
	disclaimerHead: {
		color: '#EA5A1A',
		fontFamily: 'Manrope_600SemiBold',
		fontSize: 14,
		fontWeight: '600',
		marginBottom: 4,
	},
	disclaimerText: {
		color: '#454545',
		fontFamily: 'Montserrat_400Regular',
		fontSize: 10,
	},
});
