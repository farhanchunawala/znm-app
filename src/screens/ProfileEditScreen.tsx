import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
// import { GestureHandlerRootView } from "react-native-gesture-handler";
// import * as MediaLibrary from 'expo-media-library';
// import { captureRef } from 'react-native-view-shot';
// import domtoimage from 'dom-to-image';

import Header from '../features/Header';
import TabNav from '../features/TabNav';
import { TextInput } from 'react-native-gesture-handler';

export default function ProfileEditScreen() {
	return (
		<View style={styles.main}>
			<ScrollView>
				<Header />
				<View style={styles.box} />
				<View style={styles.category}>
					<Text style={styles.categoryText}>Name</Text>
					<TextInput
						style={styles.typeInput}
						placeholder="Your Name ..."
						// onChangeText={handleInputChange}
						// value={inputText}
					/>
				</View>
				<View style={styles.category}>
					<Text style={styles.categoryText}>Mobile no.</Text>
					<TextInput
						style={styles.typeInput}
						placeholder="Your Mobile no ..."
						// onChangeText={handleInputChange}
						// value={inputText}
					/>
				</View>
				<View style={styles.category}>
					<Text style={styles.categoryText}>Date of Birth</Text>
					<TextInput
						style={styles.typeInput}
						placeholder="Your Date of Birth ..."
						// onChangeText={handleInputChange}
						// value={inputText}
					/>
				</View>
				<View style={styles.category}>
					<Text style={styles.categoryText}>Gender</Text>
					<TextInput
						style={styles.typeInput}
						placeholder="Male/female"
						// onChangeText={handleInputChange}
						// value={inputText}
					/>
				</View>
			</ScrollView>
			<TabNav />
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	main: {
		flex: 1,
		paddingTop: 34,
		overflow: 'scroll',
		// paddingHorizontal: 16,
	},
	box: {
		backgroundColor: '#E5EDEE',
		height: 103,
		width: '100%',
		marginBottom: 69,
		// paddingBottom: 69,
	},
	category: {
		paddingHorizontal: 16,
		marginBottom: 14,
	},
	categoryText: {
		fontSize: 12,
		fontWeight: '500',
	},
	typeInput: {
		borderBottomWidth: 1,
		borderColor: '#252525',
		paddingVertical: 12,
		paddingLeft: 6,
	},
});
