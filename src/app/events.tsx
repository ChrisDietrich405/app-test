import { View, Text, StyleSheet, Image, Button } from "react-native";
import { Link } from "expo-router";
export default function Events() {
	return (
		<View style={styles.container}>
			<Text>hello</Text>
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
