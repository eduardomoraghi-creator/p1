import React from "react";
import LembreteEntrada from "./LembreteEntrada";
import LembreteLista from "./LembreteLista";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lembretes: [] //array de lembretes, inicialmente criado vazio
    };
  }

  adicionarLembrete = (texto) => {

    this.setState(antigo => ({ lembretes: antigo.lembretes.concat(texto) }));
    //cria um novo array concatenando todos os antigo.lembretes com o novo texto
    //setState atualiza o state do componente com o novo lembrete e dispara a 
    //renderização automática 
  };

  render() {
    const { lembretes } = this.state; //lembretes contem o valor de this.state.lembretes

    return (
      <div className="container text-primary-emphasis text-center fs-5 border
       border-primary-subtle rounded-4 p-3">
        <div className="row">
          <div className="col-12 mb-3">
            <LembreteEntrada onClick={this.adicionarLembrete} />

            <div className="row gx-0 border pt-3 border-primary rounded-4"
              style={{ backgroundColor: "#331a03ff" }}>
              {lembretes.map((lembrete) => ( //arrow function chamada para cada elemento do array
                <div className="col-12 col-md-6 col-lg-4">
                  <LembreteLista>{lembrete}</LembreteLista>
                </div>//{lembrete} é passado para LembreteLista como props.children
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
