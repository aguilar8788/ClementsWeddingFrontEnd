import React, {PropTypes} from 'react'

const FormatMusicData = (songData, dispatch) => {
  if (songData) {
    return songData.map((song, iterator) => {
      return (
        <div key={iterator}>
          <ul className="songInfo">
            <li className="infoCells">{song.artistName}</li>
            <li className="infoCells">{song.trackName}</li>
            <div className="buttonDiv">
              <button
                type="submit"
                className="addButton"
                onClick={event => {
                  event.preventDefault()
                  dispatch.addSongToForm([song.trackName, song.trackName, song.collectionName])
                }}
              >
                add song
              </button>
            </div>
          </ul>
        </div>
      )
    })
  }
}

FormatMusicData.propTypes = {
  songData: PropTypes.object,
  dispatch: PropTypes.object
}

export default FormatMusicData
