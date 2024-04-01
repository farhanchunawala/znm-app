import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { Svg, Path } from 'react-native-svg';

export default function UpgradeElite() {
	return (
		<View style={styles.eliteUpgrade}>
			<Text style={styles.eliteUpgradeHead}>Upgrade to Elite</Text>
			<Text style={styles.eliteUpgradeText}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
				vulputate libero et velit interdum, ac aliquet odio mattis.
			</Text>
			<TouchableOpacity style={styles.upgradeButton}>
				<Text style={styles.upgradeButtonText}>Upgrade</Text>
				<Svg
					style={styles.upgradeButtonIcon}
					xmlns="http://www.w3.org/2000/svg"
					width="23"
					height="9"
					viewBox="0 0 23 9"
					fill="none">
					<Path
						d="M22.4243 4.92427C22.6586 4.68995 22.6586 4.31005 22.4243 4.07574L18.6059 0.257361C18.3716 0.0230462 17.9917 0.0230462 17.7574 0.257361C17.523 0.491675 17.523 0.871574 17.7574 1.10589L21.1515 4.5L17.7574 7.89411C17.523 8.12843 17.523 8.50833 17.7574 8.74264C17.9917 8.97696 18.3716 8.97696 18.6059 8.74264L22.4243 4.92427ZM-5.24536e-08 5.1L22 5.1L22 3.9L5.24536e-08 3.9L-5.24536e-08 5.1Z"
						fill="white"
					/>
				</Svg>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	eliteUpgrade: {
		marginHorizontal: 16,
		// marginTop: 18,
		// borderWidth: 1,
		borderRadius: 10,
		backgroundColor: '#fff',
		paddingVertical: 12,
		paddingHorizontal: 14,
	},
	eliteUpgradeHead: {
		marginBottom: 10,
		color: '#252525',
		fontFamily: 'Manrope_600SemiBold',
		fontSize: 16,
		fontWeight: '600',
	},
	eliteUpgradeText: {
		marginBottom: 12,
		color: '#575757',
		fontFamily: 'Montserrat_400Regular',
		fontSize: 11,
		// fontWeight: '400',
	},
	upgradeButton: {
		borderRadius: 6,
		height: 35,
		width: '100%',
		backgroundColor: '#0D0C22',
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
		// paddingVertical: 10,
		paddingLeft: 14,
		paddingRight: 14,
	},
	upgradeButtonText: {
		color: '#ffffff',
		fontFamily: 'Montserrat_600SemiBold',
		fontSize: 12,
		// fontWeight: '600',
		flex: 1,
	},
	upgradeButtonIcon: {
		flexDirection: 'column',
		// left: '80%',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 3,
	},
});
