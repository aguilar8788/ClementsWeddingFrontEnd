import React, {PropTypes} from 'react'
import TextInput from '../common/TextInput'

const MusicSearchFormComponent = ({options, onSave, onChange, loading, errors}) => {
  if (options[0]) {
    console.log("options in music form", options[0].artistName)
  }

  function formatMusicDate(data) {
    return data.map(song => {
      return (
        <ul className="songInfo">
          <li>{song.artistName}</li>
          <li>{song.trackName}</li>
          <li>{song.collectionName}<button>add song</button></li>
        </ul>
      )
    })
  }

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
            type="searchSong"
            disabled={loading}
            value={loading ? 'Saving...' : 'Search'}
            className="btn btn-primary"
            onClick={onSave}
          />
        </div>
        <div className="searchResults">
          <ul>


              {options ? formatMusicDate(options) : " "}

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
