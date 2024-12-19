import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, Button, StyleSheet } from "react-native";
import * as Google from "@react-native-google-signin/google-signin";
import axios from "axios";
import { createUser } from "../services/userServices";
import { requestTrackingPermissionsAsync } from "expo-tracking-transparency";
import {
	AccessToken,
	GraphRequest,
	GraphRequestManager,
	LoginButton,
	Settings,
	ShareDialog,
} from "react-native-fbsdk-next";

const GOOGLE_WEB_CLIENT_ID =
	"870172615730-er097kb071n6h3kbuooiefbbqjkqb7r1.apps.googleusercontent.com";
const GOOGLE_IOS_CLIENT_ID = "**************";

export default function App() {
	const [userInfo, setUserInfo] = useState<any | null>(null);

	useEffect(() => {
		const requestTracking = async () => {
			const { status } = await requestTrackingPermissionsAsync();

			Settings.initializeSDK();

			if (status === "granted") {
				await Settings.setAdvertiserTrackingEnabled(true);
			}
		};
		requestTracking();
		configureGoogleSignIn();
	}, []);

	const configureGoogleSignIn = () => {
		Google.GoogleSignin.configure({
			webClientId: GOOGLE_WEB_CLIENT_ID,
			iosClientId: GOOGLE_IOS_CLIENT_ID,
			forceCodeForRefreshToken: true,
			scopes: ["email", "profile"],
		});
	};

	// const handleSignInWithGoogle = async () => {
	// 	try {
	// 		await Google.GoogleSignin.hasPlayServices();
	// 		const userInfo: any = await Google.GoogleSignin.signIn();
	// 		console.log(userInfo);
	// 		if (userInfo) {
	// 			setUserInfo(userInfo);
	// 			console.log(userInfo);
	// 		}
	// 		const { id, name, email, photo } = userInfo;
	// 		const response = await axios.post("http://192.168.1.163:3001", {
	// 			googleId: id,
	// 			name,
	// 			email,
	// 			photoUrl: photo, // Include photoUrl if needed
	// 		});
	// 		console.log("response", response);
	// 	} catch (error) {
	// 		console.log("Error signing in with Google", error);
	// 	}
	// };

	const handleSignInWithGoogle = async () => {
		try {
			await Google.GoogleSignin.hasPlayServices();
			const userInfo: any = await Google.GoogleSignin.signIn();
			console.log(userInfo);
			if (userInfo) {
				setUserInfo(userInfo);
				await createUser(userInfo.data.user);
			}
			// router.push("/");
		} catch (error) {
			console.log("Error signing in with Google", error);
		}
	};

	return (
		<View style={styles.container}>
			<LoginButton
				onLogoutFinished={() => console.log("Logged out")}
				onLoginFinished={(error, data) => {
					console.log(error || data);
					AccessToken.getCurrentAccessToken().then((data) => console.log(data));
				}}
			/>
			<Button
				title="Sign in with shoes"
				onPress={handleSignInWithGoogle}
				color="#4285F4"
			/>
			{userInfo && (
				<>
					<Text style={styles.text}>{userInfo?.data?.user.name}</Text>
					<Text style={styles.text}>{userInfo?.data?.user.email}</Text>
				</>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		marginTop: 10,
	},
});
