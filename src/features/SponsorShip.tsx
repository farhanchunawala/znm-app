import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function SponsorShip() {
	return (
		<View style={styles.container}>
			<Text style={styles.partnerHeadText}>
				Our <Text style={{ color: '#EA5A1A' }}>Partners</Text>
			</Text>
			<View horizontal style={styles.partnerNameContainer}>
				<ScrollView horizontal style={styles.upperContainer}>
					<View style={styles.partnerName}>
						<Image
							style={{ width: 57, height: 20 }}
							source={require('../../assets/images/Partner1.png')}
						/>
					</View>
					<View style={styles.partnerName}>
						<Image
							style={{ width: 57, height: 20 }}
							source={require('../../assets/images/Partner1.png')}
						/>
					</View>
					<View style={styles.partnerName}>
						<Image
							style={{ width: 57, height: 20 }}
							source={require('../../assets/images/Partner1.png')}
						/>
					</View>
					<View style={styles.partnerName}>
						<Image
							style={{ width: 57, height: 20 }}
							source={require('../../assets/images/Partner1.png')}
						/>
					</View>
					<View style={styles.partnerName}>
						<Image
							style={{ width: 57, height: 20 }}
							source={require('../../assets/images/Partner1.png')}
						/>
					</View>
					<View style={styles.partnerName}>
						<Image
							style={{ width: 57, height: 20 }}
							source={require('../../assets/images/Partner1.png')}
						/>
					</View>
					<View style={styles.partnerName}>
						<Image
							style={{ width: 57, height: 20 }}
							source={require('../../assets/images/Partner1.png')}
						/>
					</View>
				</ScrollView>
				<ScrollView horizontal style={styles.lowerContainer}>
					<View style={styles.partnerName}>
						<Image
							style={{ width: 57, height: 20 }}
							source={require('../../assets/images/Partner1.png')}
						/>
					</View>
					<View style={styles.partnerName}>
						<Image
							style={{ width: 57, height: 20 }}
							source={require('../../assets/images/Partner1.png')}
						/>
					</View>
					<View style={styles.partnerName}>
						<Image
							style={{ width: 57, height: 20 }}
							source={require('../../assets/images/Partner1.png')}
						/>
					</View>
					<View style={styles.partnerName}>
						<Image
							style={{ width: 57, height: 20 }}
							source={require('../../assets/images/Partner1.png')}
						/>
					</View>
					<View style={styles.partnerName}>
						<Image
							style={{ width: 57, height: 20 }}
							source={require('../../assets/images/Partner1.png')}
						/>
					</View>
					<View style={styles.partnerName}>
						<Image
							style={{ width: 57, height: 20 }}
							source={require('../../assets/images/Partner1.png')}
						/>
					</View>
					<View style={styles.partnerName}>
						<Image
							style={{ width: 57, height: 20 }}
							source={require('../../assets/images/Partner1.png')}
						/>
					</View>
				</ScrollView>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		marginTop: 18,
		paddingVertical: 12,
		// height: 137,
		width: '100%',
		backgroundColor: '#FCC3004D',
		// flexDirection: 'row',
		// justifyContent: 'space-between',
	},
	partnerHeadText: {
		marginLeft: 16,
		fontSize: 14,
		fontWeight: '600',
		fontFamily: 'Manrope_600SemiBold',
	},
	partnerNameContainer: {
		// height: '100%',
		// backgroundColor: 'red',
		width: '100%',
		paddingTop: 12,
		// flexDirection: 'row',
	},
	upperContainer: {
		flexDirection: 'row',
	},
	lowerContainer: {
		flexDirection: 'row',
	},
	partnerName: {
		width: 57,
		height: 36,
		backgroundColor: '#FFFFFF',
		borderRadius: 6,
		// marginHorizontal: 10,
		alignItems: 'center',
		justifyContent: 'center',
		margin: 5,
	},
});
