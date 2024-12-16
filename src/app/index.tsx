import { View, Text, StyleSheet, Image } from "react-native";
import { Link } from "expo-router";
export default function App() {
	return (
		<View style={styles.container}>
			<Image src={require("../../assets/logo.png")} style={styles.image} />

			<Link href="/auth">
				<Text style={styles.link}>Auth</Text>
			</Link>
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
