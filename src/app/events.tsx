import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";

export default function Events() {
	return (
		<View style={styles.container}>
			<View style={styles.cardHorizontal}>
				<View style={styles.textContainer}>
					<Text style={styles.couponText}>
						I have loved building this app, but love doesn't pay bills
					</Text>
					<Button title="Donate" color="#288528" onPress={() => {}} />
				</View>
			</View>
			<View style={styles.cardHorizontal}>
				<Image
					source={require("../../assets/lok.png")}
					style={styles.imageSmall}
				/>
				<View style={styles.textContainer}>
					<Text style={styles.couponText}>5% Coupon</Text>
					<Button title="Click Here" color="#288528" onPress={() => {}} />
				</View>
			</View>

			{/* Event card */}
			<View style={styles.card}>
				<Text style={styles.title}>Vegan Buffet @ Cisu</Text>
				<Text style={styles.text}>Saturday Jan 18 @ 5</Text>
				<Text style={styles.text}>123 Boston Ave, Hanover</Text>
				<Button title="Event Details" color="#288528" onPress={() => {}} />
			</View>

			{/* Event card */}
			<View style={styles.card}>
				<Text style={styles.title}>Vegan Buffet @ Cisu</Text>
				<Text style={styles.text}>Saturday Jan 18 @ 5</Text>
				<Text style={styles.text}>123 Boston Ave, Hanover</Text>
				<Button title="Event Details" color="#288528" onPress={() => {}} />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
		padding: 20,
	},
	card: {
		width: "90%",
		backgroundColor: "#f9f9f9",
		padding: 20,
		borderRadius: 10,
		marginBottom: 20,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 4,
		elevation: 3,
	},
	cardHorizontal: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#f9f9f9",
		padding: 20,
		borderRadius: 10,
		marginBottom: 20,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 4,
		elevation: 3,
		width: "90%",
	},
	imageSmall: {
		width: 50,
		height: 50,
		marginRight: 15,
	},
	textContainer: {
		flex: 1, // Ensures the text container takes up remaining space
	},
	title: {
		fontSize: 18,
		fontWeight: "bold",
		marginBottom: 10,
	},
	text: {
		fontSize: 14,
		marginBottom: 5,
	},
	couponText: {
		fontSize: 16,
		fontWeight: "bold",
		marginBottom: 10,
	},
});
