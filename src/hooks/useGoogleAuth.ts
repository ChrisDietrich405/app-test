import { useState } from "react";
import * as Google from "@react-native-google-signin/google-signin";

const useGoogleAuth = () => {
	const [userInfo, setUserInfo] = useState<any | null>(null);

	const configureGoogleSignIn = () => {
		Google.GoogleSignin.configure({
			webClientId:
				"870172615730-er097kb071n6h3kbuooiefbbqjkqb7r1.apps.googleusercontent.com",
			// iosClientId: "**************",
			forceCodeForRefreshToken: true,
			scopes: ["email", "profile"],
		});
	};

	const handleSignInWithGoogle = async () => {
		try {
			await Google.GoogleSignin.hasPlayServices();
			const userInfo = await Google.GoogleSignin.signIn();
			console.log(userInfo);
			if (userInfo) {
				setUserInfo(userInfo);

				const user = userInfo.data?.user;

				if (!user) {
					throw new Error("User not found");
				}

				setUserInfo(user);
			}
		} catch (error) {
			console.log("Error signing in with Google", error);
		}
	};

	return {
		userInfo,
		configureGoogleSignIn,
		handleSignInWithGoogle,
	};
};

export default useGoogleAuth;
