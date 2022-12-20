import React from "react";
import { addFavourites } from "../actions";
import { removeFavourites } from "../actions";
class MovieCard extends React.Component {
  handleFavouriteClick = () => {
    const { movie } = this.props;
    this.props.dispatch(addFavourites(movie));
  };
  handleUnFavouriteClick = () => {
    const { movie } = this.props;
    this.props.dispatch(removeFavourites(movie));
    console.log(movie);
  };
  render() {
    const { movie, isFavourite } = this.props;
    return (
      <div className="movie-card">
        <div className="left">
          <img alt="movie-poster" src={movie.Poster} />
        </div>
        ;
        <div className="right">
          <div className="title">{movie.Title}</div>
          <div className="plot">{movie.Plot}</div>
          <div className="footer">
            <div className="rating">{movie.imdbRating}</div>
            {isFavourite ? (
              <div
                className="unfavourite-btn"
                onClick={this.handleUnFavouriteClick}
              >
                Unfavourite
              </div>
            ) : (
              <div
                className="favourite-btn"
                onClick={this.handleFavouriteClick}
              >
                Favourite
              </div>
            )}
          </div>
        </div>
        ;
      </div>
    );
  }
}
export default MovieCard;
