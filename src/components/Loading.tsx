import { View, Text, StyleSheet, Animated } from "react-native";
import React, { useEffect, useRef } from "react";

export default function Loading() {
	const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity

	useEffect(() => {
		Animated.loop(
			Animated.sequence([
				Animated.timing(fadeAnim, {
					toValue: 1,
					duration: 1000,
					useNativeDriver: true,
				}),
				Animated.timing(fadeAnim, {
					toValue: 0,
					duration: 1000,
					useNativeDriver: true,
				}),
			])
		).start();
	}, [fadeAnim]);

	return (
		<View style={styles.container}>
			<Animated.View style={[styles.loader, { opacity: fadeAnim }]}>
				<Text style={styles.loadingText}>Loading ...</Text>
			</Animated.View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#f7f7f7",
		alignItems: "center",
		justifyContent: "center",
		padding: 20,
	},
	loader: {
		backgroundColor: "#4CAF50",
		borderRadius: 12,
		padding: 20,
		elevation: 10,
		alignItems: "center",
	},
	loadingText: {
		fontSize: 22,
		color: "#fff",
		fontWeight: "bold",
		textAlign: "center",
		textTransform: "uppercase",
	},
});

// import { View, Text, StyleSheet, Image, Button } from "react-native";
// import { Link } from "expo-router";
// export default function Loading() {
// 	return (
// 		<View style={styles.container}>
// 			<Text style={styles.link}>Loading ....</Text>
// 		</View>
// 	);
// }

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		backgroundColor: "#fff",
// 		alignItems: "center",
// 		justifyContent: "center",
// 	},
// 	link: {
// 		marginTop: 10,
// 		color: "blue",
// 	},
// 	image: {
// 		width: 150,
// 		height: 150,
// 		marginVertical: 20,
// 	},
// });
