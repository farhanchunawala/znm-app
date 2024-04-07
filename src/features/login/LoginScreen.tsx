import { useState } from 'react';
import {
	TouchableOpacity,
	StyleSheet,
	TextInput,
	Text,
	View,
	Image,
} from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { Svg, Path } from 'react-native-svg';

interface State {
	show: boolean;
	popup: 'popup1' | 'popup2';
	email_mobile: string;
	termsOfUse: boolean;
	otps: string[];
	errorMessage: string;
}

interface PopupProps {
	state: State;
	onInputChange: (value: string, name: string, index?: number) => void;
	otpLogin?: () => Promise<void>;
	otpVerify?: () => Promise<void>;
}

export default function LoginScreen() {
	const navigation = useNavigation();
	const [state, setState] = useState<State>({
		show: false,
		popup: 'popup1',
		email_mobile: '',
		termsOfUse: true,
		otps: Array(6).fill(''),
		errorMessage: '',
	});

	const handleInputChange = (value: string, name: string, index?: number) => {
		setState(prevState => {
			if (name === 'otps' && typeof index === 'number') {
				const updatedOtps = [...prevState.otps];
				updatedOtps[index] = value;
				return { ...prevState, otps: updatedOtps };
			} else {
				return { ...prevState, [name]: value };
			}
		});
	};

	const otpLogin = async () => {
		try {
			const response = await axios.post(
				'https://www.cancermitr.com/api/v1/cm_otp_login',
				{
					email_mobile: state.email_mobile,
					termsOfUse: state.termsOfUse,
				},
			);

			if (response.data.type === 'success') {
				console.log('OTP sent successfully');
				setState(prevState => ({
					...prevState,
					popup: 'popup2',
				}));
			} else {
				console.log('OTP failed:', response.data.message);
			}
		} catch (error) {
			console.error('OTP error:', error);
		}
	};

	const otpVerify = async () => {
		try {
			const response = await axios.post(
				'https://www.cancermitr.com/api/v1/cm_loginotpverify',
				{
					to_mobilecm: state.email_mobile,
					otp1: state.otps[0],
					otp2: state.otps[1],
					otp3: state.otps[2],
					otp4: state.otps[3],
					otp5: state.otps[4],
					otp6: state.otps[5],
				},
			);

			if (response.data.type === 'success') {
				console.log('Login successful');
				navigation.navigate('Home');
			} else {
				console.log('Login failed:', response.data.message);
			}
		} catch (error) {
			console.error('Login error:', error);
		}
	};

	return (
		<>
			{state.popup === 'popup1' ? (
				<Popup1
					state={state}
					onInputChange={handleInputChange}
					otpLogin={otpLogin}
				/>
			) : (
				<Popup2
					state={state}
					onInputChange={handleInputChange}
					otpVerify={otpVerify}
				/>
			)}
		</>
	);
}

function Popup1({ state, onInputChange, otpLogin }: PopupProps) {
	return (
		<View style={styles.container}>
			<View style={styles.card}>
				<TouchableOpacity>
					<Svg
						style={styles.cancel}
						width="20"
						height="20"
						viewBox="0 0 20 20"
						fill="none">
						<Path
							d="M15.589 5.58904L14.4106 4.41071L9.99981 8.82154L5.58898 4.41071L4.41064 5.58904L8.82148 9.99987L4.41064 14.4107L5.58898 15.589L9.99981 11.1782L14.4106 15.589L15.589 14.4107L11.1781 9.99987L15.589 5.58904Z"
							fill="#656565"
						/>
					</Svg>
				</TouchableOpacity>
				<Image
					style={styles.logo}
					source={require('../../../assets/images/cm_logo3.png')}
				/>
				<Text style={styles.welcome}>Welcome to CancerMitr</Text>
				<Text style={styles.code}> </Text>
				<TextInput
					style={styles.input}
					placeholder="Mobile No."
					keyboardType="phone-pad"
					value={state.email_mobile}
					onChangeText={text => onInputChange(text, 'email_mobile')}
				/>
				<Text style={styles.policy}>
					I agree to CancerMitr&apos;s Terms and Conditions and
					Privacy Policy.
				</Text>
				<TouchableOpacity onPress={otpLogin} style={styles.logInButton}>
					<Text style={styles.logInText}>Log In</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

function Popup2({ state, onInputChange, otpVerify }: PopupProps) {
	return (
		<View style={styles.container}>
			<View style={styles.card}>
				<TouchableOpacity>
					<Svg
						style={styles.cancel}
						width="20"
						height="20"
						viewBox="0 0 20 20"
						fill="none">
						<Path
							d="M15.589 5.58904L14.4106 4.41071L9.99981 8.82154L5.58898 4.41071L4.41064 5.58904L8.82148 9.99987L4.41064 14.4107L5.58898 15.589L9.99981 11.1782L14.4106 15.589L15.589 14.4107L11.1781 9.99987L15.589 5.58904Z"
							fill="#656565"
						/>
					</Svg>
				</TouchableOpacity>
				<Image
					style={styles.logo}
					source={require('../../../assets/images/cm_logo3.png')}
				/>
				<Text style={styles.welcome}>Welcome to CancerMitr</Text>
				<Text style={styles.code}>
					{`Enter the code we've sent via SMS to +91 ${state.email_mobile}`}
				</Text>
				<View style={styles.otpInputContainer}>
					{state.otps.map((otp, index) => (
						<TextInput
							key={index}
							style={styles.otpInput}
							placeholder=" "
							keyboardType="numeric"
							value={otp}
							onChangeText={text =>
								onInputChange(text, 'otps', index)
							}
						/>
					))}
				</View>
				<Text style={styles.policy}>
					Haven&apos;t received a code? Resend OTP
				</Text>
				<TouchableOpacity
					onPress={otpVerify}
					style={styles.logInButton}>
					<Text style={styles.logInText}>Submit</Text>
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
