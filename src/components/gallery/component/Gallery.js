import React, {Component} from 'react'
import Navigation from '../../common/Navigation'

class Gallery extends Component {
  render() {
    return (
      <div className="page-three-bg container-fluid">
        <Navigation />
        <div className="galleryContainer">
          <h1>Photography alters life by holding it still...</h1>
          <div className="polaroidsContainer">
            <div className="polaroid">
              <img className="image" src={require('../../../images/stairsPicture1.jpg')}/>
            </div>
            <div className="polaroid">
              <img className="image" src={require('../../../images/stairsPicture2.jpg')}/>
            </div>
            <div className="polaroid">
              <img className="image" src={require('../../../images/stairsPicture3.jpg')}/>
            </div>
            <div className="polaroid">
              <img className="image" src={require('../../../images/bridgeHolding.jpg')}/>
            </div>
            <div className="polaroid">
              <img className="image" src={require('../../../images/bridgeHoldingColor.jpg')}/>
            </div>
            <div className="polaroid">
              <img className="imageWide" src={require('../../../images/coupleBehindPose.jpg')}/>
            </div>
            <div className="polaroid">
              <img className="imageWide" src={require('../../../images/coupleBehindPose2.jpg')}/>
            </div>
            <div className="polaroid">
              <img className="imageWide" src={require('../../../images/feet.jpg')}/>
            </div>
            <div className="polaroid">
              <img className="imageWide" src={require('../../../images/kissingBlackAndWhite.jpg')}/>
            </div>
            <div className="polaroid">
              <img className="imageWide" src={require('../../../images/kissingCityLine.jpg')}/>
            </div>
            <div className="polaroid">
              <img className="imageWide" src={require('../../../images/kissingColor.jpg')}/>
            </div>
            <div className="polaroid">
              <img className="imageWide" src={require('../../../images/lookingAtCityBW.jpg')}/>
            </div>
            <div className="polaroid">
              <img className="imageWide" src={require('../../../images/lookingAtCityColor.jpg')}/>
            </div>
            <div className="polaroid">
              <img className="imageWide" src={require('../../../images/lookingAtRing.jpg')}/>
            </div>
            <div className="polaroid">
              <img className="imageWide" src={require('../../../images/lookingAtRings.jpg')}/>
            </div>
            <div className="polaroid">
              <img className="imageWide" src={require('../../../images/lookingAtSky.jpg')}/>
            </div>
            <div className="polaroid">
              <img className="image" src={require('../../../images/piggyBack.jpg')}/>
            </div>
            <div className="polaroid">
              <img className="imageWide" src={require('../../../images/poseCityBack.jpg')}/>
            </div>
            <div className="polaroid">
              <img className="image" src={require('../../../images/propose.jpg')}/>
            </div>
            <div className="polaroid">
              <img className="imageWide" src={require('../../../images/propose2.jpg')}/>
            </div>
            <div className="polaroid">
              <img className="imageWide" src={require('../../../images/rings.jpg')}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Gallery
