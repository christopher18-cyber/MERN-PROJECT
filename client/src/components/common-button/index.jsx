function CommonButton({ disabled, buttonText, type, onClick }) {
	return (
		<div>
			<button
				type={type || "submit"}
				onClick={onClick || null}
				disabled={disabled || false}
				className='flex h-11 justify-center mt-5 items-center px-5 bg-black font-bold
				 text-white border-none cursor-pointer rounded hover:bg-black hover:text-white'>
				{buttonText}
			</button>
		</div>
	);
}

export default CommonButton;
