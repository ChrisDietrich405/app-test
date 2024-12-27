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

	const loginWithFacebook = useCallback(async () => {
		try {
			setIsLoggingIn(true);
			setError(null);

			// Log in to Facebook
			const loginResult = await LoginManager.logInWithPermissions([
				"public_profile",
				"email",
			]);
			if (loginResult.isCancelled) {
				setError("Login cancelado pelo usuário");
				setIsLoggingIn(false);
				return;
			}

			// Get the access token
			const accessTokenData = await AccessToken.getCurrentAccessToken();
			if (!accessTokenData) {
				setError("Não foi possível obter o token de acesso do Facebook");
				setIsLoggingIn(false);
				return;
			}

			// Get user profile
			const profile = await Profile.getCurrentProfile();
			setUser({
				id: profile?.userID || "",
				name: profile?.name || null,
				email: null, // O email precisará ser buscado com uma requisição Graph API
			});

			setIsLoggingIn(false);
		} catch (err: any) {
			setError(err.message || "Ocorreu um erro inesperado");
			setIsLoggingIn(false);
		}
	}, []);

	const logoutFromFacebook = useCallback(async () => {
		try {
			await LoginManager.logOut();
			setUser(null);
		} catch (err: any) {
			setError(err.message || "Erro ao tentar deslogar");
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
