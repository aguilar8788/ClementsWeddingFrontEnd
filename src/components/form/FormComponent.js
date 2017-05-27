import React, {PropTypes} from 'react'
import TextInput from '../common/TextInput'
import SelectInput from '../common/SelectInput'
import CheckBox from '../common/CheckBox'

const FormComponent = ({options, secondaryOptions, onSave, onChange, loading, songs, checkBoxValue, errors, dispatch, plusOne}) => {
	function removeSong(songToDelete, songs) {
		dispatch.deleteSongFromForm(songToDelete, songs)
	}
	function renderSecondPlateOption(plusOneBool){
		if (plusOneBool) {
			return (
				<SelectInput
					name="plate2"
					label="Plate 2"
					defaultOption="choice"
					options={secondaryOptions}
					onChange={onChange}
				/>
			)	
		}	
	}

	function renderGuestTextInput(plusOneBool) {
		if (plusOneBool) {
			return (
				<div className="guestTextInput">	
				<TextInput 
					name="guestFirstName"
					label="Guest First Name"
					onChange={onChange}
				/>	
				<TextInput
					name="guestLastName"
					label="Guest Last Name"
					onChange={onChange}
				/>
		</div>
			)	
		}	
	}
	
	return (
		<div className="formComponent">
			<form className="Form">
				<h1>RSVP</h1>
				<TextInput
					name="firstName"
					label="First Name"
					onChange={onChange}
				/>

			<TextInput
				name="lastName"
				label="Last Name"
				onChange={onChange}
			/>
			<TextInput
				name="email"
				label="Email"
				onChange={onChange}
			/>
			{plusOne == true ? renderGuestTextInput(plusOne) : ""}
			<div className="selectInputs">
				<CheckBox name="plusOne" label="plus 1?" value={checkBoxValue} onChange={checkBoxValue}/>
				<div className="attendingContainer">
					<p>attending?</p>
					{plusOne == undefined || plusOne == false ? <div className="attendingCheckBoxes">
						<CheckBox name="attending" label="yes" value={checkBoxValue} onChange={checkBoxValue}/>
						<CheckBox name="attending" label="no" value={checkBoxValue} onChange={checkBoxValue}/>
					</div> : <p className="yesAttending">yes</p>}	
									</div>
				<div className="plateOptions">
				<SelectInput
					name="plate"
					label="Plate"
					defaultOption="choice"
					options={secondaryOptions}
					onChange={onChange}
				/>
				{plusOne === true ? renderSecondPlateOption(plusOne) : ""}
			</div>
			</div>
			<div className="songsToSubmit">
				{/*change to its own component*/}
				<ul>
					<li className="formSongListElement">{songs[0] ? songs[0][1] : ""}
						<p onClick={() => removeSong(songs[0], songs)}>
							{songs[0] ? "X" : ""}
						</p>
					</li>
					<li className="formSongListElement">{songs[1] ? songs[1][1] : " "}
						<p onClick={() => removeSong(songs[1], songs)}>
							{songs[1] ? "X" : ""}
						</p>
					</li>
				</ul>
				<ul>
					<li className="formSongListElement">{songs[2] ? songs[2][1] : " "}
						<p onClick={() => removeSong(songs[2], songs)}>
							{songs[2] ? "X" : ""}
						</p>
					</li>
					<li className="formSongListElement">{songs[3] ? songs[3][1] : " "}
						<p onClick={() => removeSong(songs[3], songs)}>
							{songs[3] ? "X" : ""}
						</p>
					</li>
				</ul>
			</div>
			{songs.length == 0 ? <p className="noteOnForm">*if you would like to add songs please do so before submitting form</p> : " "}
			<div className="submitButton">
				<input
					type="submit"
					disabled={loading}
					value={loading ? 'Saving...' : 'Submit RSVP'}
					className="btn btn-primary"
					onClick={onSave}
				/>
			</div>
		</form>
	</div>
	)
}

FormComponent.propTypes = {
	onSave: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
	loading: PropTypes.bool,
	errors: PropTypes.object,
	options: PropTypes.array,
	secondaryOptions: PropTypes.array,
	songs: PropTypes.array,
	checkBoxChange: PropTypes.bool,
	checkBoxValue: PropTypes.func
}

export default FormComponent
