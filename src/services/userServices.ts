import api from "../utils";
import axios from "axios";

export interface User {
	id: string;
	name: string | null;
	email: string;
	password: string;
	photo: string | null;
	familyName: string | null;
	givenName: string | null;
}

export interface CreateUser {
	name: string;
	email: string;
	password: string;
}

export const createUserTemplate = async (userData: CreateUser) => {
	try {
		const response = await api.post("/v1/api/users/create", userData);
		console.log("response", response);
		return response.data;
	} catch (error) {
		console.error("Error creating user:", error);
		throw error;
	}
};

// export const createUser = async (userData: User) => {
// 	try {
// 		const response = await api.post(
// 			"http://localhost:3000/v1/api/users/create",
// 			userData
// 		);
// 		return response.data;
// 	} catch (error) {
// 		console.error("Error creating user:", error);
// 		throw error;
// 	}
// };
