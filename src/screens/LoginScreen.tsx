import {
	TouchableOpacity,
	StyleSheet,
	TextInput,
	Text,
	View,
	Image,
} from 'react-native';
import axios from 'axios';
import { Svg, Path } from 'react-native-svg';

export default function LoginScreen() {
	const otpLogin = async () => {
		try {
			const response = await axios.post(
				'https://www.cancermitr.com/api/v1/cm_otp_login',
				{
					email_mobile: 9769735377,
					termsOfUse: true,
				},
			);

			if (response.data.type === 'success') {
				console.log('OTP sent successfully');
				// You can navigate to another screen or update the state here
			} else {
				// Handle the case where the OTP is not sent
				console.log('OTP failed:', response.data.message);
			}
		} catch (error) {
			console.error('OTP error:', error);
			// Handle any errors that occur during the HTTP request
		}
	};

	const otpVerify = async () => {
		try {
			const response = await axios.post(
				'https://www.cancermitr.com/api/v1/cm_loginotpverify',
				{
					to_mobilecm: '9769735377',
					otp1: '0',
					otp2: '7',
					otp3: '0',
					otp4: '6',
					otp5: '0',
					otp6: '6',
				},
			);

			if (response.data.type === 'success') {
				console.log('Login successful');
				// You can navigate to another screen or update the state here
			} else {
				// Handle the case where the login is not successful
				console.log('Login failed:', response.data.message);
			}
		} catch (error) {
			console.error('Login error:', error);
			// Handle any errors that occur during the HTTP request
		}
	};

	return (
		<View style={styles.container}>
			<View style={styles.card}>
				<TouchableOpacity>
					<Svg
						style={styles.cancel}
						width="20"
						height="20"
						viewBox="0 0 20 20"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<Path
							d="M15.589 5.58904L14.4106 4.41071L9.99981 8.82154L5.58898 4.41071L4.41064 5.58904L8.82148 9.99987L4.41064 14.4107L5.58898 15.589L9.99981 11.1782L14.4106 15.589L15.589 14.4107L11.1781 9.99987L15.589 5.58904Z"
							fill="#656565"
						/>
					</Svg>
				</TouchableOpacity>
				<Image
					style={styles.logo}
					source={require('../../assets/images/cm_logo3.png')}
				/>
				<Text style={styles.welcome}>Welcome to CancerMitr</Text>
				{/* <Text style={styles.welcome}>Confirm Contact Number</Text> */}
				{/* <Text style={styles.code}>
					Enter the code we&apos;ve sent via SMS to +91 7506904997
				</Text> */}
				<TextInput
					style={styles.input}
					placeholder="Mobile No."
					keyboardType="phone-pad"
				/>
				{/* <View style={styles.otpInputContainer}>
					<TextInput
						style={styles.otpInput}
						placeholder=" "
						keyboardType="phone-pad"
					/>
					<TextInput
						style={styles.otpInput}
						placeholder=" "
						keyboardType="phone-pad"
					/>
					<TextInput
						style={styles.otpInput}
						placeholder=" "
						keyboardType="phone-pad"
					/>
					<TextInput
						style={styles.otpInput}
						placeholder=" "
						keyboardType="phone-pad"
					/>
					<TextInput
						style={styles.otpInput}
						placeholder=" "
						keyboardType="phone-pad"
					/>
					<TextInput
						style={styles.otpInput}
						placeholder=" "
						keyboardType="phone-pad"
					/>
				</View> */}
				<Text style={styles.policy}>
					I agree to CancerMitr&apos;s Terms and Conditions and
					Privacy Policy.
				</Text>
				{/* <Text style={styles.policy}>
					Haven&apos;t received a code? Resend OTP
				</Text> */}
				<TouchableOpacity onPress={otpLogin} style={styles.logInButton}>
					<Text style={styles.logInText}>Log In</Text>
					{/* <Text style={styles.logInText}>Submit</Text> */}
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingTop: 31,
		marginHorizontal: 21,
		marginTop: 225,
	},
	card: {
		paddingTop: 14,
		// height: 100,
		// width: 100,
		backgroundColor: '#ffffff',
		borderRadius: 8,
		shadowColor: '#000000',
		shadowOffset: { width: 4, height: 4 },
		shadowOpacity: 1,
		shadowRadius: 8,
		elevation: 10,
		paddingBottom: 24,
		position: 'relative',
	},
	logo: {
		alignSelf: 'center',
		height: 60,
		width: 96,
		// paddingBottom: 20,
		marginTop: 10,
	},
	code: {
		fontFamily: 'Montserrat_500Medium',
		fontSize: 9,
		alignSelf: 'center',
	},
	welcome: {
		paddingTop: 20,
		textAlign: 'center',
		fontFamily: 'Montserrat_600SemiBold',
		fontSize: 15,
	},
	otpInputContainer: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		marginLeft: 42,
		marginRight: 42,
	},
	input: {
		marginTop: 26,
		alignSelf: 'center',
		width: 220,
		height: 33,
		borderWidth: 1,
		borderColor: '#D8DADC',
		borderRadius: 8,
	},
	otpInput: {
		marginTop: 26,
		alignSelf: 'center',
		width: 33,
		height: 33,
		borderWidth: 1,
		borderColor: '#D8DADC',
		borderRadius: 8,
	},
	policy: {
		marginTop: 14,
		// textAlign: 'center',
		fontFamily: 'Montserrat_600SemiBold',
		fontSize: 8,
		width: 207,
		alignSelf: 'center',
	},
	logInButton: {
		marginTop: 40,
		width: 220,
		height: 33,
		backgroundColor: '#EA5A1A',
		borderRadius: 8,
		alignSelf: 'center',
		alignItems: 'center',
		justifyContent: 'center',
	},
	logInText: {
		color: '#ffffff',
		fontFamily: 'Montserrat_700Bold',
		fontSize: 14,
	},
	cancel: {
		// marginTop: 7,
		// alignSelf: 'space-between',
		right: 14,
		position: 'absolute',
	},
});