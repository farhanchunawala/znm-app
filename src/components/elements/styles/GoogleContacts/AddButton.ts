import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		width: 54,
		height: 54,
		backgroundColor: 'hsl(209, 100%, 93%)',
		borderColor: '#EA5A1A',
		borderRadius: 15,
		shadowColor: '#000', // Black color
		shadowOffset: { width: 0, height: 10 }, // 0px horizontal, 10px vertical
		shadowOpacity: 0.1, // 10% opacity
		shadowRadius: 10, // 10px blur radius
		elevation: 15, // Elevation for Android
	},
	text: {
		fontFamily: 'Montserrat_400Regular',
		fontSize: 32,
		color: '#242424',
	},
});
