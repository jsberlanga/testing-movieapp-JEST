/* eslint react/no-did-mount-set-state: 0 */
import React, { PureComponent } from "react";
import styled from "styled-components";
import Movie from "./Movie";

class MoviesList extends PureComponent {
  state = {
    movies: [],
    loading: null,
    error: null
  };

  async componentDidMount() {
    try {
      this.setState({ loading: "Loading..." });
      const res = await fetch(
        "https://api.themoviedb.org/3/discover/movie?api_key=af3f11ab7d4e72ba405b3cec786ed716f&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"
      );
      const movies = await res.json();
      // console.log(movies);
      if (movies.success === false) {
        this.setState({
          error: "Opps! There was an error. Please try again",
          loading: null
        });
      }
      if (movies.results) {
        this.setState({
          movies: movies.results,
          loading: null
        });
      }
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const { movies, error, loading } = this.state;
    if (loading) return <Loading loading={loading} />;
    if (error)
      return (
        <p data-testid="error" style={{ color: "white" }}>
          {error}
        </p>
      );
    return (
      <MovieGrid>
        {movies.map(movie => (
          <Movie data-testid="movie" key={movie.id} movie={movie} />
        ))}
      </MovieGrid>
    );
  }
}

const Loading = ({ loading }) => {
  return (
    <div>
      {loading && (
        <p data-testid="loading" style={{ color: "white" }}>
          {loading}
        </p>
      )}
    </div>
  );
};

export default MoviesList;

const MovieGrid = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(6, 1fr);
  grid-row-gap: 1rem;
`;
