//https://www.ohchelsea.com/2024/01/13/how-to-add-facebook-login-to-your-expo-react-native-app/

import { useEffect } from "react";
import { useRouter } from "expo-router";
import { View, Text, StyleSheet, Image, Button } from "react-native";
import { Link } from "expo-router";
import useGoogleAuth from "../hooks/useGoogleAuth";
// import Auth from "../components/Auth"

export default function Login() {
	const router = useRouter();
	const { userInfo, configureGoogleSignIn, handleSignInWithGoogle } =
		useGoogleAuth();

	useEffect(() => {
		configureGoogleSignIn();
	}, []);

	useEffect(() => {
		if (userInfo) {
			console.log("USERINFO", userInfo);
			router.push("/events");
		}
	}, [userInfo]);

	return (
		<View style={styles.container}>
			<Image source={require("../../assets/logo.png")} style={styles.image} />

			<Text style={styles.link}>
				An app to let you know about upcoming local catering/popup vegan events
			</Text>
			<View style={styles.button_container}>
				<Button color="#288528" title="Create Account" />
				<Button color="#288528" title="Log in" />
				<Button
					color="#288528"
					title="Sign in With Google"
					onPress={handleSignInWithGoogle}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		alignItems: "center",
		backgroundColor: "#fff",
		justifyContent: "space-around",
		paddingHorizontal: 50,
	},
	button_container: {
		gap: 10,
	},
	button: {
		backgroundColor: "purple",
	},

	link: {
		marginTop: 10,
	},
	image: {
		width: 259,
		height: 83,
		marginVertical: 20,
	},
});
