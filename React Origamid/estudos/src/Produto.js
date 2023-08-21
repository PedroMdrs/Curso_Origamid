import React from "react";

class Produto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contar: 0,
    };
    this.handleclick = this.handleclick.bind(this);
  }
  handleclick() {
    this.setState((state) => ({ contar: state.contar + 1 }));
  }
  render() {
    return (
      <div>
        <h1>VAI TOAM RNO CU</h1>
        <button onClick={this.handleclick}>Aumentar</button>
        <br></br>
        <p>{this.state.contar}</p>
      </div>
    );
  }
}
export default Produto;
