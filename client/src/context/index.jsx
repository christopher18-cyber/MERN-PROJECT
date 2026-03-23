import { createContext, useState } from "react";
import { callUserRegisterApi } from "../services";

export const AuthContext = createContext(null);

function AuthState({ children }) {
	const [registerFormData, setRegisterFormData] = useState({
		name: "",
		email: "",
		password: "",
	});

	const [loginFormData, setLoginFormData] = useState({
		name: "",
		password: "",
	});

	function submitOnLogin(event, getData) {
		event.preventDefault();
		console.log(getData);
	}

	async function submitOnRegister(event, getData) {
		event.preventDefault();
		console.log(getData);
		try {
			const data = await callUserRegisterApi(getData);
			console.log("data", data);
			if (data?.success) {
				const {} = useToast();
			}
		} catch (err) {
			console.log(err.response.data);
		}
	}
	return (
		<AuthContext.Provider
			value={{
				setLoginFormData,
				setRegisterFormData,
				loginFormData,
				registerFormData,
				submitOnLogin,
				submitOnRegister,
			}}>
			{children}
		</AuthContext.Provider>
	);
}

export default AuthState;
