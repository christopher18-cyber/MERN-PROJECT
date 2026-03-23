function CommonInput({ type, placeholder, name, onChange, value, id }) {
	return (
		<input
			className='flex flex-col mt-3.5'
			type={type}
			placeholder={placeholder}
			value={value}
			name={name}
			onChange={onChange}
			id={id}
		/>
	);
}

export default CommonInput;
