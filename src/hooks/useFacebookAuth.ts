import { useState, useCallback } from "react";
import { LoginManager, AccessToken, Profile } from "react-native-fbsdk-next";

export default function useFacebookAuth() {
	const [isLoggingIn, setIsLoggingIn] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [user, setUser] = useState<{
		id: string;
		name: string | null;
		email?: string | null;
	} | null>(null);

	const loginWithFacebook = async () => {
		try {
			setIsLoggingIn(true);
			setError(null);
			console.log("something");
			// Log in to Facebook
			const loginResult = await LoginManager.logInWithPermissions([
				"public_profile",
				"email",
			]);
			console.log(loginResult);
			if (loginResult.isCancelled) {
				setError("Login cancelled by the user");
				setIsLoggingIn(false);
				return;
			}

			// Get the access token
			const accessTokenData = await AccessToken.getCurrentAccessToken();
			if (!accessTokenData) {
				setError("It wasn't possible to obtain the Facebook token");
				setIsLoggingIn(false);
				return;
			}

			// Get user profile
			const profile = await Profile.getCurrentProfile();
			setUser({
				id: profile?.userID || "",
				name: profile?.name || null,

				email: null, // email is necessary to search for the required Graph API
			});

			setIsLoggingIn(false);
		} catch (err: any) {
			setError(err.message || "unexpected error");
			setIsLoggingIn(false);
			console.log(err);
		}
	};

	const logoutFromFacebook = useCallback(async () => {
		try {
			await LoginManager.logOut();
			setUser(null);
		} catch (err: any) {
			setError(err.message || "error while logging out");
		}
	}, []);

	return {
		isLoggingIn,
		user,
		error,
		loginWithFacebook,
		logoutFromFacebook,
	};
}
