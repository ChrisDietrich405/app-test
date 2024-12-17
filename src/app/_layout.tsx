import { useEffect } from "react";
import { useFonts } from "expo-font";
import { Stack, SplashScreen } from "expo-router";
import { Settings } from "react-native-fbsdk-next";

SplashScreen.preventAutoHideAsync();
console.log("helloooo", Settings.initializeSDK);
Settings?.initializeSDK();

export default function Layout() {
	// const [loaded] = useFonts({
	// 	SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
	// });

	// useEffect(() => {
	// 	if (loaded) {
	// 		// SplashScreen.hideAsync();
	// 	}
	// }, [loaded]);

	// if (!loaded) {
	// 	return null;
	// }
	return (
		<Stack>
			<Stack.Screen name="index" options={{ title: "Home" }} />
			<Stack.Screen name="login" options={{ title: "login" }} />
		</Stack>
	);
}
