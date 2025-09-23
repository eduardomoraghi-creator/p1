import React from "react";

class LembreteLista extends React.Component {
  render() {
    return (
      <div className="border pt-3 pb-3 px-3 rounded-3 mb-3 ms-3 me-3"
           style={{ backgroundColor: "#fdefd2ff" }}>
        <h6 className="text-center flex-grow-1">{this.props.children}</h6>
      </div>//recebe do App o lembrete, via props.children
    );
  }
}

export default LembreteLista;
