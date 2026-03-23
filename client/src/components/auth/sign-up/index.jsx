import { useContext } from "react";
import { AuthContext } from "../../../context/index.jsx";
import CommonForm from "../../common-form";
import { registerControls } from "../../../config/index.js";

function SignUp() {
	const { setRegisterFormData, registerFormData, submitOnRegister } =
		useContext(AuthContext);
	return (
		<div>
			<div>
				<h3>Regsiter Page</h3>
				<CommonForm
					setFormData={setRegisterFormData}
					formControls={registerControls}
					onSubmit={submitOnRegister}
					formData={registerFormData}
					buttonText={"Register"}
				/>
			</div>
		</div>
	);
}

export default SignUp;
