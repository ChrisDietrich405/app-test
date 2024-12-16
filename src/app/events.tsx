import { View, Text, StyleSheet, Image, Button } from "react-native";
import { Link } from "expo-router";
export default function Events() {
	return (
		<View style={styles.container}>
			<Image src={require("../../assets/logo.png")} style={styles.image} />

			<Text style={styles.link}>
				An app to let you know about upcoming local catering/popup vegan events
			</Text>
			<Button title="Create Account" />
			<Button title="Log in" />
			<Button title="Sign in with Google" />
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
