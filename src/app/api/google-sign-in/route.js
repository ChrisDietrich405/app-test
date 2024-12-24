const googleSignIn = async (req, res) => {
	// Extract user details from request body
	const { googleId, name, email, photoUrl } = req.body;

	try {
		// Check if user already exists
		let user = await User.findOne({ googleId });

		// If user does not exist, create and save a new user
		if (!user) {
			user = new User({
				googleId,
				name,
				email,
				photoUrl,
			});
			await user.save();
		}

		// Respond with success and user details
		return res.status(200).json({
			message: "User saved successfully",
			user,
		});
	} catch (error) {
		// Log the error and respond with an error message
		console.error("Error saving user:", error);
		return res.status(500).json({
			message: "Error saving user",
		});
	}
};
