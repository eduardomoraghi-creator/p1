import React from "react";

class LembreteEntrada extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="d-flex mt-4 mb-5">
          <input
            type="text"
            className="form-control bg-light text-dark py-3 me-2"
            placeholder="Digite seu novo lembrete"
            aria-label="Lembrete"
          />
          <button
            className="btn btn-primary text-white"
            type="button"
          >
            OK
          </button>
        </div>
      </div>
    );
  }
}

export default LembreteEntrada;
