import React from "react";

class Range extends React.Component {
    state = {val: 50}

    update = (event)=>{
        this.setState({val: event.target.value});
    }

    render() {
        const {firstName, email} = this.state;
        return (
            <>
                <hr/>
                <form>
                    <input type="range" onChange={this.update} min="20" step="10"/>

                </form>
                <hr/>
                <p>{this.state.val}</p>

            </>
        )
    }
}
export default Range;