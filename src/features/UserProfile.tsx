import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Svg, Path, Rect } from 'react-native-svg';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
// import * as ImagePicker from 'expo-image-picker';
// import { GestureHandlerRootView } from "react-native-gesture-handler";
// import * as MediaLibrary from 'expo-media-library';
// import { captureRef } from 'react-native-view-shot';
// import domtoimage from 'dom-to-image';

export default function App() {
	const [experts, setExperts] = useState([]);
	const navigation = useNavigation();

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		try {
			const response = await axios.get(
				'https://www.cancermitr.com/getExpertsList',
			);
			setExperts(response.data);
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	};

	return (
		<View style={styles.container}>
			<View style={styles.box} />
			{/* <Image source={ require('./assets/images/profile_icon.png') } /> */}
			<View style={styles.profile}>
				<Text style={styles.name}>Aditya Prajapati</Text>
				<Text style={styles.memberType}>prime card member</Text>
				<TouchableOpacity style={styles.upgradeButton}>
					<Text style={styles.upgradeButtonText}>
						Upgrade Your Plan
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.menuButton}
					onPress={() => navigation.navigate('ProfileEdit')}>
					<Svg
						style={styles.menuIcon}
						width="26"
						height="26"
						viewBox="0 0 26 26"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<Rect
							width="26"
							height="26"
							rx="13"
							fill="#FCC300"
							fill-opacity="0.4"
						/>
						<Path
							d="M13.1065 12.7466C13.0865 12.7466 13.0731 12.7466 13.0531 12.7466C13.0198 12.74 12.9731 12.74 12.9331 12.7466C10.9998 12.6866 9.53979 11.1666 9.53979 9.29331C9.53979 7.38665 11.0931 5.83331 12.9998 5.83331C14.9065 5.83331 16.4598 7.38665 16.4598 9.29331C16.4531 11.1666 14.9865 12.6866 13.1265 12.7466C13.1198 12.7466 13.1131 12.7466 13.1065 12.7466ZM12.9998 6.83331C11.6465 6.83331 10.5398 7.93998 10.5398 9.29331C10.5398 10.6266 11.5798 11.7 12.9065 11.7466C12.9398 11.74 13.0331 11.74 13.1198 11.7466C14.4265 11.6866 15.4531 10.6133 15.4598 9.29331C15.4598 7.93998 14.3531 6.83331 12.9998 6.83331Z"
							fill="#252525"
						/>
						<Path
							d="M13.1131 20.0334C11.8064 20.0334 10.4931 19.7 9.49974 19.0334C8.57307 18.42 8.06641 17.58 8.06641 16.6667C8.06641 15.7534 8.57307 14.9067 9.49974 14.2867C11.4997 12.96 14.7397 12.96 16.7264 14.2867C17.6464 14.9 18.1597 15.74 18.1597 16.6534C18.1597 17.5667 17.6531 18.4134 16.7264 19.0334C15.7264 19.7 14.4197 20.0334 13.1131 20.0334ZM10.0531 15.1267C9.41307 15.5534 9.06641 16.1 9.06641 16.6734C9.06641 17.24 9.41974 17.7867 10.0531 18.2067C11.7131 19.32 14.5131 19.32 16.1731 18.2067C16.8131 17.78 17.1597 17.2334 17.1597 16.66C17.1597 16.0934 16.8064 15.5467 16.1731 15.1267C14.5131 14.02 11.7131 14.02 10.0531 15.1267Z"
							fill="#252525"
						/>
					</Svg>
					<Text style={styles.menuText}>Your Profile</Text>
					<Svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<Path
							d="M8.9101 20.67C8.7201 20.67 8.5301 20.6 8.3801 20.45C8.0901 20.16 8.0901 19.68 8.3801 19.39L14.9001 12.87C15.3801 12.39 15.3801 11.61 14.9001 11.13L8.3801 4.61002C8.0901 4.32002 8.0901 3.84002 8.3801 3.55002C8.6701 3.26002 9.1501 3.26002 9.4401 3.55002L15.9601 10.07C16.4701 10.58 16.7601 11.27 16.7601 12C16.7601 12.73 16.4801 13.42 15.9601 13.93L9.4401 20.45C9.2901 20.59 9.1001 20.67 8.9101 20.67Z"
							fill="#454545"
						/>
					</Svg>
				</TouchableOpacity>
				<TouchableOpacity style={styles.menuButton}>
					<Svg
						style={styles.menuIcon}
						width="26"
						height="26"
						viewBox="0 0 26 26"
						fill="none"
						xmlns="http://www.w3.org/2000/Svg">
						<Rect
							width="26"
							height="26"
							rx="13"
							fill="#FCC300"
							fill-opacity="0.4"
						/>
						<Path
							d="M6.27502 15.8583C6.11668 15.8583 5.95835 15.8 5.83335 15.675C5.59168 15.4333 5.59168 15.0333 5.83335 14.7917L15.7917 4.83335C16.0333 4.59168 16.4333 4.59168 16.675 4.83335C16.9167 5.07502 16.9167 5.47502 16.675 5.71668L6.71668 15.6833C6.60002 15.8 6.43335 15.8583 6.27502 15.8583Z"
							fill="#252525"
						/>
						<Path
							d="M12.2501 17.8583C12.0918 17.8583 11.9334 17.8 11.8084 17.675C11.5668 17.4333 11.5668 17.0333 11.8084 16.7917L12.8084 15.7917C13.0501 15.55 13.4501 15.55 13.6918 15.7917C13.9334 16.0333 13.9334 16.4333 13.6918 16.675L12.6918 17.675C12.5751 17.7917 12.4168 17.8583 12.2501 17.8583Z"
							fill="#252525"
						/>
						<Path
							d="M14.4916 15.6167C14.3332 15.6167 14.1749 15.5583 14.0499 15.4333C13.8082 15.1917 13.8082 14.7917 14.0499 14.55L16.0416 12.5583C16.2832 12.3167 16.6832 12.3167 16.9249 12.5583C17.1666 12.8 17.1666 13.2 16.9249 13.4417L14.9332 15.4333C14.8166 15.55 14.6499 15.6167 14.4916 15.6167Z"
							fill="#252525"
						/>
						<Path
							d="M12.2501 20.9584C11.4334 20.9584 10.6168 20.4584 9.62509 19.4667L5.53342 15.375C3.54176 13.3834 3.55009 12.1 5.55842 10.0917L11.0918 4.55836C13.1001 2.55003 14.3834 2.5417 16.3751 4.53336L20.4668 8.62503C22.4584 10.6167 22.4501 11.9 20.4418 13.9084L14.9084 19.4417C13.9001 20.45 13.0751 20.9584 12.2501 20.9584ZM13.7501 4.2917C13.3168 4.2917 12.7668 4.65003 11.9751 5.4417L6.44176 10.975C5.65009 11.7667 5.29176 12.3167 5.29176 12.7417C5.29176 13.175 5.62509 13.7 6.41676 14.4917L10.5084 18.5834C11.3001 19.375 11.8168 19.7084 12.2501 19.7084C12.2501 19.7084 12.2501 19.7084 12.2584 19.7084C12.6918 19.7084 13.2334 19.35 14.0251 18.5584L19.5584 13.025C20.3501 12.2334 20.7084 11.6834 20.7084 11.2584C20.7084 10.825 20.3751 10.3 19.5834 9.50836L15.4918 5.4167C14.7084 4.62503 14.1834 4.2917 13.7501 4.2917Z"
							fill="#252525"
						/>
						<Path
							d="M21.3334 20.9583H4.66675C4.32508 20.9583 4.04175 20.675 4.04175 20.3333C4.04175 19.9916 4.32508 19.7083 4.66675 19.7083H21.3334C21.6751 19.7083 21.9584 19.9916 21.9584 20.3333C21.9584 20.675 21.6751 20.9583 21.3334 20.9583Z"
							fill="#252525"
						/>
					</Svg>
					<Text style={styles.menuText}>Smart Card Details</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.menuButton}>
					<Svg
						style={styles.menuIcon}
						width="26"
						height="26"
						viewBox="0 0 26 26"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<Rect
							width="26"
							height="26"
							rx="13"
							fill="#FCC300"
							fill-opacity="0.4"
						/>
						<Path
							d="M15.25 21.0625H10.75C6.6775 21.0625 4.9375 19.3225 4.9375 15.25V10.75C4.9375 6.6775 6.6775 4.9375 10.75 4.9375H14.5C14.8075 4.9375 15.0625 5.1925 15.0625 5.5C15.0625 5.8075 14.8075 6.0625 14.5 6.0625H10.75C7.2925 6.0625 6.0625 7.2925 6.0625 10.75V15.25C6.0625 18.7075 7.2925 19.9375 10.75 19.9375H15.25C18.7075 19.9375 19.9375 18.7075 19.9375 15.25V11.5C19.9375 11.1925 20.1925 10.9375 20.5 10.9375C20.8075 10.9375 21.0625 11.1925 21.0625 11.5V15.25C21.0625 19.3225 19.3225 21.0625 15.25 21.0625Z"
							fill="#252525"
						/>
						<Path
							d="M20.5 12.0625H17.5C14.935 12.0625 13.9375 11.065 13.9375 8.49999V5.49999C13.9375 5.27499 14.0725 5.06499 14.2825 4.98249C14.4925 4.89249 14.7325 4.94499 14.8975 5.10249L20.8975 11.1025C21.055 11.26 21.1075 11.5075 21.0175 11.7175C20.9275 11.9275 20.725 12.0625 20.5 12.0625ZM15.0625 6.85749V8.49999C15.0625 10.435 15.565 10.9375 17.5 10.9375H19.1425L15.0625 6.85749Z"
							fill="#252525"
						/>
						<Path
							d="M13.75 14.3125H9.25C8.9425 14.3125 8.6875 14.0575 8.6875 13.75C8.6875 13.4425 8.9425 13.1875 9.25 13.1875H13.75C14.0575 13.1875 14.3125 13.4425 14.3125 13.75C14.3125 14.0575 14.0575 14.3125 13.75 14.3125Z"
							fill="#252525"
						/>
						<Path
							d="M12.25 17.3125H9.25C8.9425 17.3125 8.6875 17.0575 8.6875 16.75C8.6875 16.4425 8.9425 16.1875 9.25 16.1875H12.25C12.5575 16.1875 12.8125 16.4425 12.8125 16.75C12.8125 17.0575 12.5575 17.3125 12.25 17.3125Z"
							fill="#252525"
						/>
					</Svg>
					<Text style={styles.menuText}>Medical History</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.menuButton}>
					<Svg
						style={styles.menuIcon}
						width="26"
						height="26"
						viewBox="0 0 26 26"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<Rect
							width="26"
							height="26"
							rx="13"
							fill="#FCC300"
							fill-opacity="0.4"
						/>
						<Path
							d="M13.0001 21.0625C12.4151 21.0625 11.8451 20.7625 11.4551 20.2375L10.6976 19.225C10.5401 19.015 10.3301 18.895 10.1051 18.88C9.88013 18.8725 9.65514 18.97 9.47514 19.1575L9.06263 18.775L9.47514 19.1575C8.39514 20.3125 7.56263 20.2225 7.16513 20.065C6.76013 19.9075 6.07764 19.39 6.07764 17.725V9.28C6.07764 5.95 7.03764 4.9375 10.1801 4.9375H15.8501C18.9926 4.9375 19.9526 5.95 19.9526 9.28V17.725C19.9526 19.3825 19.2701 19.9 18.8651 20.065C18.4676 20.2225 17.6426 20.3125 16.5551 19.1575C16.3751 18.9625 16.1501 18.865 15.9176 18.88C15.6926 18.895 15.4751 19.015 15.3176 19.225L14.5601 20.2375C14.1551 20.7625 13.5851 21.0625 13.0001 21.0625ZM10.0601 17.7475C10.0901 17.7475 10.1276 17.7475 10.1576 17.7475C10.7126 17.7775 11.2376 18.07 11.5901 18.5425L12.3476 19.555C12.7151 20.0425 13.2776 20.0425 13.6451 19.555L14.4026 18.5425C14.7626 18.07 15.2801 17.7775 15.8426 17.7475C16.4051 17.7175 16.9526 17.95 17.3576 18.385C17.9276 18.9925 18.2951 19.0675 18.4301 19.015C18.6101 18.94 18.8051 18.505 18.8051 17.725V9.28C18.8051 6.5725 18.3326 6.0625 15.8276 6.0625H10.1576C7.65264 6.0625 7.18014 6.5725 7.18014 9.28V17.725C7.18014 18.5125 7.37514 18.9475 7.55514 19.015C7.68264 19.0675 8.05763 18.9925 8.62763 18.385C9.04013 17.9725 9.54263 17.7475 10.0601 17.7475Z"
							fill="#252525"
						/>
						<Path
							d="M15.0625 12.0625H10.9375C10.63 12.0625 10.375 11.8075 10.375 11.5C10.375 11.1925 10.63 10.9375 10.9375 10.9375H15.0625C15.37 10.9375 15.625 11.1925 15.625 11.5C15.625 11.8075 15.37 12.0625 15.0625 12.0625Z"
							fill="#252525"
						/>
					</Svg>
					<Text style={styles.menuText}>Invoices</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.menuButton}>
					<Svg
						style={styles.menuIcon}
						width="26"
						height="26"
						viewBox="0 0 26 26"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<Rect width="26" height="26" rx="13" fill="#DBE1E5" />
						<Path
							d="M17.5333 15.8083C17.375 15.8083 17.2167 15.75 17.0917 15.625C16.85 15.3833 16.85 14.9833 17.0917 14.7417L18.7833 13.05L17.0917 11.3583C16.85 11.1167 16.85 10.7167 17.0917 10.475C17.3333 10.2333 17.7333 10.2333 17.975 10.475L20.1083 12.6083C20.35 12.85 20.35 13.25 20.1083 13.4917L17.975 15.625C17.85 15.75 17.6917 15.8083 17.5333 15.8083Z"
							fill="#454545"
						/>
						<Path
							d="M19.6083 13.675H11.1333C10.7916 13.675 10.5083 13.3917 10.5083 13.05C10.5083 12.7083 10.7916 12.425 11.1333 12.425H19.6083C19.95 12.425 20.2333 12.7083 20.2333 13.05C20.2333 13.3917 19.95 13.675 19.6083 13.675Z"
							fill="#454545"
						/>
						<Path
							d="M12.8 20.2916C8.5083 20.2916 5.5083 17.2916 5.5083 13C5.5083 8.70831 8.5083 5.70831 12.8 5.70831C13.1416 5.70831 13.425 5.99165 13.425 6.33331C13.425 6.67498 13.1416 6.95831 12.8 6.95831C9.24163 6.95831 6.7583 9.44165 6.7583 13C6.7583 16.5583 9.24163 19.0416 12.8 19.0416C13.1416 19.0416 13.425 19.325 13.425 19.6666C13.425 20.0083 13.1416 20.2916 12.8 20.2916Z"
							fill="#454545"
						/>
					</Svg>
					<Text style={styles.menuText}>Log Out</Text>
				</TouchableOpacity>
			</View>

			{/* <Text>Expert List:</Text>
			{experts.map((expert, index) => (
				<Text key={index}>{expert.name}</Text>
			))} */}
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f8f8f8',
		paddingTop: 34,
		height: '100%',
		width: '100%',
		// alignItems: 'center',
		// justifyContent: 'center',
	},
	box: {
		width: '100%',
		height: 103,
		flexShrink: 0,
		backgroundColor: '#E5EDEE',
	},
	profile: {
		paddingLeft: 16,
		paddingRight: 16,
		// flex: 1,
		// justifyContent: 'center',
	},
	name: {
		textAlign: 'center',
		fontSize: 16,
		fontFamily: 'Manrope_500Medium',
		fontWeight: '500',
	},
	memberType: {
		color: '#2D255E',
		fontFamily: 'Manrope_500Medium',
		fontWeight: '500',
		textAlign: 'center',
		fontSize: 10,
	},
	upgradeButton: {
		borderRadius: 6,
		height: 39,
		backgroundColor: '#0D0C22',
		alignItems: 'center',
		paddingVertical: 10,
		justifyContent: 'center',
		marginBottom: 24,
	},
	upgradeButtonText: {
		color: '#FFFFFF',
		fontSize: 14,
		fontWeight: '700',
		fontFamily: 'Manrope_700Bold',
	},
	menuButton: {
		borderRadius: 6,
		height: 46,
		backgroundColor: '#ffffff',
		paddingHorizontal: 10,
		paddingVertical: 10,
		// justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 6,
		flexDirection: 'row',
	},
	menuIcon: {
		marginRight: 12,
	},
	menuText: {
		color: '#252525',
		fontSize: 12,
		fontWeight: '500',
		fontFamily: 'Manrope_500Medium',
		textAlign: 'center',
		flexDirection: 'row',
		// marginLeft: 48,
		// alignItems: 'center',
		// justifyContent: 'center',
	},
});
