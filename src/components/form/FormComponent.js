import React, {PropTypes} from 'react'
import TextInput from '../common/TextInput'
import SelectInput from '../common/SelectInput'

const FormComponent = ({options, secondaryOptions, onSave, onChange, loading, errors}) => {
return (
  <form>
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
    <input
      type="submit"
      disabled={loading}
      value={loading ? 'Saving...' : 'Save'}
      className="btn btn-primary"
      onClick={onSave}
    />
  </form>
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
