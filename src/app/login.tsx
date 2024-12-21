import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button, Alert } from "react-native";
import { useRouter } from "expo-router";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const router = useRouter();

	// Regular expression for basic email validation
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	const handleLogin = () => {
		// Check if both fields are filled
		if (!email || !password) {
			Alert.alert("Error", "Please fill in all fields");
			return;
		}

		// Validate email format
		if (!emailRegex.test(email)) {
			Alert.alert("Error", "Please enter a valid email address");
			return;
		}

		// Check password length (optional)
		if (password.length < 6) {
			Alert.alert("Error", "Password must be at least 6 characters long");
			return;
		}

		// Add login logic here (e.g., API call)
		Alert.alert("Success", "Logged in successfully!");
		router.push("/events");
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Login</Text>
			<TextInput
				style={styles.input}
				placeholder="Email"
				value={email}
				onChangeText={setEmail}
				keyboardType="email-address"
			/>
			<TextInput
				style={styles.input}
				placeholder="Password"
				value={password}
				onChangeText={setPassword}
				secureTextEntry
			/>
			<Button title="Login" onPress={handleLogin} />
			<Text style={styles.registerLink}>
				Don't have an account? Register here.
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
		paddingHorizontal: 20,
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 20,
	},
	input: {
		width: "100%",
		padding: 10,
		marginVertical: 10,
		borderWidth: 1,
		borderColor: "#ccc",
		borderRadius: 5,
		backgroundColor: "#f9f9f9",
	},
	registerLink: {
		marginTop: 20,
		fontSize: 14,
		color: "#007BFF",
	},
});
