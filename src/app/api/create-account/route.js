import dbConnect from "../../config/db";
import { NextResponse } from "next/server";
import UsersModel from "@/app/models/users";
import emailValidator from "../../shared/emailValidator";
import bcrypt from "bcryptjs";
import { handleMongoError } from "@/app/exceptions/handle-mongo-error";

export async function POST(req) {
	await dbConnect();

	// Extract necessary fields from the request body
	const { firstName, lastName, email, password, role } = await req.json();

	// Validate required fields
	if (!firstName || !lastName || !email || !password) {
		return NextResponse.json(
			{
				status: 400,
				message: "Please add all necessary information.",
			},
			{ status: 400 }
		);
	}

	// Validate email format
	if (!emailValidator(email)) {
		return NextResponse.json(
			{
				status: 400,
				message: "Invalid email format.",
			},
			{ status: 400 }
		);
	}

	// Check if the email already exists in the database
	const existingEmail = await UsersModel.findOne({ email });
	if (existingEmail) {
		return NextResponse.json(
			{
				status: 409,
				message: "Email already exists.",
			},
			{ status: 409 }
		);
	}

	try {
		// Hash the password for secure storage
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);

		// Create a new user document
		const newUser = new UsersModel({
			firstName,
			lastName,
			email,
			password: hashedPassword,
			role, // Include the role if applicable
		});

		// Save the new user to the database
		await newUser.save();

		return NextResponse.json({
			status: 201,
			message: "User created successfully.",
			user: newUser,
		});
	} catch (error) {
		console.error("Error creating user:", error);
		return handleMongoError();
	}
}
