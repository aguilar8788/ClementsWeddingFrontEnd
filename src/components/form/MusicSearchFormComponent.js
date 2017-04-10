import React, {PropTypes} from 'react'
import TextInput from '../common/TextInput'

const MusicSearchFormComponent = ({options, onSave, onChange, loading, errors}) => {
  return (
    <div className="formComponent ">
      <form className="musicForm">
        <div className="musicSearchInput">
          <TextInput
            name="songName"
            label="Song Name"
            onChange={onChange}
          />
          <input
            type="submit"
            disabled={loading}
            value={loading ? 'Saving...' : 'Submit RSVP'}
            className="btn btn-primary"
            onClick={onSave}
          />
        </div>
        <div className="searchResults">
          <ul>
            <ul className="songInfo">
              <li>song 1</li>
              <li>album 2</li>
              <li>artist 3</li>
              <button>add song</button>
            </ul>
          </ul>
        </div>
      </form>
    </div>
  )

}

MusicSearchFormComponent.propTypes = {
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  errors: PropTypes.object,
  options: PropTypes.array
}

export default MusicSearchFormComponent
