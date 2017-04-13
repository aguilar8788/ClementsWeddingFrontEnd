import React, {PropTypes} from 'react'
import TextInput from '../common/TextInput'
import SelectInput from '../common/SelectInput'

const FormComponent = ({options, secondaryOptions, onSave, onChange, loading, songs, errors}) => {
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
          <SelectInput
            name="attending"
            label="Attending"
            defaultOption="1"
            options={options}
            onChange={onChange}
          />

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
  secondaryOptions: PropTypes.array
}

export default FormComponent
