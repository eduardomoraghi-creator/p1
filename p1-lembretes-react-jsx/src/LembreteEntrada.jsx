import React from "react";

class LembreteEntrada extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      texto: ""
    };
  }

  render() {
  return (
    <div className="row"> 
      <div className="d-flex mt-4 mb-5">
        
        <input
          type="text"
          className="form-control bg-light text-dark py-3 me-2" 
          placeholder="Digite seu novo lembrete" 
          value={this.state.texto}  
          // controla o valor do state. O campo input sempre reflete this.state.texto
          onChange={(e) => this.setState({ texto: e.target.value })} 
          // onChange:a cada tecla digitada, atualiza o state com o valor do input
        />

        <button
          className="btn btn-primary text-white" 
          type="button" 
          onClick={() => { //clique do botão OK
            const texto = this.state.texto; // Lê o valor atual do state (texto digitado)
            if (texto !== "") { 
              this.props.onClick(texto); // Passa o texto para o App adicionar ao array lembretes
              this.setState({ texto: "" }); // Limpa o input após enviar, resetando o state
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