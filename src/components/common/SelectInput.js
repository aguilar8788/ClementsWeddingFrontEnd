import React, {PropTypes} from 'react'
import Glyphicon from 'react-bootstrap/lib/Glyphicon'

const SelectInput = ({name, label, onChange, defaultOption, value, error, options}) => {
	return (
      <div className="form-group">
				<label htmlFor={name}> <span>
    <Glyphicon glyph="glyphicon glyphicon-cutlery"/>
 </span></label>
        <div className="field">
          <select
            name={name}
            value={value}
            onChange={onChange}
            className="form-control selectBox"
          >
            <option value="">{defaultOption}</option>
            {options.map((options) => {
              return <option key={options} value={options}>{options}</option>
            })}
          </select>
          {error && <div className="alert alert-danger">{error}</div>}
        </div>
      </div>
    )
}

SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  defaultOption: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string)
}

export default SelectInput
