import React from "react";
import "./main.css"

class App extends React.Component {
    state = {
        count: 0
    }

    onIncrease = () => {
        this.setState(
            (oldState) => ({count: oldState.count + 1})
        )
    }

    onDecrease = () => {
        this.setState(
            (oldState) => ({count: oldState.count - 1})
        )
    }
    render() {
        return (
            <div className="container">
                <div className="container">
                    <p>{this.state.count}</p>
                    <button onClick={this.onIncrease} >Plus</button>
                    <button onClick={this.onDecrease} >Minus</button>
                </div>
            </div>
        );
    }
}

export default App;