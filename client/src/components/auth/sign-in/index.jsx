import { useContext } from "react";
import { AuthContext } from "../../../context/index.jsx";
import { loginControls } from "../../../config/index.js";
import CommonForm from "../../common-form/index.jsx";

function SignIn() {
	const { setLoginFormData, loginFormData, submitOnLogin } =
		useContext(AuthContext);
	return (
		<div className='w-full mx-auto'>
			<div>
				<h3>Sign in Page</h3>
				<CommonForm
					setFormData={setLoginFormData}
					formData={loginFormData}
					onSubmit={submitOnLogin}
					buttonText={"Login"}
					formControls={loginControls}
				/>
			</div>
		</div>
	);
}

export default SignIn;
