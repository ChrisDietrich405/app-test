import api from "../utils";

interface User {
	id: string;
	name: string | null;
	email: string;
	photo: string | null;
	familyName: string | null;
	givenName: string | null;
}

export const createUser = async (userData: User) => {
	try {
		const response = await api.post("/api/users", userData);
		return response.data;
	} catch (error) {
		console.error("Error creating user:", error);
		throw error;
	}
};
