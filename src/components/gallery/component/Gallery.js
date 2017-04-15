import React, {Component} from 'react'
import Navigation from '../../common/Navigation'

class Gallery extends Component {
  render() {
    return (
      <div className="page-three-bg container-fluid">
        <Navigation />
        <div className="galleryContainer">
          <h1>Gallery</h1>
          <div className="polaroidsContainer">
            <div className="polaroidOdd">
                <img className="image" src={require('../../../images/infoPageBackground.png')} />
            </div>
            <div className="polaroidOdd">
              <img className="image" src={require('../../../images/cityLine.png')} />
            </div>
            <div className="polaroidOdd">
              <img className="image" src={require('../../../images/infoPageBackground.png')} />
            </div>
            <div className="polaroidOdd">
              <img className="image" src={require('../../../images/infoPageBackground.png')} />
            </div>
            <div className="polaroidOdd">
              <img className="image" src={require('../../../images/infoPageBackground.png')} />
            </div>
            <div className="polaroidOdd">
              <img className="image" src={require('../../../images/infoPageBackground.png')} />
            </div>


            <div className="polaroidEven">
              <img className="image" src={require('../../../images/infoPageBackground.png')} />
            </div>
            <div className="polaroidEven">
              <img className="image" src={require('../../../images/infoPageBackground.png')} />
            </div>
            <div className="polaroidEven">
              <img className="image" src={require('../../../images/infoPageBackground.png')} />
            </div>
            <div className="polaroidEven">
              <img className="image" src={require('../../../images/infoPageBackground.png')} />
            </div>
            <div className="polaroidEven">
              <img className="image" src={require('../../../images/infoPageBackground.png')} />
            </div>
            <div className="polaroidEven">
              <img className="image" src={require('../../../images/infoPageBackground.png')} />
            </div>

            <div className="polaroidEven">
              <img className="image" src={require('../../../images/infoPageBackground.png')} />
            </div>
            <div className="polaroidEven">
              <img className="image" src={require('../../../images/infoPageBackground.png')} />
            </div>
            <div className="polaroidEven">
              <img className="image" src={require('../../../images/infoPageBackground.png')} />
            </div>
            <div className="polaroidEven">
              <img className="image" src={require('../../../images/infoPageBackground.png')} />
            </div>
            <div className="polaroidEven">
              <img className="image" src={require('../../../images/infoPageBackground.png')} />
            </div>
            <div className="polaroidEven">
              <img className="image" src={require('../../../images/infoPageBackground.png')} />
            </div>
            <div className="polaroidEven">
              <img className="image" src={require('../../../images/infoPageBackground.png')} />
            </div>
            <div className="polaroidEven">
              <img className="image" src={require('../../../images/infoPageBackground.png')} />
            </div>
            <div className="polaroidEven">
              <img className="image" src={require('../../../images/infoPageBackground.png')} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Gallery
