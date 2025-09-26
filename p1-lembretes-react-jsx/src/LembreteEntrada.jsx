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
            id="texto"
          />
          <button
            className="btn btn-primary text-white"
            type="button"
            onClick={() => {
              const input = document.getElementById("texto"); //aqui é feito a leitura do campo input
              // diretamente do DOM.
              const texto = input.value; //Armazena na constante texto, o valor do texto digitado.


              if (texto !== "") {//não permite gravar bilhetes vazios
                this.props.onClick(texto); //chama a função onClick com o texto do bilhete passado 
                
                input.value = ""; //limpa o campo input após enviar o lembrete
              }
            }}
          >
            OK
          </button>
        </div>
      </div>
    );
  }
}

export default LembreteEntrada;
