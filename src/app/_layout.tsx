import { useEffect } from "react";
import { useFonts } from "expo-font";
import { Stack, SplashScreen } from "expo-router";

SplashScreen.preventAutoHideAsync();

export default function Layout() {
	return (
		<Stack>
			<Stack.Screen name="index" options={{ title: "Home" }} />
			<Stack.Screen name="events" options={{ title: "Events" }} />
			<Stack.Screen
				name="create-account"
				options={{ title: "CreateAccount" }}
			/>
			<Stack.Screen name="login" options={{ title: "Login" }} />
		</Stack>
	);
}
