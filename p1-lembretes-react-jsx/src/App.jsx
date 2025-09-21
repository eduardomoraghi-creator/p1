import React from "react";
import LembreteEntrada from "./LembreteEntrada";
import LembreteLista from "./LembreteLista";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lembretes: [
        { descricao: 'Preparar aula de programação' },
        { descricao: 'Fazer feira' },
        { descricao: 'Preparar marmitas' },
      ]
    };
  }

  componentDidMount() {
  }

  render() {
    const { lembretes } = this.state;
    return (
      <div className="container text-primary-emphasis text-center fs-5 border
       border-primary-subtle rounded-4">
        <div className="row">
          <div className="col-12 mb-3">
            <LembreteEntrada />
            <div className="row gx-1 border pt-3 ms-1 me-1 border-primary-subtle rounded-4">
              { lembretes.map(lembrete => (
                  <div className="col-12 col-md-6 col-lg-4">
                    <LembreteLista lembrete={lembrete.descricao} />
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div >
    );
  }
}

export default App;
