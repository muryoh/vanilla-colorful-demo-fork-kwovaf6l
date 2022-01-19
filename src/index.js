/** @jsx h */
import { Component, h } from "preact";

export default class MyCounter extends Component {
  state = {
    count: 0,
  };

  inc = () => {
    this.setState((prev) => ({ count: prev.count + 1 }));
  };

  dec = () => {
    this.setState((prev) => ({ count: prev.count - 1 }));
  };

  render() {
    const styles = `.my-counter * {
          font-size: 200%;
        }

        .my-counter span {
          width: 4rem;
          display: inline-block;
          text-align: center;
        }

        .my-counter button {
          width: 4rem;
          height: 4rem;
          border: none;
          border-radius: 10px;
          background-color: seagreen;
          color: white;
        }`;

    return (
      <div className="my-counter">
        <style>{styles}</style>
        <button onClick={() => this.setState({ count: this.state.count - 1 })}>
          -
        </button>
        <span>{this.state.count}</span>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          +
        </button>
      </div>
    );
  }
}
