import React, {PropTypes} from 'react'
import TextInput from '../common/TextInput'
import musicFormatter from './FormatMusicData'

const MusicSearchFormComponent = ({options, onSave, onChange, loading, errors, dispatch}) => {
  function saveSong(event) {
    event.preventDefault()
  }

  // function formatMusicDate(data) {
  //   return data.map((song, index) => {
  //     return (
  //       <ul key={index} className="songInfo">
  //         <li className="infoCells">{song.artistName}</li>
  //         <li className="infoCells">{song.trackName}</li>
  //         <div className="buttonDiv">
  //           <button
  //             type="submit"
  //             className="addButton"
  //             onClick={event => {
  //               event.preventDefault()
  //               dispatch.addSongToForm([song.trackName, song.trackName, song.collectionName])
  //             }}
  //           >
  //             add song
  //           </button>
  //         </div>
  //       </ul>
  //     )
  //   })
  // }

  return (
    <div className="formComponent ">
      <form className="musicForm">
        <div className="musicSearchInput">
          <TextInput
            name="searchSong"
            label="Add Song Request"
            onChange={onChange}
            placeholder="search song"
          />
          <input
            type="submit"
            disabled={loading}
            value={loading ? 'Saving...' : 'Search'}
            className="btn btn-primary"
            onClick={onSave}
          />
        </div>
        <div className={options.length > 0 ? "searchResults" : "noSearchResults"}>
          <ul>
            {options ? musicFormatter(options, dispatch) : " "}
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
  options: PropTypes.array,
  dispatch: PropTypes.object
}

export default MusicSearchFormComponent
