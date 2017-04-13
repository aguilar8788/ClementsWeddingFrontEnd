import React, {PropTypes} from 'react'
import TextInput from '../common/TextInput'
import SelectInput from '../common/SelectInput'
import CheckBox from '../common/CheckBox'

const FormComponent = ({options, secondaryOptions, onSave, onChange, loading, songs, checkBoxValue, errors}) => {
  return (
    <div className="formComponent">
      <form className="Form">
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
        <div className="selectInputs">
          <CheckBox name="plusOne" label="plus 1" value={checkBoxValue} onChange={checkBoxValue}/>
          <CheckBox name="attending" label="attending" value={checkBoxValue} onChange={checkBoxValue}/>

          <SelectInput
            name="plate"
            label="Plate"
            defaultOption="Select Plate"
            options={secondaryOptions}
            onChange={onChange}
          />
        </div>
        <div className="songsToSubmit">
          <ul>
            <li>{songs[0] ? songs[0][0] : " "}</li>
            <li>{songs[1] ? songs[1][0] : " "}</li>
          </ul>
          <ul>
            <li>{songs[2] ? songs[2][0] : " "}</li>
            <li>{songs[3] ? songs[3][0] : " "}</li>
          </ul>
        </div>
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
  checkBoxChange: PropTypes.bool
}

export default FormComponent
