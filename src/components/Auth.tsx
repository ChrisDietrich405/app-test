import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, Button, StyleSheet } from "react-native";
import * as Google from "@react-native-google-signin/google-signin";
import axios from "axios";
import { createUserTemplate } from "../services/userServices";

const GOOGLE_WEB_CLIENT_ID =
	"870172615730-er097kb071n6h3kbuooiefbbqjkqb7r1.apps.googleusercontent.com";
const GOOGLE_IOS_CLIENT_ID = "**************";

export default function App() {
	const [userInfo, setUserInfo] = useState<any | null>(null);

	useEffect(() => {
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
				await createUserTemplate(userInfo.data.user);
			}
			// router.push("/");
		} catch (error) {
			console.log("Error signing in with Google", error);
		}
	};

	return (
		<View style={styles.container}>
			<Button
				title="Sign in with Google"
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
