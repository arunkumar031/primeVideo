// Write your code here
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'

import './index.css'

const MovieItem = props => {
  const {movieDetails} = props
  const {thumbnailUrl, videoUrl} = movieDetails

  return (
    <div>
      <Popup
        modal
        trigger={
          <button type="button">
            <img className="image" src={thumbnailUrl} />
          </button>
        }
      >
        {close => (
          <div>
            <button type="button" onClick={() => close()}>
              <IoMdClose />
            </button>
            <div>
              <ReactPlayer url={videoUrl} />
            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem

// <img className="image" src={thumbnailUrl} />
// <IoMdClose />
