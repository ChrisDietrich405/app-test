import { useEffect } from "react";
import { useRouter } from "expo-router";
import { View, Text, StyleSheet, Image, Button } from "react-native";
import { Link } from "expo-router";
import useGoogleAuth from "../hooks/useGoogleAuth";
import useFacebookAuth from "../hooks/useFacebookAuth";

export default function Login() {
	const router = useRouter();
	const { userInfo, configureGoogleSignIn, handleSignInWithGoogle } =
		useGoogleAuth();
	const { loginWithFacebook, isLoggingIn } = useFacebookAuth();

	useEffect(() => {
		configureGoogleSignIn();
	}, []);

	useEffect(() => {
		if (userInfo || isLoggingIn) {
			console.log("USERINFO", userInfo);
			router.push("/events");
		}
	}, [userInfo]);

	return (
		<View style={styles.container}>
			<Image source={require("../../assets/logo.png")} style={styles.image} />

			<Text style={styles.link}>
				Your home for local vegan pop-ups, food trucks, catering, and more!
			</Text>
			<View style={styles.button_container}>
				<Button
					color="#288528"
					onPress={() => router.push("/create-account")}
					title="Create Account"
				/>
				<Button
					color="#288528"
					onPress={() => router.push("/login")}
					title="Log in"
				/>
				<Button
					color="#288528"
					title="Sign in With Google"
					onPress={handleSignInWithGoogle}
				/>
				<Button
					color="#288528"
					title="Sign in With Facebook"
					onPress={loginWithFacebook}
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
