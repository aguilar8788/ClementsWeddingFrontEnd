import React, {PropTypes} from 'react'

const CheckBox = ({name, label, onChange, defaultOption, value, error}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <input
          type="checkbox"
          name={name}
          className=""
          value={value}
          onChange={onChange}
        />
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  )
}

CheckBox.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  defaultOption: PropTypes.string,
  value: PropTypes.func,
  error: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string)
}

export default CheckBox
