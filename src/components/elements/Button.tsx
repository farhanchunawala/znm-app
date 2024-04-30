import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
// import styles from './styles/CapsuleButton';
// import CapsuleButtonStyles from './styles/GoogleContacts/CapsuleButton';
// import AddButtonStyles from './styles/GoogleContacts/AddButton';

export default function CapsuleButton({ styles, containerStyle, text, onPress }) {
	// let styles;
	// if (style === 'CapsuleButton') {
	// 	styles = CapsuleButtonStyles;
	// } else if (style === 'AddButton') {
	// 	styles = AddButtonStyles;
	// } else {
	// 	// Default style or throw an error, depending on your design
	// 	styles = CapsuleButtonStyles; // or any default
	// }

	return (
		<TouchableOpacity
			style={[styles.container, containerStyle]}
			onPress={onPress}>
			<Text style={styles.text}>{text}</Text>
		</TouchableOpacity>
	);
}
