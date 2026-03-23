import { useContext, useState } from "react";
import SignIn from "../../components/auth/sign-in";
import SignUp from "../../components/auth/sign-up";
import CommonButton from "../../components/common-button";
import { AuthContext } from "../../context";

function AuthPage() {
	const { submitOnLogin, submitOnRegister } = useContext(AuthContext);
	const [isLoginView, setIsLoginView] = useState(false);

	return (
		<div className='flex flex-auto flex-col min-h-screen h-full'>
			<div className='flex h-full flex-col justify-center items-center bg-white'>
				<h3 className='text-3xl font-bold mt-3'>Welcome</h3>
				<div className='mt-4'>{isLoginView ? <SignIn /> : <SignUp />}</div>
				<div className='mt-5'>
					<CommonButton
						type={"button"}
						buttonText={isLoginView ? "Switch to Sign up" : "Switch to Sign In"}
						onClick={() => setIsLoginView(!isLoginView)}
					/>
				</div>
			</div>
		</div>
	);
}

export default AuthPage;
