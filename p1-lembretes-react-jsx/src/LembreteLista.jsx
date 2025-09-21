import React from 'react';

class LembreteLista extends React.Component {
  render() {
    const { lembrete, className } = this.props;
    return (
      <div
        className={`border pt-3 pb-3 px-3 rounded-3 mb-3 ms-5 me-5 mx-auto`}
      >
        <h6 className="text-center flex-grow-1">{lembrete}</h6>
      </div>
    );
  }
}

export default LembreteLista;
