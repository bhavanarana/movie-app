import React from "react";
import { data } from "../data";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { addMovies, setShowFavourites } from "../actions";
class App extends React.Component {
  componentDidMount() {
    const { store } = this.props;
    store.subscribe(() => {
      this.forceUpdate();
    });
    //make api call
    //dispatch action
    // store.dispatch({
    //   type: "ADD_MOVIES",
    //   movies: data,
    // });
    store.dispatch(addMovies(data));
    // console.log("State", this.props.store.getState());
  }
  isMovieFavourite = (movie) => {
    const { movies } = this.props.store.getState(); //{movies: {}, search: {}}
    const index = movies.favourites.indexOf(movie);
    if (index !== -1) {
      //found a movie
      return true;
    }
    return false;
  };
  // handleFavouritesTab = () => {
  //   const { favourites } = this.props.store.getState();
  //   console.log("favt", favourites);
  // };
  onChangeTab = (val) => {
    this.props.store.dispatch(setShowFavourites(val));
  };
  render() {
    const { movies, search } = this.props.store.getState(); //{movies: {}, search: {}}
    const { list, favourites, showFavourites } = movies; // {moves: {}}
    const displayMovies = showFavourites ? favourites : list;
    return (
      <div className="App">
        <Navbar dispatch={this.props.store.dispatch} search={search} />
        <div className="main">
          <div className="tabs">
            <div
              className={`tab ${showFavourites ? "" : "active-tabs"}`}
              onClick={() => {
                this.onChangeTab(false);
              }}
            >
              Movies
            </div>
            <div
              className={`tab ${showFavourites ? "active-tabs" : ""}`}
              onClick={() => {
                this.onChangeTab(true);
              }}
            >
              Favourites
            </div>
          </div>
          <div className="list">
            {displayMovies.map((movie, index) => (
              <MovieCard
                movie={movie}
                key={`movies-${index}`}
                dispatch={this.props.store.dispatch}
                isFavourite={this.isMovieFavourite(movie)} //true or false
              />
            ))}
          </div>
          {displayMovies.length === 0 ? (
            <div className="no-movies">No movies to display</div>
          ) : null}
        </div>
      </div>
    );
  }
}
export default App;
