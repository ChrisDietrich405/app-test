import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import * as SplashScreen from "expo-splash-screen";

const SplashScreenComponent = () => {
	useEffect(() => {
		// Prevent the splash screen from hiding automatically
		SplashScreen.preventAutoHideAsync();

		// Simulate loading and hide the splash screen manually after a delay
		const timer = setTimeout(async () => {
			await SplashScreen.hideAsync();
		}, 10000); // 3 seconds

		return () => clearTimeout(timer); // Clear timeout if the component is unmounted
	}, []);

	return (
		<View style={styles.container}>
			<Image source={require("./assets/splash.png")} style={styles.image} />
			<Text style={styles.text}>Loading...</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#ffffff",
	},
	image: {
		width: 200,
		height: 200,
		resizeMode: "contain",
	},
	text: {
		fontSize: 24,
		color: "#000000",
		marginTop: 20,
	},
});

export default SplashScreenComponent;
