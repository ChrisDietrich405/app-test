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

export interface LoginUser {
	email: string;
	password: string;
}

export const createUserTemplate = async (userData: CreateUser) => {
	try {
		const response = await api.post("/v1/api/users/create", userData);
		return response.data;
	} catch (error) {
		console.error("Error creating user:", error);
		throw error;
	}
};

export const loginUserTemplate = async (userData: LoginUser) => {
	try {
		const response = await api.post("/v1/api/auth", userData);
		return response;
	} catch (error) {
		console.error("Error creating user:", error);
		throw error;
	}
};
