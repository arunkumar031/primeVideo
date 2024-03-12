// Write your code here
import MoviesSlider from '../MoviesSlider'

import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionMovies = moviesList.filter(each => each.categoryId === 'ACTION')
  const comedyMovies = moviesList.filter(each => each.categoryId === 'COMEDY')

  return (
    <div className="bg">
      <img
        className="prime-img"
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
      />
      <h1>Action Movies</h1>
      <MoviesSlider moviesList={actionMovies} />
      <h1>Comedy Movies</h1>
      <MoviesSlider moviesList={comedyMovies} />
    </div>
  )
}

export default PrimeVideo
