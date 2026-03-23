// const

import CommonInput from "../common-input";

function CommonForm({
	formControls = [],
	buttonText,
	formData,
	setFormData,
	onSubmit,
}) {
	function renderFormElements(getCurrentFormControl, getFormData) {
		let content = null;
		switch (getCurrentFormControl.componentType) {
			case "input":
				content = (
					<CommonInput
						name={getCurrentFormControl?.name}
						value={getCurrentFormControl?.value}
						onChange={(event) => {
							setFormData({
								...getFormData,
								[getCurrentFormControl.name]: event.target.value,
							});
						}}
						placeholder={getCurrentFormControl?.placeholder}
						type={getCurrentFormControl?.type}
						id={getCurrentFormControl?.id}
					/>
				);
				break;

			default:
				content = (
					<CommonInput
						name={getCurrentFormControl?.name}
						value={getCurrentFormControl?.value}
						onChange={(event) => {
							setFormData({
								...formData,
								[getCurrentFormControl.name]: event.target.value,
							});
						}}
						placeholder={getCurrentFormControl?.placeholder}
						type={getCurrentFormControl?.type}
					/>
				);
				break;
		}
		return content;
	}
	return (
		<div>
			<form onSubmit={(event) => onSubmit(event, formData)}>
				{formControls?.length > 0
					? formControls.map((controlItem) =>
							renderFormElements(controlItem, formData),
						)
					: null}
				<button
					className='py-2 cursor-pointer mt-2.5 rounded px-3 bg-black text-2xl text-white'
					type='submit'>
					{buttonText || "Submit"}
				</button>
			</form>
		</div>
	);
}

export default CommonForm;
