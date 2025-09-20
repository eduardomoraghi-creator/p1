import React from "react";

const LembreteEntrada = () => {
  return (
    <div className="row">
      <div className="input-group mt-3 mb-3">
        <input
          type="text"
          className="form-control bg-light text-dark"
          placeholder="Digite seu novo lembrete"
          aria-label="Lembrete"
          aria-describedby="button-addon2"
        />
        <button
          className="btn btn-primary text-white"
          type="button"
          id="button-addon2"
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default LembreteEntrada;
