import './App.css';
import React from "react";
import Posts from "./Posts";
/*import Hello from './Hello';
import Length from "./Length";
import Form from './Form';
import Range from "./Range";*/
class App extends React.Component {
    constructor(props) {
        super(props);
    console.log("Constructor");

    this.state = {
        psts: [
            {id: '1', name: 'JS basic', title: "Обучение базовым возможностям JS"},
            {id: '2', name: 'JS advance', title: "Обучение расширенным возможностям JS"},
            {id: '3', name: 'React JS', title: "Обучение React JS"}
        ]
    }
}
    removePost = (id)=>{
        this.setState({posts: this.state.filter(post => post.id !== id)})

}
componentDidMount() {
        console.log("componentDidMount");
}
componentDidUpdate() {
        console.log("componentDidUpdate");
}

    componentWillUnmount() {
        console.log("componentWillUnmount");
}
    render() {
        let {posts}= this.state;

        return (
            <div className="App">
                {
                    console.log("Return")
                }
                <Posts posts={posts} removePost={this.removePost}/>
                {/*<Hello />
                <Length/>
                <Form/>
                <Range/>*/}
            </div>
        );
    }
}

export default App;
