import { TouchableOpacity, StyleSheet, Text, View, Image } from 'react-native';

export default function DietPlan() {
	return (
		<View style={styles.container}>
			<Image
				style={styles.dietImage}
				source={require('../../assets/images/diet_plan.png')}
			/>
			<View style={styles.text}>
				<Text style={styles.dietHead}>
					1 month Diet Program for Cancer Patients!
				</Text>
				{/* <H3>1 month Diet Program for Cancer Patients!</H3> */}
				<Text style={styles.dietText}>
					Fuel your good cells with super foods to fight the bad ones
				</Text>
				{/* <Image style={styles.dietImage} source={require('../assets/images/diet_plan2.png')} /> */}
				<TouchableOpacity style={styles.applyButton}>
					<Text style={styles.applyButtonText}>Apply Now</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		// height: 192,
		// overflow: 'scroll',
		backgroundColor: '#F8F8F8',
		height: 192,
		paddingHorizontal: 16,
		width: '100%',
		paddingVertical: 18,
		// flex: 1,
		// flexDirection: 'row',
		// justifyContent: 'center',
		// alignItems: 'center',
	},
	dietImage: {
		// objectFit: 'fill',
		width: '100%',
		// height: '100%',
		resizeMode: 'cover',
		// objectFit: 'contain',
		// overflow: 'visible',
	},
	text: {
		position: 'absolute',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		left: 26,
		height: 192,
	},
	dietHead: {
		fontSize: 12,
		fontFamily: 'Manrope_700Bold',
		paddingBottom: 4,
		fontWeight: '700',
		color: '#252525',
	},
	dietText: {
		fontSize: 11,
		width: '60%',
		fontFamily: 'Manrope_400Regular',
		fontWeight: '400',
		color: '#252525',
	},
	applyButton: {
		height: 35,
		width: 120,
		backgroundColor: '#EA5A1A',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 4,
		marginTop: 16,
	},
	applyButtonText: {
		color: '#FFFFFF',
		fontFamily: 'Manrope_600SemiBold',
		fontSize: 12,
		fontWeight: '600',
	},
});
