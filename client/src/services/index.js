import axios from "axios";

export async function callUserRegisterApi(formData) {
	const response = await axios.post(
		"http://localhost:3000/api/user/register",
		formData,
		{ withCredentials: true },
	);

	return response?.data;
}
