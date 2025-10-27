import React from "react";
import './App.css';
import Posts from "./components/Posts";

class App extends React.Component {
    state = {
        psts: [
            {id: '1', name: 'JS basic', title: "Обучение базовым возможностям JS"},
            {id: '2', name: 'JS advance', title: "Обучение расширенным возможностям JS"},
            {id: '3', name: 'React JS', title: "Обучение React JS"}
        ]
    }

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