import { useEffect } from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";
import { Link } from "expo-router";
import useGoogleAuth from "../hooks/useGoogleAuth";
// import Auth from "../components/Auth"

export default function Login() {
	const { userInfo, configureGoogleSignIn, handleSignInWithGoogle } =
		useGoogleAuth();

	useEffect(() => {
		configureGoogleSignIn();
	}, []);

	useEffect(() => {
		if (userInfo) {
			console.log("USERINFO", userInfo);
		}
	}, [userInfo]);

	return (
		<View style={styles.container}>
			<Image source={require("../../assets/logo.png")} style={styles.image} />

			<Text style={styles.link}>
				An app to let you know about upcoming local catering/popup vegan events
			</Text>
			<Button title="Create Account" />
			<Button title="Log in" />
			<Button title="Sign in With Google" onPress={handleSignInWithGoogle} />
			{/* <Auth /> */}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	link: {
		marginTop: 10,
		color: "blue",
	},
	image: {
		width: 150,
		height: 150,
		marginVertical: 20,
	},
});
