import React from "react"
import Search from "./components/Search.css"

class Search extends React.Component {
    state = {
        search: "",
        type: "all"
    }
    handleKey =(event) => {
        if (event.key === "Enter") {
            this.props.searchMovie(this.state.search);
        }
    }
    nextPage = () => {
        this.setState(() => ({page: this.state.page + 1}))
        ()=> this.props.searchMovie(this.state.search, this.state.type, this.state.page);
    }
    prevPage = () => {
        this.setState(() => ({page: this.state.page - 1}))
        ()=> this.props.searchMovie(this.state.search, this.state.type, this.state.page);
    }
    render() {
        return (
            <>
            <div className="search">
                <input
                    type="search"
                    placeholder="Search"
                    value={this.state.search}
                    onChange={(e) => this.setState({search: e.target.value})}
                    onKeyDown={this.handleKey}
                />
                <button className="btn" onClick={() => this.props.searchMovie(this.state.search)}>Search</button>
            </div>
            <div className="radio">
                <input type="radio" name="t"> <label htmlFor="all">All</label></input>
                <input type="radio"> <label htmlFor="all">All</label></input>
                <input type="radio"> <label htmlFor="all">All</label></input>
                <input type="radio"> <label htmlFor="all">All</label></input>
            </div>
                <div className="navigation">
                    <button className="btn" onClick={this.prevPage}>Prev</button>
                    <button className="btn" onClick={this.nextPage}>Next</button>
                </div>
        </>

    )
    }
}

export default Search