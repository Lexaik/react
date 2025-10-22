import React from "react";
import './App.css';

class App extends React.Component {
    state = {val: 50}

    update = (event)=>{
        this.setState({val: event.target.value});
    }

    render() {
        return (
            <div className="app">
                <hr/>
                <form>
                    <input type="range" onChange={this.update} min="20" max="200" step="10" value={this.state.val}/>
                </form>
                <hr/>
                <p>Текущее значение: {this.state.val}</p>
                <div>{this.state.val}px x {this.state.val}px</div>
                <div
                    className="square"
                    style={{
                        width: `${this.state.val}px`,
                        height: `${this.state.val}px`
                    }}/>
            </div>
        )
    }
}

export default App;