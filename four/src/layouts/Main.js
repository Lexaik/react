import React from 'react';
import './Main.css';
import MovieList from '../components/MovieList';
import Preloader from '../components/Preloader';
import Search from "../components/Search";


class Main extends React.Component {
    state = {
        movies: [],
        loading: true,
        page: 1,
    }
    componentDidMount() {
        fetch("http://www.omdbapi.com/?apikey=95f74a54=matrix")
            .then(res => res.json())
        .then(data => this.setState({ movies: data.Search, loading: false,  }));
    }

    searchMovie = (str, type="all", page) => {
        this.setState({loading: true})
        fetch(`http://www.omdbapi.com/?apikey=95f74a54=${str}${type !=='all'?'&type=${type}':''}${`&page=${page}`}`)
            .then(res => res.json())
            .then(data => this.setState({ movies: data.Search }))
    }
    render() {
        console.log(this.state.movies);
        const { movies } = this.state;
        return (
            <div className="main">
                <div className="wrap">
                    <Search searchMovie={this.searchMovie} />
                    {
                        loading ? <Preloader /> : <MovieList movies={movies}/>

                    }
                    <MovieList />
                </div>
            </div>
        )
    }
}
export default Main;