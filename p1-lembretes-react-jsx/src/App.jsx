import React from "react";
import LembreteEntrada from "./LembreteEntrada";
import LembreteLista from "./LembreteLista";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lembretes: [],//array que armazena todos os lembretes
      mostrarFavoritos: false //incializa a variavel para que inicie mostrando todos os 
      //bilhetes
    };
  }

  adicionarLembrete = (texto) => {
    this.setState((stateAnterior) => ({
      // nesta função, concat cria um novo array (lembretes) inserindo o novo texto (text)
      // ao "stateAnterior" . Não modifica o array atual (anterior ao state)
      lembretes: stateAnterior.lembretes.concat(texto)
    }));
  };

  favoritos = () => {
    //ao clicar no botão "Mostrar Favoritos", esta função é chamada
    // e inverte o value de mostrarFavoritos 
    this.setState((stateAnterior) => ({
      mostrarFavoritos: !stateAnterior.mostrarFavoritos
    }));
  };

  render() {
    const lembretes = this.state.lembretes;
    const mostrarFavoritos = this.state.mostrarFavoritos;

    return (
      <div className="container text-primary-emphasis text-center fs-5
       border border-primary rounded-4 p-3">
        <div className="row">
          <div className="col-12 mb-3">
            <LembreteEntrada onClick={this.adicionarLembrete} />

            <button
              className="btn btn-info mb-3"
              onClick={this.favoritos}
            >
              {/* chaveia texto do botão */}
              {mostrarFavoritos ? "Mostrar Todos" : "Mostrar Favoritos"}
            </button>

            <div
              className="row gx-0 border pt-3 border-primary rounded-4"
              style={{ backgroundColor: "#331a03ff" }}
            >
              {lembretes.map((lembrete) => (
                <div className="col-12 col-md-6 col-lg-4">
                  <LembreteLista mostrarFavoritos={mostrarFavoritos}>
                    {/* passa via props "mostrarFavoritos" para que o componente 
                    LembreteLista exiba os favoritos, ou todos os lembretes. */}

                    {lembrete}
                    {/* O texto do lembrete é passado via children para LembreteLista. */}

                  </LembreteLista>
                </div>
              ))}

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;