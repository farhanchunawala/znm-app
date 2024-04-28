import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import { Svg, Path, G, Defs, ClipPath, Rect } from 'react-native-svg';

export default function Header() {
	return (
		<View style={styles.container}>
			{/* <TouchableOpacity>
				<Svg
					style={styles.menu}
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none">
					<Path
						d="M4 17H20"
						stroke="#0D0C22"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<Path
						d="M4 12H20"
						stroke="#0D0C22"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<Path
						d="M4 7H20"
						stroke="#0D0C22"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</Svg>
			</TouchableOpacity> */}
			{/* <Text style={styles.title}>Zoll & Meter</Text> */}
			{/* <TouchableOpacity>
				<Svg
					width="20"
					height="20"
					viewBox="0 0 20 20"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<G id="vuesax/outline/notification">
						<G id="notification">
							<Path
								id="Vector"
								d="M10.0167 17.1083C8.07505 17.1083 6.13339 16.8 4.29172 16.1833C3.59172 15.9417 3.05839 15.45 2.82505 14.8083C2.58339 14.1667 2.66672 13.4583 3.05005 12.825L4.00839 11.2333C4.20839 10.9 4.39172 10.2333 4.39172 9.84165V7.43332C4.39172 4.33332 6.91672 1.80832 10.0167 1.80832C13.1167 1.80832 15.6417 4.33332 15.6417 7.43332V9.84165C15.6417 10.225 15.8251 10.9 16.0251 11.2417L16.9751 12.825C17.3334 13.425 17.4001 14.15 17.1584 14.8083C16.9167 15.4667 16.3917 15.9667 15.7334 16.1833C13.9001 16.8 11.9584 17.1083 10.0167 17.1083ZM10.0167 3.05832C7.60839 3.05832 5.64172 5.01665 5.64172 7.43332V9.84165C5.64172 10.45 5.39172 11.35 5.08339 11.875L4.12505 13.4667C3.94172 13.775 3.89172 14.1 4.00005 14.375C4.10005 14.6583 4.35005 14.875 4.69172 14.9917C8.17505 16.1583 11.8667 16.1583 15.3501 14.9917C15.6501 14.8917 15.8834 14.6667 15.9917 14.3667C16.1001 14.0667 16.0751 13.7417 15.9084 13.4667L14.9501 11.875C14.6334 11.3333 14.3917 10.4417 14.3917 9.83332V7.43332C14.3917 5.01665 12.4334 3.05832 10.0167 3.05832Z"
								fill="#454545"
							/>
							<Path
								id="Vector_2"
								d="M11.5666 3.28334C11.5083 3.28334 11.4499 3.275 11.3916 3.25834C11.1499 3.19167 10.9166 3.14167 10.6916 3.10834C9.98327 3.01667 9.29993 3.06667 8.65827 3.25834C8.42493 3.33334 8.17493 3.25834 8.0166 3.08334C7.85827 2.90834 7.80827 2.65834 7.89993 2.43334C8.2416 1.55834 9.07493 0.983337 10.0249 0.983337C10.9749 0.983337 11.8083 1.55 12.1499 2.43334C12.2333 2.65834 12.1916 2.90834 12.0333 3.08334C11.9083 3.21667 11.7333 3.28334 11.5666 3.28334Z"
								fill="#454545"
							/>
							<Path
								id="Vector_3"
								d="M10.0166 19.0083C9.1916 19.0083 8.3916 18.675 7.80827 18.0917C7.22493 17.5083 6.8916 16.7083 6.8916 15.8833H8.1416C8.1416 16.375 8.3416 16.8583 8.6916 17.2083C9.0416 17.5583 9.52494 17.7583 10.0166 17.7583C11.0499 17.7583 11.8916 16.9167 11.8916 15.8833H13.1416C13.1416 17.6083 11.7416 19.0083 10.0166 19.0083Z"
								fill="#454545"
							/>
						</G>
					</G>
				</Svg>
			</TouchableOpacity> */}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		height: 52,
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'center',
		// justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: 16,
	},
	title: {
		fontFamily: 'Montserrat_600SemiBold',
		fontSize: 20,
	},
});
